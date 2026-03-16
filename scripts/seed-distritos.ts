/**
 * Seed: 22 distritos electorales federales de CDMX
 * Fuente: INE MGS DIC-2025, Acuerdo INE/CG59/2017
 * Ejecutar: DATABASE_URL="..." npx tsx scripts/seed-distritos.ts
 */
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { distritos } from "../src/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const DISTRITOS_CDMX = [
  { numero_local: 1,  descripcion_zona: "Gustavo A. Madero norte" },
  { numero_local: 2,  descripcion_zona: "Gustavo A. Madero centro" },
  { numero_local: 3,  descripcion_zona: "Azcapotzalco oriente" },
  { numero_local: 4,  descripcion_zona: "Gustavo A. Madero sur-oriente" },
  { numero_local: 5,  descripcion_zona: "Azcapotzalco poniente / Miguel Hidalgo norte" },
  { numero_local: 6,  descripcion_zona: "Gustavo A. Madero poniente" },
  { numero_local: 7,  descripcion_zona: "Milpa Alta / Tláhuac sur" },
  { numero_local: 8,  descripcion_zona: "Tláhuac norte y centro" },
  { numero_local: 9,  descripcion_zona: "Cuauhtémoc norte" },
  { numero_local: 10, descripcion_zona: "Venustiano Carranza occidente" },
  { numero_local: 11, descripcion_zona: "Iztacalco norte / Venustiano Carranza oriente" },
  { numero_local: 12, descripcion_zona: "Cuauhtémoc sur" },
  { numero_local: 13, descripcion_zona: "Miguel Hidalgo sur y centro" },
  { numero_local: 14, descripcion_zona: "Tlalpan norte" },
  { numero_local: 15, descripcion_zona: "Iztacalco sur" },
  { numero_local: 16, descripcion_zona: "Tlalpan centro-sur" },
  { numero_local: 17, descripcion_zona: "Benito Juárez" },
  { numero_local: 18, descripcion_zona: "Álvaro Obregón norte" },
  { numero_local: 19, descripcion_zona: "Tlalpan sur" },
  { numero_local: 20, descripcion_zona: "Álvaro Obregón poniente / Cuajimalpa" },
  { numero_local: 21, descripcion_zona: "Xochimilco" },
  { numero_local: 22, descripcion_zona: "Iztapalapa norte-oriente" },
];

async function main() {
  console.log("Seeding 22 distritos CDMX...");

  const rows = DISTRITOS_CDMX.map((d) => ({
    codigo: `CDMX-${d.numero_local.toString().padStart(2, "0")}`,
    estado: "Ciudad de México",
    estado_abrev: "CDMX",
    numero_local: d.numero_local,
    descripcion_zona: d.descripcion_zona,
  }));

  await db.insert(distritos).values(rows).onConflictDoNothing();
  console.log(`✓ ${rows.length} distritos insertados (o ya existían)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
