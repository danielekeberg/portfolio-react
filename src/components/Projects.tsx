'use client';
import projects from '@/data/projects.json';

function Projects() {
    return (
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {projects.map((p, i) => (
                <a href={p.live} target="_blank" key={i} className={`p-10 relative h-150 min-w-125 mb-10 ${i % 2 === 0 ? 'bg-neutral-800/50' : 'bg-neutral-700/50'}`}>
                    <div className="project-number gap-2 mb-5">
                        <img src={p.logo} className="absolute left-0 top-0 opacity-20 -z-1000" />
                        <div className="absolute top-12 right-12">
                            <h1 className="text-6xl font-bold text-neutral-500">{String(i + 1).padStart(2, '0')}</h1>
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-end">
                        <div className="h-35">
                            <h1 className="text-4xl font-bold mb-5">{p.title}</h1>
                            <p className="text-neutral-400 w-[80%]">{p.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Projects;