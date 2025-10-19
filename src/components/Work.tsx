import Projects from '@/components/Projects';

function Work() {
    return (
        <>
            <div className="flex gap-10 items-center mb-20 pt-20" id="projects">
                <div className="flex gap-6">
                    <h1 className="font-bold text-6xl">Featured</h1>
                    <h1 className="font-bold text-6xl text-neutral-600">Projects</h1>
                </div>
                <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                    <div className="h-0.5 bg-white w-full"></div>
                </div>
            </div>
            <Projects />
        </>
    )
}

export default Work;