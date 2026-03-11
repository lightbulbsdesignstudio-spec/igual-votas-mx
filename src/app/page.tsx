import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Countdown } from '@/components/Countdown';
import { Honestidad } from '@/components/Honestidad';
import { Dato } from '@/components/Dato';
import { QueHacemos } from '@/components/QueHacemos';
import { Rigor } from '@/components/Rigor';
import { Donaciones } from '@/components/Donaciones';
import { Email } from '@/components/Email';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Countdown />
      <Honestidad />
      <Dato />
      <QueHacemos />
      <Rigor />
      <Donaciones />
      <Email />
      <Footer />
    </main>
  );
}
