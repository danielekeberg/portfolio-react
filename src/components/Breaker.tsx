'use client';
import { useEffect, useState } from "react";

function Breaker() {
    const [timezone, setTimezone] = useState("");

    useEffect(() => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = { timeZone: "Europe/Oslo", timeZoneName: "short" };
        const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);
        const tz = parts.find(p => p.type === "timeZoneName")?.value;
        const tzMap: Record<string, string> = { "GMT+1": "CET (UTC + 1)", "GMT+2": "CEST (UTC + 2)" };
        const resolved = tz ? (tzMap[tz] ?? tz) : "";
        setTimezone(resolved);
    }, []);
    return (
        <div className="hidden md:flex items-center gap-10 opacity-40 my-7">
            <p className="w-150 md:w-50">Oslo, NO</p>
            <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                <div className="h-0.5 bg-white w-full"></div>
            </div>
            <p className="w-100 text-center">{timezone}</p>
            <div className="h-auto w-full flex mb-1 rounded items-center opacity-20">
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