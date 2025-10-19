function Breaker() {
    return (
        <div className="flex items-center gap-10 opacity-40 my-7">
            <p className="w-50">Oslo, NO</p>
            <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                <div className="h-0.5 bg-white w-full"></div>
            </div>
            <p className="w-100 text-center">CET (GMT +1)</p>
            <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                <div className="h-0.5 bg-white w-full"></div>
            </div>
            <div className="flex gap-2 items-center text-[#41B78E]">
                <p className="text-2xl font-bold">○</p>
                <p>AVAILABLE</p>
            </div>
        </div>
    )
}

export default Breaker;