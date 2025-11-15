function About() {
    return (
        <div className="md:w-200 py-20 h-[60vh]" id="about">
            <div className="flex gap-6 mb-10">
                <h1 className="text-4xl md:text-6xl font-bold text-neutral-600">About</h1>
                <h1 className="text-4xl md:text-6xl font-bold">me</h1>
            </div>
            <p className="text-xl md:text-2xl text-white font-bold">I'm a front-end development student passionate about crafting responsive, accessible, and visually engaging websites.
            Currently exploring Javascript, Tailwind CSS, and React, I focus on creating interfaces that balance aesthetics with functionality.
            My goal is to design web experiences that not only look great, but feel great to use.</p>
        </div>
    )
}

export default About;