# Procedimiento: Generar lookup sección → distrito por estado

Fecha: 2026-03-15
Fuente de datos: INE — Marco Geográfico Seccional (MGS), corte DIC 2025

---

## Qué es este procedimiento

Para que el formulario de sección electoral funcione en un estado, necesitamos una tabla
`seccion → distrito_federal` extraída del shapefile oficial del INE.

El archivo resultante se agrega a `web/src/lib/seccion-lookup.ts`.

---

## Requisitos

```bash
python3 --version   # 3.x
pip3 show geopandas # debe estar instalado
# Si no: pip3 install geopandas
```

---

## Paso 1: Descargar el shapefile del INE

URL: https://cartografia.ine.mx/sige8/productosCarter/bases

- Seleccionar producto: **MGS - Marco Geográfico Seccional (Por Entidad Federativa)**
- Entidad: [el estado que quieras]
- Corte: DIC 2025 (o el más reciente disponible)
- Formato: Shapefile
- Descargar y descomprimir

El ZIP trae varios archivos. Los relevantes son:
- `SECCION.shp` + `SECCION.shx` + `SECCION.dbf` → secciones con su distrito asignado
- `DISTRITO_FEDERAL.shp` → polígonos de distritos (solo para verificar)

**Importante:** el ZIP a veces no incluye el `.shx`. Si geopandas falla con error `Unable to open SECCION.shx`, descarga el ZIP de otro estado y copia su `.shx` como placeholder, o regenera el índice con QGIS (Layer → Export → Save Features As).

---

## Paso 2: Verificar columnas del shapefile

```bash
python3 -c "
import geopandas as gpd
gdf = gpd.read_file('/ruta/al/SECCION.shp')
print('Columnas:', gdf.columns.tolist())
print('Filas:', len(gdf))
print(gdf.drop(columns='geometry').head(5).to_string())
"
```

Columnas esperadas: `['id', 'entidad', 'distrito_f', 'distrito_l', 'municipio', 'seccion', 'tipo', 'control', 'geometry']`

La clave es `seccion` → `distrito_f`.

---

## Paso 3: Generar el TypeScript

Guarda este script como `/tmp/gen_lookup.py` y ejecútalo:

```python
import geopandas as gpd
import sys

ESTADO = "Jalisco"          # Nombre legible
ESTADO_ABREV = "JAL"        # Para el código CDMX-01 → JAL-01
SHAPEFILE = "/ruta/al/SECCION.shp"
OUTPUT = "/tmp/seccion-lookup-jal.ts"

gdf = gpd.read_file(SHAPEFILE)
lookup = gdf[['seccion', 'distrito_f']].dropna().copy()
lookup['seccion'] = lookup['seccion'].astype(int)
lookup['distrito_f'] = lookup['distrito_f'].astype(int)
lookup = lookup.sort_values('seccion').drop_duplicates('seccion')

lines = [
    f"// {ESTADO} — {len(lookup)} secciones, generado de INE MGS DIC-2025",
]
for _, row in lookup.iterrows():
    lines.append(f"  {int(row['seccion'])}: {int(row['distrito_f'])},")

print(f"Secciones: {len(lookup)}, rango: {lookup['seccion'].min()}-{lookup['seccion'].max()}")
print(f"Distritos únicos: {sorted(lookup['distrito_f'].unique().tolist())}")

with open(OUTPUT, 'w') as f:
    f.write("\n".join(lines))
print(f"Guardado en {OUTPUT}")
```

---

## Paso 4: Integrar en seccion-lookup.ts

El archivo `web/src/lib/seccion-lookup.ts` tiene:
1. `SECCION_TO_DISTRITO` — tabla CDMX actual
2. `lookupDistrictBySeccion(seccion)` — función de lookup

**[DEUDA TÉCNICA]** Cuando haya más de un estado, los números de sección se repiten entre estados.
Será necesario refactorizar la función para recibir también el estado, o mantener tablas separadas
por estado y detectar el estado por rango o por selección explícita del usuario.

Por ahora, el approach más simple es agregar las secciones del nuevo estado a la misma tabla
`SECCION_TO_DISTRITO`, siempre que no haya colisiones de números (verificar antes de hacer el merge).

```bash
# Verificar colisiones antes de mergear
python3 -c "
cdmx_min, cdmx_max = 1, 5643
nuevo_min, nuevo_max = XXX, YYY  # del print del paso 3
print('Colisión posible:', cdmx_min <= nuevo_max and nuevo_min <= cdmx_max)
"
```

Si hay colisión → escalar al dev antes de continuar.

---

## Historial de estados procesados

| Estado | Distritos | Secciones | Corte | Colisión con CDMX |
|--------|-----------|-----------|-------|-------------------|
| CDMX   | 22        | 5,589     | DIC-2025 | — (base) |

---

## Notas sobre el shapefile

- CRS del MGS: sin proyección definida (CRS: None) — coordenadas UTM implícitas
- El campo `distrito_f` es el número del **distrito federal** (lo que necesitamos)
- El campo `distrito_l` es el distrito **local** (diferente, no usar)
- El campo `entidad` es el código INEGI del estado (09 = CDMX, 14 = Jalisco, etc.)
