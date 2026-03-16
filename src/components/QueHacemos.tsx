import { Reveal } from "./Reveal";

export function QueHacemos() {
  return (
    <section className="bg-negro px-5 py-[70px] md:px-10 md:py-[100px]" id="que-hacemos">
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="font-mono text-[11px] text-rojo tracking-[0.12em] uppercase mb-6 flex items-center gap-2.5">
            <span className="text-gris-oscuro">04</span> Qué es Igual Votas <span className="text-white/55 text-xs tracking-[0.05em] ml-[0.3em]">· 2 min</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-[clamp(36px,4.5vw,62px)] leading-[0.95] uppercase mb-16 max-w-[700px] tracking-[-0.01em]">
            Tres cosas que<br/>este proyecto<br/>hace por ti.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-negro-suave">
          {/* Card 1 */}
          <Reveal delay={0.2} className="h-full">
            <div className="bg-negro-medio hover:bg-negro-suave transition-colors p-9 h-full flex flex-col">
              <div className="font-mono text-[11px] text-rojo tracking-[0.1em] mb-6">01 — Portal de rendición de cuentas</div>
              <h3 className="font-display font-extrabold text-[28px] uppercase leading-none mb-5 tracking-[0.01em]">
                Quién te<br/>representa
              </h3>
              <p className="text-gris-claro text-[15px] leading-[1.7] flex-1">
                Pon tu número de sección electoral. Te decimos quién es tu diputado, cuánto tiempo lleva en el cargo, cuántas iniciativas ha presentado, y cómo ha votado en los temas que te afectan directamente. <strong className="text-blanco-roto font-semibold">Sin jerga. Con metodología pública que cualquiera puede auditar.</strong>
              </p>
              <div className="mt-6 p-3.5 bg-white/5 border-l-2 border-rojo font-mono text-[13px] text-gris-claro italic leading-[1.5]">
                &quot;Mi diputado lleva 9 años en el cargo y ha presentado 3 iniciativas. Sus pares promedio presentan 12.&quot;
              </div>
            </div>
          </Reveal>
          
          {/* Card 2 */}
          <Reveal delay={0.3} className="h-full">
            <div className="bg-negro-medio hover:bg-negro-suave transition-colors p-9 h-full flex flex-col">
              <div className="font-mono text-[11px] text-rojo tracking-[0.1em] mb-6">02 — Analizador de iniciativas</div>
              <h3 className="font-display font-extrabold text-[28px] uppercase leading-none mb-5 tracking-[0.01em]">
                Qué dice<br/>realmente<br/>esa ley
              </h3>
              <p className="text-gris-claro text-[15px] leading-[1.7] flex-1">
                Cuando hay una iniciativa viva en el Congreso, la diseccionamos: qué dice, a quién beneficia, qué pasó en los países donde se intentó algo similar. <strong className="text-blanco-roto font-semibold">Cada dato te lleva directo al párrafo exacto — no a la portada de un PDF de 267 páginas donde tendrías que buscarlo tú.</strong>
              </p>
              <div className="mt-6 p-3.5 bg-white/5 border-l-2 border-rojo font-mono text-[13px] text-gris-claro italic leading-[1.5]">
                &quot;Esta iniciativa beneficia directamente a 4 gremios. El texto tiene 3 huecos que la hacen no ejecutable.&quot;
              </div>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.4} className="h-full">
            <div className="bg-negro-medio hover:bg-negro-suave transition-colors p-9 h-full flex flex-col">
              <div className="font-mono text-[11px] text-rojo tracking-[0.1em] mb-6">03 — Motor de propuesta ciudadana</div>
              <h3 className="font-display font-extrabold text-[28px] uppercase leading-none mb-5 tracking-[0.01em]">
                Lo que<br/>quieres<br/>ver distinto
              </h3>
              <p className="text-gris-claro text-[15px] leading-[1.7] flex-1">
                Escribe lo que quieres ver diferente en tu vida. Igual Votas lo traduce a realidad: qué artículo lo regula, qué presupuesto implica, quién tiene que moverlo, y qué tan lejos está ese legislador de hacerlo. <strong className="text-blanco-roto font-semibold">El deseo vago se convierte en conocimiento accionable.</strong>
              </p>
              <div className="mt-6 p-3.5 bg-white/5 border-l-2 border-rojo font-mono text-[13px] text-gris-claro italic leading-[1.5]">
                &quot;Quiero que arreglen las calles de mi colonia.&quot; → Aquí está quien decide, cuánto hay, y qué ha hecho.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
