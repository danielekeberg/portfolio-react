'use client';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading"

export default function Message() {
    const [msg, setMsg] = useState<{ message: string, date: string, firstname: string, lastname: string, time: number, email: string, id: number}[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState<string | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const storedAdmin = localStorage.getItem("admin");
        setAdmin(storedAdmin)

        async function fetchMsg() {
            try {
                if(!apiUrl) {
                    throw new Error('failed to fetch api')
                }
                const res = await fetch(apiUrl);
                const data = await res.json();
                const sortedData = [...data].sort((a, b) => b.time - a.time);
                setMsg(sortedData);
            } catch(err) {
                setError("err")
            }
        }
        fetchMsg();
    }, [])

    if(!admin) {
        return (
            <div>
                <h1>No access</h1>
            </div>
        )
    }

    function removecard(i: string) {
        const el = document.getElementById(i);
        if (el) {
            el.remove();
        }
    }

    async function delMsg(id: number, i: string) {
        setLoading(true);
        try {
            const res = await fetch(`${apiUrl}/id/${id}`, {
                method: "DELETE",
            })
            removecard(i)
            setLoading(false);
        } catch(err) {
            setError("erroor")
        }
    }

    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 mb-10 xl:mx-0 md:mx-0 sm:mx-5">
            {msg.length > 0 ? msg.map((msg, i) => (
                <div key={i} id={String(i)} className="bg-neutral-900 p-5 rounded-sm border group border-neutral-800" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className="flex justify-between">
                        <div className="flex gap-2 mb-2.5">
                            <img className="w-5 h-5" src="/calendar.svg" />
                            <p>{msg.date}</p>
                        </div>
                        {isHovered ?
                            <div className="h-6 w-6 hidden group-hover:block">
                                {loading ?
                                    <Loading />
                                    :
                                    <button className="cursor-pointer hover:bg-neutral-700 rounded-sm" onClick={() => delMsg(msg.id, String(i))}>
                                        <img src="/trashcan.svg" />
                                    </button>
                                }                              
                            </div>
                            :
                            null
                        }
                    </div>
                    <h4 className="text-xl text-white font-bold mb-2.5">{msg.firstname} {msg.lastname}</h4>
                    <div className="flex gap-2 mb-2.5">
                        <img className="w-5 h-5" src="/email.svg" />
                        <p className="text-purple">{msg.email}</p>
                    </div>
                    <p className="min-h-25">{msg.message}</p>
                </div>
            ))
            :
            <h1 className="text-3xl text-white">No messages.</h1>
            }
            {error && (
                <p>{error}</p>
            )}
        </div>
    )
}