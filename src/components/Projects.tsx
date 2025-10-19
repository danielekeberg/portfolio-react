'use client';
import projects from '@/data/projects.json';

function Projects() {
    return (
        <div className="grid grid-cols-3">
            {projects.map((p, i) => (
                <div key={i} className={`p-10 relative h-150 w-150 mb-10 ${i % 2 === 0 ? 'bg-neutral-800/50' : 'bg-neutral-700/50'}`}>
                    <div>
                        <div className="flex gap-2 mb-5">
                        {p.tech.map((t) => (
                            <span key={t} className="text-sm font-bold bg-neutral-600/50 px-5 py-2 rounded-4xl text-neutral-400 hover:bg-neutral-600/70">{t}</span>
                        ))}
                        </div>
                        <div className="absolute top-12 right-12">
                            <h1 className="text-6xl font-bold text-neutral-500">{p.id}</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-12">
                        <h1 className="text-4xl font-bold mb-5">{p.title}</h1>
                        <p className="text-neutral-400 w-[80%]">{p.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects;