import Header from '@/components/Header';
import Section from '@/components/Section';
import Collab from '@/components/Collab';
import Breaker from '@/components/Breaker';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';

import Fade from '@/components/FadeAnimation/Fade';

export default function Home() {
  return (
    <div className="mx-5 md:mx-15 relative" id="top">
      <Header />
      <Fade dir='down'>
      <Collab />
      </Fade>
      <div className="absolute right-0 md:-top-5 top-50 opacity-20 md:h-[35%]">
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