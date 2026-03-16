'use client';

import { useState } from 'react';
import { lookupDistrictBySeccion } from '@/lib/seccion-lookup';

export function SeccionForm() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<ReturnType<typeof lookupDistrictBySeccion> | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value) setResult(lookupDistrictBySeccion(value));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-stretch flex-wrap gap-0">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Núm. de sección"
          min={1}
          max={5643}
          className="font-mono bg-white/8 text-blanco-roto placeholder:text-gris-medio border border-white/15 px-5 py-4 text-base w-52 focus:outline-none focus:border-rojo"
        />
        <button
          type="submit"
          className="bg-rojo text-blanco font-display font-bold text-lg uppercase tracking-[0.06em] px-9 py-4 transition-all hover:bg-rojo-oscuro hover:-translate-y-0.5 clip-button"
        >
          Ver mi representante
        </button>
      </form>

      <p className="font-mono text-xs text-gris-medio tracking-[0.04em] mt-3">
        Está en tu credencial de elector, campo{' '}
        <strong className="text-gris-claro">&quot;SECCIÓN&quot;</strong> — cuatro dígitos en la parte inferior
        <span className="inline-block w-[3px] h-[0.85em] bg-rojo align-middle animate-blink ml-1"></span>
      </p>

      {result && result.found && (
        <div className="mt-6 p-5 bg-white/5 border-l-2 border-rojo animate-fade-up" style={{ animationDuration: '0.3s' }}>
          <div className="font-mono text-[11px] text-rojo tracking-[0.1em] uppercase mb-1">Tu distrito federal · CDMX</div>
          <div className="font-display font-black text-[clamp(36px,5vw,56px)] text-blanco-roto uppercase leading-none">
            Distrito {result.distrito}
          </div>
          <div className="font-mono text-xs text-gris-claro mt-2">{result.codigo}</div>
        </div>
      )}

      {result && !result.found && (
        <div className="mt-6 p-5 bg-white/5 border-l-2 border-amarillo animate-fade-up" style={{ animationDuration: '0.3s' }}>
          <p className="font-mono text-sm text-gris-claro">
            {result.reason === 'not_cdmx'
              ? 'Sección no encontrada. Por ahora solo tenemos CDMX — verifica que el número esté bien.'
              : 'Número inválido. Revisa el campo "SECCIÓN" en tu credencial de elector.'}
          </p>
        </div>
      )}
    </div>
  );
}
