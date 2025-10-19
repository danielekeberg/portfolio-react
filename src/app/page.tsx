import Header from '@/components/Header';
import Section from '@/components/Section';
import Collab from '@/components/Collab';
import Breaker from '@/components/Breaker';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import Fade from '@/components/FadeAnimation/Fade';

export default function Home() {
  return (
    <div className="mx-15" id="top">
      <Header />
      <Fade dir='down'>
      <Collab />
      </Fade>
      <Fade dir='up'>
      <Section />
      <Breaker />
      </Fade>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
