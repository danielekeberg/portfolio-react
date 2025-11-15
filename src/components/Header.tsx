'use client';
import ScrollProgress from "./ScrollProgress";
import Fade from '@/components/FadeAnimation/Fade';

function Header() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToTop = () => {
        document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
    }

    return ( 
        <header className="py-8 px-5 md:px-15 flex flex-col md:flex-row md:gap-10 items-center justify-center mb-10 fixed z-1000 top-0 left-0 right-0 backdrop-blur-xs">
            <Fade dir="right">
                <h1 className="font-bold w-40 hover:text-white cursor-pointer" onClick={scrollToTop}>Daniel Ekeberg</h1>
            </Fade>
            <ScrollProgress />
            <Fade dir="left">
                <nav className="hidden md:block">
                    <ul className="flex gap-10">
                        <li className="cursor-pointer hover:text-white" onClick={scrollToAbout}>About</li>
                        <li className="cursor-pointer hover:text-white" onClick={scrollToProjects}>Projects</li>
                        <li className="cursor-pointer hover:text-white" onClick={scrollToContact}>Contact</li>
                    </ul>
                </nav>
            </Fade>
        </header>
    )
}

export default Header;