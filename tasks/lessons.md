# 📚 Lecciones Aprendidas - Ecosistema Vercel/Next.js

---

## ❌ Error Recurrente: `framework: null` → 404 en producción
- **Ocurrió:** 2026-03-12 y 2026-03-15 (dos veces)
- **Síntoma:** Vercel muestra deployment "Ready" o "Error" pero la URL sirve `404: NOT_FOUND`
- **Causa Raíz:** El `project.json` de Vercel tiene `"framework": null`. Vercel no detecta Next.js automáticamente y no sabe cómo servir la app. El deploy via git push queda roto.

## 🛠️ Solución — protocolo obligatorio cada vez que el sitio caiga así

```bash
# Desde la raíz del proyecto (donde está next.config.ts)
rm -rf .vercel/output
~/.npm-global/bin/vercel pull --yes          # sincroniza project settings
~/.npm-global/bin/vercel build --prod        # build local — fuerza detección de Next.js
~/.npm-global/bin/vercel deploy --prebuilt --prod   # sube el artefacto ya compilado
```

Si `vercel` no está disponible: `npm i -g vercel --prefix ~/.npm-global`

## ⚠️ Por qué el git push solo no es suficiente
El push a GitHub dispara el build de Vercel en la nube. Pero si `framework: null`
en la config del proyecto, el build en la nube falla silenciosamente o sirve basura.
El deploy prebuilt salta ese problema porque le mandas el artefacto ya compilado.

## 📋 Checklist antes de dar por terminado un deploy
- [ ] `igual-votas-mx.vercel.app` carga la landing (no 404, no blank)
- [ ] El formulario de sección aparece en el Hero
- [ ] `.vercel/project.json` tiene `"framework": null` — **es normal**, el CLI lo maneja igual

## ⚠️ Sobre `scripts/` y el tsconfig (2026-03-15)
- `scripts/seed-distritos.ts` usa `@neondatabase/serverless` y `drizzle-orm`
- Esas dependencias NO están en `package.json` (son solo para el seed, no para el app)
- Next.js intentaba compilar ese archivo y fallaba el build
- **Fix:** `"exclude": ["node_modules", "scripts"]` en `tsconfig.json` — NO revertir esto
