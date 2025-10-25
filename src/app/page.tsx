import Header from '@/components/Header';
import Section from '@/components/Section';
import Collab from '@/components/Collab';
import Breaker from '@/components/Breaker';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Fade from '@/components/FadeAnimation/Fade';

export default function Home() {
  return (
    <div className="mx-15 relative" id="top">
      <Analytics />
      <SpeedInsights />
      <Header />
      <Fade dir='down'>
      <Collab />
      </Fade>
      <div className="absolute right-0 -top-5 opacity-20 h-[35%]">
        <Fade dir="left">
          <img src="/daniel.png" />
        </Fade>
      </div>
      <Fade dir='up'>
      <Section />
      <Breaker />
      </Fade>
      <About />
      <Work />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}