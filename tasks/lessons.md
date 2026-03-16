# 📚 Lecciones Aprendidas - Ecosistema Vercel/Next.js

---

## ❌ Error Recurrente: `framework: null` → 404 en producción
- **Ocurrió:** 2026-03-12 y 2026-03-15 (dos veces)
- **Síntoma:** Vercel muestra deployment "Ready" o "Error" pero la URL sirve `404: NOT_FOUND`
- **Causa Raíz:** El `project.json` de Vercel tiene `"framework": null`. Vercel no detecta Next.js automáticamente y no sabe cómo servir la app. El deploy via git push queda roto.

## 🔧 Fix permanente (hacer UNA VEZ si el proyecto se recrea en Vercel)
En el dashboard: `igual-votas-mx` → Settings → **Build and Deployment** → **Framework Preset** → seleccionar **Next.js** → Save.
Sin esto, Vercel no detecta Next.js y todos los deploys quedan rotos aunque digan "Ready".

## 🛠️ Protocolo de deploy — usar SIEMPRE (no solo git push)

```bash
# Desde la raíz del proyecto (donde está next.config.ts)
rm -rf .vercel/output
~/.npm-global/bin/vercel pull --yes                 # sincroniza project settings
~/.npm-global/bin/vercel build --prod               # build local con Next.js
~/.npm-global/bin/vercel deploy --prebuilt --prod   # sube artefacto compilado
```

Si `vercel` no está: `npm i -g vercel --prefix ~/.npm-global`

## ⚠️ Por qué el git push solo no es suficiente
El push dispara el build en la nube de Vercel. Ese build usa los settings del proyecto.
Si `Framework Preset = null`, el build en la nube no detecta Next.js → 404.
El deploy prebuilt bypasea eso porque le mandas el artefacto ya compilado localmente.

## 📋 Checklist antes de dar por terminado un deploy
- [ ] `igual-votas-mx.vercel.app` responde 200 (no 404)
- [ ] La landing carga visualmente con el formulario de sección en el Hero
- [ ] Framework Preset en Vercel dashboard está en **Next.js** (verificar si el proyecto se recrea)

## ⚠️ Sobre `scripts/` y el tsconfig (2026-03-15)
- `scripts/seed-distritos.ts` usa `@neondatabase/serverless` y `drizzle-orm`
- Esas dependencias NO están en `package.json` (son solo para el seed, no para el app)
- Next.js intentaba compilar ese archivo y fallaba el build
- **Fix:** `"exclude": ["node_modules", "scripts"]` en `tsconfig.json` — NO revertir esto
