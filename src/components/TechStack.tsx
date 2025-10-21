function TechStack() {
    const icons = [
        { folder: "/react.svg", title: "React" },
        { folder: "/javascript.svg", title: "JavaScript" },
        { folder: "/html.svg", title: "HTML" },
        { folder: "/css.svg", title: "CSS" },
        { folder: "/tailwindcss.svg", title: "TailwindCSS" },
        { folder: "/ts.svg", title: "TypeScript" },
        { folder: "/nextjs.svg", title: "Next.js" },
        { folder: "/vite.svg", title: "Vite" },
        { folder: "/figma.svg", title: "Figma" },
        { folder: "/git.svg", title: "Git" },
        { folder: "/api.svg", title: "REST API" },
        { folder: "/netlify.svg", title: "Netlify" },
        { folder: "/vercel.svg", title: "Vercel" },
    ];
    const doubled = [...icons, ...icons];
    return (
        <>
            <div className="flex gap-10 items-center mb-20 pt-20">
                <div className="flex gap-6">
                    <h1 className="font-bold text-6xl text-neutral-600">Tech</h1>
                    <h1 className="font-bold text-6xl">Stack</h1>
                </div>
                <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                    <div className="h-0.5 bg-white w-full"></div>
                </div>
            </div>
            <div className="overflow-hidden w-full py-8">
                <div className="flex animate-scroll">
                    {doubled.map((icon, i) => (
                        <div key={i} className="flex-shrink-0 w-1/10 flex justify-center">
                            <img src={icon.folder} alt={icon.title} className="w-16 h-16 m-4 opacity-80 hover:opacity-100 transition"/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechStack;