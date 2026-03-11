import { Reveal } from "./Reveal";

export function Dato() {
  return (
    <section className="bg-negro-medio px-5 py-[70px] md:px-10 md:py-[100px] relative overflow-hidden">
      <div 
        className="absolute -right-5 top-1/2 -translate-y-1/2 rotate-90 font-display font-black text-[180px] text-transparent tracking-widest pointer-events-none select-none text-stroke-bg"
        aria-hidden="true"
      >
        PDF
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <Reveal>
          <div className="font-mono text-[11px] text-rojo tracking-[0.12em] uppercase mb-6 flex items-center gap-2.5">
            <span className="text-gris-oscuro">03</span> El panorama mundial <span className="text-white/55 text-xs tracking-[0.05em] ml-[0.3em]">· 3 min de lectura</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-[clamp(38px,5vw,68px)] leading-[0.95] uppercase mb-4 tracking-[-0.01em]">
            Tu banco sabe<br/>
            en qué gastas<br/>
            cada <span className="text-[#4CAF7D]">peso.</span><br/>
            El Congreso no te dice<br/>
            cómo gastó <span className="text-rojo">el tuyo.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-[540px] text-gris-claro mb-[60px] text-base leading-[1.7]">
            Quién falta. Quién vota siempre con su partido aunque contradiga lo que prometió en campaña. Quién propone leyes y quién solo ocupa la silla. Quién vota a favor de leyes que de repente le convienen muchísimo a ciertas empresas. Y en qué se va el dinero público que administran.<br/><br/>
            Todo eso existe en documentos públicos. Enterrado en cientos de páginas de PDF por sesión, sin buscador, sin orden, sin forma de cruzar la información.<br/><br/>
            A eso le llaman transparencia en el Congreso.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px] md:text-[15px] min-w-[700px]">
              <thead>
                <tr className="border-b border-gris-oscuro">
                  <th className="font-mono text-[10px] tracking-[0.1em] uppercase text-gris-medio text-left py-3 px-2 md:px-4 font-normal">País</th>
                  <th className="font-mono text-[10px] tracking-[0.1em] uppercase text-gris-medio text-left py-3 px-2 md:px-4 font-normal">¿Puedes buscar cómo votó tu representante?</th>
                  <th className="font-mono text-[10px] tracking-[0.1em] uppercase text-gris-medio text-left py-3 px-2 md:px-4 font-normal">¿Lo sabes el mismo día?</th>
                  <th className="font-mono text-[10px] tracking-[0.1em] uppercase text-gris-medio text-left py-3 px-2 md:px-4 font-normal">¿Ves en qué se gasta?</th>
                  <th className="font-mono text-[10px] tracking-[0.1em] uppercase text-gris-medio text-left py-3 px-2 md:px-4 font-normal">¿Puedes opinar formalmente?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-rojo/10 border-l-[3px] border-l-rojo hover:bg-white/5 transition-colors border-b border-white/5">
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="text-[22px] mr-2.5">🇲🇽</span><span className="font-display font-bold text-[17px] tracking-[0.02em] text-rojo">México</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-rojo/10 text-rojo">PDFs sin buscador</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-rojo/10 text-rojo">No disponible</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-amarillo/10 text-amarillo">Parcial</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-rojo/10 text-rojo">Sin canal formal</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-white/5">
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="text-[22px] mr-2.5">🇧🇷</span><span className="font-display font-bold text-[17px] tracking-[0.02em]">Brasil</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Consulta en segundos</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Al momento</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Desglose completo</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Plataforma activa</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-white/5">
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="text-[22px] mr-2.5">🇪🇪</span><span className="font-display font-bold text-[17px] tracking-[0.02em]">Estonia</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Consulta en segundos</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Minutos tras sesión</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Datos abiertos</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Con 1,000 firmas</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-white/5">
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="text-[22px] mr-2.5">🇬🇧</span><span className="font-display font-bold text-[17px] tracking-[0.02em]">Reino Unido</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Consulta en segundos</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Por sesión</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Desglose por legislador</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Cualquier ciudadano lo consulta</span></td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors border-b border-white/5">
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="text-[22px] mr-2.5">🇨🇱</span><span className="font-display font-bold text-[17px] tracking-[0.02em]">Chile</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Consulta en segundos</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Por votación</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-amarillo/10 text-amarillo">En expansión</span></td>
                  <td className="py-4 px-2 md:px-4 align-middle"><span className="inline-block font-mono text-[11px] px-2 py-0.5 rounded-sm tracking-[0.04em] bg-[#4CAF7D]/15 text-[#4CAF7D]">Portal ciudadano</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 font-mono text-[11px] text-gris-medio tracking-[0.04em]">Fuente: IPU World e-Parliament Report 2024 · Survey de 115 cámaras en 86 países</p>
        </Reveal>
      </div>
    </section>
  );
}
