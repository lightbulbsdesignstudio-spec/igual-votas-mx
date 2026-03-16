# Estado del Proyecto - Igual Votas MX

## 📅 Última actualización: 2026-03-15

## 🎯 Objetivo Actual
Lookup de sección electoral → distrito funcionando en Hero. Siguiente paso: agregar más estados al lookup.

## 🛠️ Stack y Estructura
Ver `.claude/CLAUDE.md` — sección "Notas del Proyecto".

## ✅ Tareas Completadas
- [x] Migración de HTML estático a Next.js en `web/`
- [x] Componentes migrados: Nav, Hero, Countdown, Honestidad, Dato, QueHacemos, Rigor, Donaciones, Email, Footer
- [x] Limpieza de archivos estáticos en raíz de `web/`
- [x] Vinculación y deploy exitoso en Vercel
- [x] Resolución de bug Framework Preset (ver lessons.md — cache corrupto en `.vercel/output`)
- [x] Sitio en vivo y funcionando en producción
- [x] Lookup sección → distrito implementado para CDMX (22 distritos, 5589 secciones, fuente INE MGS DIC-2025)
- [x] Formulario de sección electoral en Hero (reemplazó lookup por CP)
- [x] Seed corregido a 22 distritos (fuente: shapefile INE, no 24 como se asumía)

## ⏳ Tareas Pendientes
- [ ] Agregar más estados al lookup (ver procedimiento en `tasks/research/procedimiento-lookup-estados.md`)
- [ ] Investigar discrepancia 22 vs 24 distritos CDMX (ver deuda técnica en seccion-lookup.ts)
- [ ] Verificar funcionamiento de formulario de email
- [ ] Configurar dominio personalizado `igualvotas.mx`
- [ ] Agregar `metadataBase` en metadata para resolver warning de OG images
- [ ] Tests de `lookupDistrictBySeccion` (edge cases identificados en /review)

## ⚠️ Bloqueos
- Ninguno.

## 📌 Sesión 2026-03-15 (tarde)
- Decisión: lookup por sección electoral en lugar de CP (más preciso, votantes tienen credencial)
- Fuente de datos: INE MGS DIC-2025 SECCION.shp — shapefile oficial
- Generado `web/src/lib/seccion-lookup.ts` con 5589 secciones de CDMX
- Creado `web/src/components/SeccionForm.tsx` — formulario en Hero
- Descubierto: CDMX tiene 22 distritos en shapefile INE, no 24 como tenía el seed original
