'use client';
import projects from '@/data/projects.json';

function Projects() {
    const sorted = projects.sort((a:any, b:any) => b.status.localeCompare(a.status))
    return (
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {sorted.map((p, i) => (
                <a href={p.status === "maintenance" ? "#" : p.live} target={p.status === "maintenance" ? "" : "_blank"} key={i} className={`${p.status === "maintenance" ? 'cursor-not-allowed' : ''} p-10 relative h-150 min-w-75 md:min-w-125 mb-10 ${i % 2 === 0 ? 'bg-neutral-800/50' : 'bg-neutral-700/50'} ${i % 2 === 0 ? 'hover:bg-neutral-700/50' : 'hover:bg-neutral-600/50'}`}>
                    <div className="project-number gap-2 mb-5">
                        <img src={p.logo} className="absolute left-20 md:left-0 top-[30%] md:top-0 opacity-20 h-50" />
                        <div className="absolute top-12 right-12">
                            <h1 className="text-6xl font-bold text-neutral-500">{String(i + 1).padStart(2, '0')}</h1>
                        </div>
                    </div>
                    <p className={`absolute top-[40%] -left-30 md:left-0 text-3xl translate-[50%] rotate-25 ${p.status === "maintenance" ? 'block' : 'hidden'}`}>Under Maintenance</p>
                    <div className="flex flex-col h-full justify-end">
                        <div className="md:h-35">
                            <h1 className="text-3xl md:text-4xl font-bold mb-5">{p.title}</h1>
                            <p className="text-neutral-400 w-[80%]">{p.description}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default Projects;