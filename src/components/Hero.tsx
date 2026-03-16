import { SeccionForm } from './SeccionForm';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-5 md:px-10 py-20 pb-20 pt-[120px] relative overflow-hidden">
      {/* Background Text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[clamp(120px,20vw,260px)] text-transparent uppercase tracking-[-0.02em] whitespace-nowrap pointer-events-none select-none text-stroke-bg"
        aria-hidden="true"
      >
        VOTAS
      </div>

      <div className="max-w-[1100px] relative z-10 w-full mx-auto">
        <div 
          className="font-mono text-xs text-rojo tracking-[0.12em] uppercase mb-7 flex items-center gap-3 animate-fade-up before:content-[''] before:inline-block before:w-8 before:h-px before:bg-rojo"
          style={{ animationDuration: '0.6s', animationDelay: '0.1s' }}
        >
          Elecciones intermedias · 6 de junio de 2027
        </div>

        <h1 className="font-display font-black text-[clamp(52px,8vw,110px)] leading-[0.92] uppercase tracking-[-0.01em] text-blanco-roto mb-10">
          <span className="inline-block animate-fade-up" style={{ animationDuration: '0.5s', animationDelay: '0.2s' }}>No te gusta<br/></span>
          <span className="inline-block animate-fade-up text-rojo" style={{ animationDuration: '0.5s', animationDelay: '0.35s' }}>la política.<br/></span>
          <span className="inline-block animate-fade-up text-gris-claro" style={{ animationDuration: '0.5s', animationDelay: '0.5s' }}>En junio votas<br/></span>
          <span className="inline-block animate-fade-up" style={{ animationDuration: '0.5s', animationDelay: '0.65s' }}>de todas formas.</span>
        </h1>

        <p 
          className="max-w-[620px] text-lg leading-[1.65] text-gris-claro mb-12 animate-fade-up"
          style={{ animationDuration: '0.6s', animationDelay: '0.7s' }}
        >
          El 6 de junio de 2027 se renuevan <strong className="text-blanco-roto font-semibold">500 diputados federales</strong>. Ellos van a decidir tu salario, tus impuestos, el agua de tu colonia y cuánto cuesta la gasolina.<br/><br/>
          Lo harán mientras la mayoría de la gente que los eligió no sabe su nombre. <strong className="text-blanco-roto font-semibold">Los políticos ya cuentan con eso.</strong>
        </p>

        <div
          className="animate-fade-up"
          style={{ animationDuration: '0.6s', animationDelay: '0.9s' }}
        >
          <SeccionForm />
        </div>
      </div>
    </section>
  );
}
