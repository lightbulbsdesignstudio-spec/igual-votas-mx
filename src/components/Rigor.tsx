import { Reveal } from "./Reveal";

export function Rigor() {
  return (
    <section className="bg-negro px-5 py-[70px] md:px-10 md:py-[100px]">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[11px] text-rojo tracking-[0.12em] uppercase mb-6 flex items-center gap-2.5">
            <span className="text-gris-oscuro">05</span> Cómo lo hacemos <span className="text-white/55 text-xs tracking-[0.05em] ml-[0.3em]">· 1 min</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-[clamp(36px,4.5vw,62px)] uppercase leading-[0.95] mb-16 max-w-[700px] tracking-[-0.01em]">
            Tres reglas que<br/>no negociamos.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-negro">
          <Reveal delay={0.2} className="h-full">
            <div className="bg-negro-medio p-9 border-t-2 border-transparent hover:border-rojo hover:bg-negro-suave transition-all duration-300 h-full">
              <div className="font-display font-black text-[72px] leading-[0.85] text-white/5 mb-5 tracking-[-0.02em]">01</div>
              <h3 className="font-display font-extrabold text-[22px] uppercase mb-4 tracking-[0.01em] leading-[1.1]">
                La fuente te lleva<br/>al dato exacto
              </h3>
              <p className="text-[15px] text-gris-claro leading-[1.7]">
                Cada afirmación te lleva directo al párrafo exacto donde está la información anclada al <strong className="text-blanco-roto font-semibold">fragmento exacto</strong> del documento original. No al PDF de 267 páginas — al párrafo. Si la fuente no existe, la afirmación tampoco.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.3} className="h-full">
            <div className="bg-negro-medio p-9 border-t-2 border-transparent hover:border-rojo hover:bg-negro-suave transition-all duration-300 h-full">
              <div className="font-display font-black text-[72px] leading-[0.85] text-white/5 mb-5 tracking-[-0.02em]">02</div>
              <h3 className="font-display font-extrabold text-[22px] uppercase mb-4 tracking-[0.01em] leading-[1.1]">
                El mismo rasero<br/>para todos
              </h3>
              <p className="text-[15px] text-gris-claro leading-[1.7]">
                <strong className="text-blanco-roto font-semibold">PRI, PAN, Morena, MC, PT, el Verde y todos los que existan y estén por formarse.</strong> Nadie recibe trato diferenciado. La métrica es siempre ciudadana, nunca ideológica. El criterio: desempeño medible, votaciones registradas, dinero público administrado.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4} className="h-full">
            <div className="bg-negro-medio p-9 border-t-2 border-transparent hover:border-rojo hover:bg-negro-suave transition-all duration-300 h-full">
              <div className="font-display font-black text-[72px] leading-[0.85] text-white/5 mb-5 tracking-[-0.02em]">03</div>
              <h3 className="font-display font-extrabold text-[22px] uppercase mb-4 tracking-[0.01em] leading-[1.1]">
                Crítica más<br/>propuesta siempre
              </h3>
              <p className="text-[15px] text-gris-claro leading-[1.7]">
                Señalar lo que está mal sin decir cómo debería estar bien es periodismo, no laboratorio. <strong className="text-blanco-roto font-semibold">Siempre que criticamos una iniciativa, también articulamos la alternativa</strong> — con evidencia de dónde ha funcionado.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
