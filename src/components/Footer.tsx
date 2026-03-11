import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-negro px-5 py-12 md:px-10 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-10">
        <div>
          <div className="font-display font-black text-[26px] uppercase tracking-[0.04em] text-blanco-roto mb-2">
            Igual<span className="text-rojo">Votas</span>
          </div>
          <p className="font-mono text-[11px] text-gris-medio tracking-[0.04em] leading-[1.7] max-w-[280px]">
            Monitor Legislativo Ciudadano · Laboratorio Jurídico y Diseño Ciudadano<br/><br/>
            Metodología pública. Sin anunciantes. Sin financiamiento corporativo. Si algo está mal en este análisis, queremos saberlo — con la misma evidencia con la que nosotros trabajamos.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <Link href="#" className="font-mono text-xs text-gris-claro uppercase tracking-[0.06em] no-underline transition-colors hover:text-rojo">Documento rector</Link>
          <Link href="#" className="font-mono text-xs text-gris-claro uppercase tracking-[0.06em] no-underline transition-colors hover:text-rojo">Diagnóstico de limitaciones</Link>
          <Link href="#" className="font-mono text-xs text-gris-claro uppercase tracking-[0.06em] no-underline transition-colors hover:text-rojo">Metodología de calificación</Link>
          <Link href="#" className="font-mono text-xs text-gris-claro uppercase tracking-[0.06em] no-underline transition-colors hover:text-rojo">Contacto</Link>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 text-center md:text-left">
        <p className="font-mono text-[11px] text-gris-medio tracking-[0.04em]">
          © {new Date().getFullYear()} Igual Votas · igualvotas.mx
        </p>
        <span className="font-mono text-[11px] text-gris-oscuro tracking-[0.06em]">
          v2.0 · Next.js · Marzo 2026
        </span>
      </div>
    </footer>
  );
}
