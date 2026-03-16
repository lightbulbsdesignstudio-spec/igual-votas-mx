/**
 * Seed: 22 diputados federales de mayoría relativa de CDMX
 * Fuente: sitl.diputados.gob.mx LXVI Legislatura (scraped 2026-03-15)
 * Ejecutar: DATABASE_URL="..." npx tsx scripts/seed-diputados.ts
 */
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { legisladores, distritos } from "../src/db/schema";
import { eq } from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const DIPUTADOS = [
  { distrito: 1, nombre: "Álvarez López Jesús Emiliano", slug: "alvarez-lopez-jesus-emiliano", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/504_foto_chica.jpg", iniciativas: 11 },
  { distrito: 2, nombre: "Benavides Castañeda José Alberto", slug: "benavides-castaneda-jose-alberto", partido: "PT", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/164_foto_chica.jpg", iniciativas: 24 },
  { distrito: 3, nombre: "Jiménez Godoy Gabriela Georgina", slug: "jimenez-godoy-gabriela-georgina", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/038_foto_chica.jpg", iniciativas: 13 },
  { distrito: 4, nombre: "Padierna Luna María de los Dolores", slug: "padierna-luna-maria-de-los-dolores", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/004_foto_chica.jpg", iniciativas: 14 },
  { distrito: 5, nombre: "Perea Cruz Jesús Irugami", slug: "perea-cruz-jesus-irugami", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/528_foto_chica.jpg", iniciativas: 2 },
  { distrito: 6, nombre: "Campos Plancarte Daniel", slug: "campos-plancarte-daniel", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/026_foto_chica.jpg", iniciativas: 2 },
  { distrito: 7, nombre: "Rendón Gómez Juan Guillermo", slug: "rendon-gomez-juan-guillermo", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/021_foto_chica.jpg", iniciativas: 8 },
  { distrito: 8, nombre: "Silva Andraca Ruth Maricela", slug: "silva-andraca-ruth-maricela", partido: "PVEM", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/513_foto_chica.jpg", iniciativas: 37 },
  { distrito: 9, nombre: "Mejía Méndez Roberto", slug: "mejia-mendez-roberto", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/544_foto_chica.jpg", iniciativas: 2 },
  { distrito: 10, nombre: "Zavala Gómez del Campo Margarita Ester", slug: "zavala-gomez-del-campo-margarita-ester", partido: "PAN", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/202_foto_chica.jpg", iniciativas: 769 },
  { distrito: 11, nombre: "Segura Trejo Elena Edith", slug: "segura-trejo-elena-edith", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/027_foto_chica.jpg", iniciativas: 7 },
  { distrito: 12, nombre: "Sandoval Hernández Mónica Elizabeth", slug: "sandoval-hernandez-monica-elizabeth", partido: "PRI", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/387_foto_chica.jpg", iniciativas: 24 },
  { distrito: 13, nombre: "Sánchez Cervantes Francisco Javier", slug: "sanchez-cervantes-francisco-javier", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/014_foto_chica.jpg", iniciativas: 6 },
  { distrito: 14, nombre: "Hernández Mirón Carlos", slug: "hernandez-miron-carlos", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/059_foto_chica.jpg", iniciativas: 2 },
  { distrito: 15, nombre: "Döring Casar Federico", slug: "dring-casar-federico", partido: "PAN", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/209_foto_chica.jpg", iniciativas: 763 },
  { distrito: 16, nombre: "Piceno  Carina", slug: "piceno-carina", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/030_foto_chica.jpg", iniciativas: 27 },
  { distrito: 17, nombre: "Madrazo Silva Carlos Arturo", slug: "madrazo-silva-carlos-arturo", partido: "PVEM", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/438_foto_chica.jpg", iniciativas: 20 },
  { distrito: 18, nombre: "García Hernández Gabriel", slug: "garcia-hernandez-gabriel", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/162_foto_chica.jpg", iniciativas: 1 },
  { distrito: 19, nombre: "Téllez Hernández Héctor Saúl", slug: "tellez-hernandez-hector-saul", partido: "PAN", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/237_foto_chica.jpg", iniciativas: 761 },
  { distrito: 20, nombre: "Rojo Pimentel Ana Karina", slug: "rojo-pimentel-ana-karina", partido: "PT", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/125_foto_chica.jpg", iniciativas: 42 },
  { distrito: 21, nombre: "Garcés Medina Edén", slug: "garces-medina-eden", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/516_foto_chica.jpg", iniciativas: 7 },
  { distrito: 22, nombre: "Zúñiga Cerón Marisela", slug: "zuniga-ceron-marisela", partido: "MORENA", foto: "https://sitl.diputados.gob.mx/LXVI_leg/fotos_lxviconfondo/019_foto_chica.jpg", iniciativas: 16 },
];

async function main() {
  console.log("Seeding 22 diputados CDMX...");
  let ok = 0;
  for (const d of DIPUTADOS) {
    const distrito = await db.select().from(distritos)
      .where(eq(distritos.numero_local, d.distrito)).limit(1);
    if (!distrito[0]) { console.warn(`  ⚠ Distrito ${d.distrito} no encontrado`); continue; }
    await db.insert(legisladores).values({
      nombre_completo: d.nombre,
      slug: d.slug,
      partido: d.partido,
      distrito_id: distrito[0].id,
      foto_url: d.foto || null,
      iniciativas_presentadas: d.iniciativas,
    }).onConflictDoUpdate({ target: legisladores.slug, set: {
      partido: d.partido,
      foto_url: d.foto || null,
      iniciativas_presentadas: d.iniciativas,
      updated_at: new Date(),
    }});
    ok++;
  }
  console.log(`✓ ${ok} diputados insertados/actualizados`);
}

main().catch((e) => { console.error(e); process.exit(1); });