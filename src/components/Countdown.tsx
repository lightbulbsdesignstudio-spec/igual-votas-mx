"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ dias: '—', horas: '—', mins: '—' });

  useEffect(() => {
    function updateCountdown() {
      const target = new Date('2027-06-06T08:00:00-06:00');
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ dias: '000', horas: '00', mins: '00' });
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({
        dias: String(dias).padStart(3, '0'),
        horas: String(horas).padStart(2, '0'),
        mins: String(mins).padStart(2, '0')
      });
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-rojo px-5 py-5 md:px-10 flex flex-wrap items-center justify-center gap-6 md:gap-[60px] overflow-hidden">
      <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-white/70">
        Faltan para las intermedias
      </div>
      <div className="flex gap-8">
        <div className="text-center">
          <span className="font-display font-black text-5xl leading-none text-blanco block">{timeLeft.dias}</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/60">días</span>
        </div>
        <div className="font-display font-black text-[40px] text-white/30 leading-none self-start mt-1">:</div>
        <div className="text-center">
          <span className="font-display font-black text-5xl leading-none text-blanco block">{timeLeft.horas}</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/60">horas</span>
        </div>
        <div className="font-display font-black text-[40px] text-white/30 leading-none self-start mt-1">:</div>
        <div className="text-center">
          <span className="font-display font-black text-5xl leading-none text-blanco block">{timeLeft.mins}</span>
          <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-white/60">minutos</span>
        </div>
      </div>
      <div className="font-display font-bold text-xl uppercase text-blanco tracking-[0.04em] text-right hidden md:block">
        Domingo 6 de junio, 2027
        <small className="block font-mono text-[11px] font-normal text-white/60 tracking-[0.06em] mt-0.5">
          Elecciones intermedias · México
        </small>
      </div>
    </div>
  );
}
