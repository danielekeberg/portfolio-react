import icons from "@/data/tech.json";

function TechStack() {
    return (
        <>
            <div className="flex gap-10 items-center mb-20 pt-20" id="stack">
                <div className="flex gap-6">
                    <h1 className="font-bold text-6xl text-neutral-600">Tech</h1>
                    <h1 className="font-bold text-6xl">Stack</h1>
                </div>
                <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                    <div className="h-0.5 bg-white w-full"></div>
                </div>
            </div>
            {icons.map((icon, i) => (
                <img key={i} src={icon.folder} alt={icon.title} className="inline-block w-16 h-16 m-4" />
            ))}
        </>
    )
}

export default TechStack;