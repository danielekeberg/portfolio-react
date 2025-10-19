'use client';
import projects from '@/data/projects.json';

function Projects() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
            {projects.map((p, i) => (
                <a href={p.live} target="_blank" key={i} className={`p-10 relative h-150 mb-10 ${i % 2 === 0 ? 'bg-neutral-800/50' : 'bg-neutral-700/50'}`}>
                    <div className="project-number">
                        <div className="flex gap-2 mb-5">
                        {p.tech.map((t) => (
                            <span key={t} className="text-sm font-bold bg-neutral-600/50 px-5 py-2 rounded-4xl text-neutral-400 hover:bg-neutral-600/70">{t}</span>
                        ))}
                        </div>
                        <div className="absolute top-12 right-12">
                            <h1 className="text-6xl font-bold text-neutral-500">{p.id.toString().padStart(2, '0')}</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-12 left-12">
                        <h1 className="text-4xl font-bold mb-5">{p.title}</h1>
                        <p className="text-neutral-400 w-[80%]">{p.description}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Projects;