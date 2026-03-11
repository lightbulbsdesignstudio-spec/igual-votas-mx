import { Reveal } from "./Reveal";
import Link from "next/link";

export function Donaciones() {
  return (
    <section className="bg-[#0A0A0A] border-t border-white/5.5 px-5 py-[70px] md:px-10 md:py-[100px]" id="apoyanos">
      <div className="max-w-[1100px] mx-auto text-center">
        <Reveal>
          <div className="font-mono text-[11px] text-gris-oscuro tracking-[0.12em] uppercase mb-6 flex justify-center items-center gap-2.5">
            06 <span className="text-rojo">Transparencia sobre lo nuestro</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-[0.95] text-blanco mt-6 mb-7 tracking-[-0.01em]">
            Este proyecto<br/>nos cuesta.<br/>
            <span className="text-rojo">Lo decimos sin rodeos.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[clamp(1rem,2vw,1.15rem)] text-gris-claro leading-[1.65] max-w-[640px] mx-auto mb-[60px]">
            El motor que traduce tu pregunta en análisis legislativo real requiere inteligencia artificial en tiempo real. Eso no es gratis. Lo que sí es gratis: el tiempo de las personas que lo construyen. La investigación. El diseño. Todo eso es voluntario. Lo que no puede serlo es la infraestructura que lo hace funcionar.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-[60px] text-left">
            <div className="bg-white/5 border border-white/5 rounded-sm p-7">
              <div className="text-[0.72rem] font-mono text-gris-oscuro tracking-[0.08em] uppercase mb-2.5">Motor de inteligencia artificial</div>
              <div className="font-display text-[2.2rem] font-extrabold text-blanco mb-2 leading-none">
                $34–$342 <span className="text-base font-normal text-gris-claro">USD / mes</span>
              </div>
              <div className="text-[0.82rem] text-gris-oscuro leading-[1.5]">Escala con el número de consultas. Fase 1: 1,000 usuarios. Fase 2: 10,000.</div>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-sm p-7">
              <div className="text-[0.72rem] font-mono text-gris-oscuro tracking-[0.08em] uppercase mb-2.5">Infraestructura y servidores</div>
              <div className="font-display text-[2.2rem] font-extrabold text-blanco mb-2 leading-none">
                $112 <span className="text-base font-normal text-gris-claro">USD / mes</span>
              </div>
              <div className="text-[0.82rem] text-gris-oscuro leading-[1.5]">Hosting, base de datos, extracción de documentos legislativos, dominio.</div>
            </div>

            <div className="bg-rojo/5 border border-rojo/20 rounded-sm p-7">
              <div className="text-[0.72rem] font-mono text-gris-oscuro tracking-[0.08em] uppercase mb-2.5">Año 1 completo estimado</div>
              <div className="font-display text-[2.2rem] font-extrabold text-rojo mb-2 leading-none">
                $4,519 <span className="text-base font-normal text-rojo/70">USD</span>
              </div>
              <div className="text-[0.82rem] text-gris-oscuro leading-[1.5]">~$83,600 MXN. Sin nómina. Sin oficina. Solo operación del producto.</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start max-w-[900px] mx-auto text-left">
            <div>
              <div className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-rojo mb-3">Si eres ciudadano</div>
              <p className="text-[0.9rem] text-gris-claro leading-[1.65] mb-5">
                Cualquier aportación ayuda a que este proyecto no dependa de nadie con agenda. No hay monto mínimo ni máximo. No hay membresías ni beneficios exclusivos — solo un proyecto que funciona.
              </p>
              <Link href="#" className="inline-block bg-rojo text-blanco px-6 py-[13px] text-[0.88rem] font-bold tracking-[0.03em] no-underline rounded-sm transition-colors mb-2.5 hover:bg-[#c0392b]">
                Apoyar con donación directa
              </Link>
              <p className="text-[0.72rem] text-gris-oscuro font-mono leading-[1.5]">
                Vía Open Collective · Sin intermediarios con agenda
              </p>
            </div>
            
            <div className="hidden md:block font-display text-[2rem] text-gris-oscuro pt-[60px] text-center">
              o
            </div>

            <div>
              <div className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-rojo mb-3">Si representas una organización</div>
              <p className="text-[0.9rem] text-gris-claro leading-[1.65] mb-5">
                Buscamos grants de fundaciones de sociedad civil, organizaciones de periodismo de datos y mecanismos públicos de financiamiento para proyectos de democracia digital. No aceptamos dinero con intereses.
              </p>
              <Link href="#" className="inline-block bg-transparent border border-white/20 text-blanco-roto px-6 py-[13px] text-[0.88rem] font-bold tracking-[0.03em] no-underline rounded-sm transition-colors mb-2.5 hover:bg-white/5">
                Ver brief para otorgadores
              </Link>
              <p className="text-[0.72rem] text-gris-oscuro font-mono leading-[1.5]">
                NED · Open Society · Mozilla Foundation · INAI PROTAI · ICFJ
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
