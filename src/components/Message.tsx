'use client';
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { supabase } from "@/lib/supabaseClient";

type Message = {
    id: number;
    message: string;
    email: string;
    firstName: string;
    lastName: string;
    created_at: string;
}

export default function Message() {
    const [msg, setMsg] = useState<Message[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        async function fetchMsg() {
            const {data, error} = await supabase
                .from("contact-portfolio")
                .select("*")
            if(error) {
                console.error("Error fetching messages:", error)
                return;
            }
            const messages = (data || []) as Message[];
            setMsg(messages)
        }
        fetchMsg();
    }, [])

    function removecard(i: string) {
        const el = document.getElementById(i);
        if (el) {
            el.remove();
        }
    }

    async function delMsg(id: number) {
        setLoading(true);
        const { data, error } = await supabase
            .from("contact-portfolio")
            .delete()
            .eq("id", id)
        if(error) {
            console.error("Error deleting message:", error)
            return;
        }
        setLoading(false);
    }

    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 mb-10 xl:mx-0 md:mx-0 sm:mx-5">
            {msg.length > 0 ? msg.map((msg) => (
                <div key={msg.id} id={String(msg.id)} className="bg-neutral-900 p-5 rounded-sm border group border-neutral-800" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className="flex justify-between">
                        <div className="flex gap-2 mb-2.5">
                            <img className="w-5 h-5" src="/calendar.svg" />
                            <p>{new Date(msg.created_at).toLocaleDateString("no-NO")}</p>
                        </div>
                        {isHovered ?
                            <div className="h-6 w-6 hidden group-hover:block">
                                {loading ?
                                    <Loading />
                                    :
                                    <button className="cursor-pointer hover:bg-neutral-700 rounded-sm" onClick={() => { delMsg(msg.id); removecard(String(msg.id)) }}>
                                        <img src="/trashcan.svg" />
                                    </button>
                                }                              
                            </div>
                            :
                            null
                        }
                    </div>
                    <h4 className="text-xl text-white font-bold mb-2.5">{msg.firstName} {msg.lastName}</h4>
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