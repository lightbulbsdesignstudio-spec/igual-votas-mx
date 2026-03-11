import { Reveal } from "./Reveal";

export function Honestidad() {
  return (
    <section className="bg-negro-medio px-5 py-[70px] md:px-10 md:py-[100px]" id="limitaciones">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Lado izquierdo */}
        <div>
          <Reveal>
            <div className="font-mono text-[11px] text-rojo tracking-[0.12em] uppercase mb-6 flex items-center gap-2.5">
              <span className="text-rojo">02</span> La parte incómoda <span className="text-white/55 text-xs tracking-[0.05em] ml-[0.3em]">· 2 min</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-[clamp(34px,4vw,56px)] uppercase leading-[0.95] mb-7 tracking-[-0.01em]">
              Antes de<br/>mostrarte<br/>lo que podemos<br/>hacer.
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-gris-claro text-base leading-[1.7] mb-8">
              Hay que decirte lo que <strong className="text-blanco-roto font-semibold">no podemos hacer</strong>. No porque seamos malos en esto — sino porque el Congreso no está diseñado para que puedas ver lo que pasa adentro. Eso no es una opinión. Es una descripción técnica de cómo funciona su infraestructura de información.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="flex flex-col gap-0 list-none">
              {[
                {
                  title: "Asistencia en tiempo real",
                  desc: "El Congreso no tiene obligación de publicarla en formato legible. Solo en PDF, sin plazo definido."
                },
                {
                  title: "Cómo votó exactamente tu diputado",
                  desc: "El Reglamento no obliga a publicar el voto nominal individual en datos abiertos. La Cámara registra esa info internamente — simplemente elige no publicarla."
                },
                {
                  title: "Cuánto gasta cada comisión y cada legislador",
                  desc: "El Poder Legislativo tiene más discrecionalidad presupuestal que el propio Ejecutivo."
                },
                {
                  title: "El texto de las leyes en formato buscable",
                  desc: "Las iniciativas se presentan en PDF. No en un formato que permita búsqueda, comparación o análisis automático. Cada desarrollador o periodista que quiere trabajar con ese texto tiene que procesarlo manualmente."
                }
              ].map((item, idx) => (
                <li key={idx} className="py-5 border-b border-white/5 grid grid-cols-[auto_1fr] gap-4 items-start">
                  <div className="w-7 h-7 bg-rojo/10 border border-rojo/25 flex items-center justify-center shrink-0 mt-0.5">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3"><line x1="2" y1="2" x2="10" y2="10" stroke="#E63329" strokeWidth="1.5"/><line x1="10" y1="2" x2="2" y2="10" stroke="#E63329" strokeWidth="1.5"/></svg>
                  </div>
                  <div className="text-[15px] text-gris-claro leading-[1.6]">
                    <strong className="text-blanco-roto block font-semibold mb-1 text-base">{item.title}</strong>
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Lado derecho */}
        <div>
          <Reveal delay={0.4}>
            <div className="bg-rojo/5 border border-rojo/20 p-9 mb-6">
              <div className="font-display font-bold text-[22px] uppercase tracking-[0.02em] mb-4 text-rojo">Lo que sí podemos hacer</div>
              <p className="text-[15px] text-gris-claro leading-[1.7]">
                Podemos decirte exactamente <strong className="text-blanco-roto font-semibold">qué ley tendría que cambiar</strong> para que todo eso fuera posible — con el artículo y el reglamento exacto.<br/><br/>
                Podemos construir <strong className="text-blanco-roto font-semibold">la radiografía más completa del Congreso</strong> con los materiales que publica a regañadientes: extrayendo datos de PDFs cuando no hay nada mejor, construyendo la imagen más honesta posible de lo que ocurre adentro.<br/><br/>
                Siempre será trabajo de arqueología, no de consulta en tiempo real. <strong className="text-blanco-roto font-semibold">La diferencia entre una ley que existe y una ley que funciona es exactamente lo que este proyecto está aquí para mostrar.</strong>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="bg-white/5 border border-white/10 p-9">
              <div className="font-display font-bold text-[22px] uppercase tracking-[0.02em] mb-4 text-blanco-roto">La resistencia no es técnica</div>
              <p className="text-[15px] text-gris-claro leading-[1.7]">
                Estas reformas no requieren cambios constitucionales. Son modificaciones a leyes secundarias que el Congreso puede aprobar con mayoría simple.<br/><br/>
                <strong className="text-blanco-roto font-semibold">PRI, PAN, Morena, MC, PT, el Verde y todos los que existan y estén por formarse.</strong> Ninguno ha construido un congreso donde el ciudadano pueda ver lo que pasa adentro. Ninguno ha priorizado que eso cambie. Todos operan la misma maquinaria de opacidad — con diferente branding.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
