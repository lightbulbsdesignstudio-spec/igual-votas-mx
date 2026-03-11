import Link from 'next/link';

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 py-5 bg-[rgba(13,13,13,0.97)] backdrop-blur-md border-b border-white/5">
      <Link href="#" className="font-display font-black text-[22px] tracking-[0.04em] text-blanco-roto uppercase">
        Igual<span className="text-rojo">Votas</span>
      </Link>
      
      <ul className="hidden md:flex gap-8 list-none items-center">
        <li>
          <Link href="#limitaciones" className="font-mono text-xs text-gris-claro tracking-[0.08em] uppercase hover:text-blanco-roto transition-colors">
            Limitaciones
          </Link>
        </li>
        <li>
          <Link href="#que-hacemos" className="font-mono text-xs text-gris-claro tracking-[0.08em] uppercase hover:text-blanco-roto transition-colors">
            Qué hacemos
          </Link>
        </li>
        <li>
          <Link href="#apoyanos" className="font-mono text-xs text-rojo tracking-[0.08em] uppercase border border-rojo/40 px-3.5 py-1.5 rounded-[3px] transition-all hover:bg-rojo/15 hover:border-rojo">
            Apoya el proyecto
          </Link>
        </li>
        <li>
          <Link href="#registro" className="font-mono text-xs text-blanco tracking-[0.08em] uppercase bg-rojo px-3.5 py-1.5 rounded-[3px] transition-colors hover:bg-[#a93226]">
            Regístrate
          </Link>
        </li>
      </ul>
    </nav>
  );
}
