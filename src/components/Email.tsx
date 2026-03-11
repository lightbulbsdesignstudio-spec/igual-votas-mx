"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function Email() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-negro-medio px-5 py-[120px] md:px-10 relative overflow-hidden" id="registro">
      <div 
        className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(230,51,41,0.06)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-[700px] mx-auto text-center relative z-10">
        <Reveal>
          <div className="font-mono text-[11px] text-white/15 tracking-[0.12em] uppercase mb-6 flex justify-center items-center gap-2.5">
            07 <span className="text-rojo ml-1">Únetenos</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-[clamp(48px,7vw,88px)] uppercase leading-[0.9] mb-6 tracking-[-0.01em]">
            Estamos<br/>construyendo<br/>
            <span className="text-rojo">esto.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[17px] text-gris-claro leading-[1.7] mb-12 max-w-[520px] mx-auto">
            Cuando lancemos el primer análisis — un perfil legislativo, una iniciativa activa, un diagnóstico presupuestal — te llegará directamente. <strong className="text-blanco-roto font-semibold">Sin spam. Sin comunicados de prensa. Solo análisis que vale la pena leer y compartir.</strong>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-0 max-w-[500px] mx-auto mb-5">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
              className="flex-1 bg-white/5 border border-white/10 md:border-r-0 text-blanco-roto font-sans text-base px-5 py-4 outline-none transition-colors placeholder:text-gris-medio focus:border-rojo/50 focus:bg-white/10 disabled:opacity-50"
              placeholder="tu@correo.com"
              required
              aria-label="Correo electrónico para notificaciones"
            />
            <button 
              type="submit"
              disabled={submitted}
              className={`font-display font-bold text-base uppercase tracking-[0.08em] px-7 py-4 border-none cursor-pointer transition-colors whitespace-nowrap text-blanco ${submitted ? 'bg-[#2D7A4F]' : 'bg-rojo hover:bg-rojo-oscuro'} disabled:cursor-not-allowed`}
            >
              {submitted ? '✓ Registrado' : 'Quiero estar adentro'}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="font-mono text-[11px] text-gris-medio tracking-[0.04em] leading-[1.6]">
            No compartimos tu email con nadie. No tenemos anunciantes.<br/>
            No aceptamos financiamiento corporativo. Solo ciudadanos que quieren ver el Congreso por dentro.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
