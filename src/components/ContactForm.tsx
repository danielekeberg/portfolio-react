'use client';
import { useEffect, useState, FormEvent } from "react";

function ConnectForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [length, setLength] = useState(0);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
            async function getLength() {
                try {
                    if (!apiUrl) {
                        throw new Error('API URL is not defined');
                    }
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setLength(data.length);
                } catch(err) {
                    console.log("error");
                }
            }
            getLength();
        }, [])

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("Sending...");
        const now = new Date();
        const time = Date.now();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const year = now.getFullYear();
        const formatted = `${day}.${month}.${year} ${hours}:${minutes}`

        try {
            if(!apiUrl) {
                throw new Error('error fetching api')
            }
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    date: formatted,
                    time: time,
                    firstname: firstName.trim(),
                    lastname: lastName.trim(),
                    email: email.trim(),
                    message: message.trim(),
                    id: length,
                }),
            });

            if(!res.ok) {
                const err = await res.text();
                throw new Error((err || "Couldn't send message"));
            }
            setLength(length + 1)
            setStatus("Message sent!")
            setTimeout(() => {
                setStatus("");
            }, 2000)
        } catch(err) {
            setStatus(`${err}`)
            setTimeout(() => {
                setStatus("");
            }, 2000)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex justify-center relative">
            <div>
                <div className="flex gap-5 mb-5">
                    <div className="relative">
                        <input className="peer border border-neutral-800 rounded pt-5 pb-1 px-2" placeholder=" " type="text" id="fname" onChange={(e) => setFirstName(e.target.value)} />
                        <label htmlFor="fname" className="absolute left-2 text-neutral-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs">First Name</label>
                    </div>
                    <div className="relative">
                        <input className="peer border border-neutral-800 rounded pt-5 pb-1 px-2" placeholder=" " type="text" id="lname" onChange={(e) => setLastName(e.target.value)} />
                        <label htmlFor="fname" className="absolute left-2 text-neutral-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs">Last Name</label>
                    </div>
                </div>
                <div className="flex gap-5 mb-5">
                    <div className="relative">
                        <input className="peer border border-neutral-800 rounded pt-5 pb-1 px-2" placeholder=" " type="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="email" className="absolute left-2 text-neutral-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs">Email</label>
                    </div>
                </div>
                <div className="flex gap-5 mb-5">
                    <textarea className="border border-neutral-800 rounded resize-none h-50 p-2 w-full" placeholder="Message" id="msg" onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div>
                    <button type="submit" className="cursor-pointer border border-neutral-800 rounded-md hover:bg-neutral-900 w-full p-2 active:bg-neutral-600">SUBMIT</button>
                </div>
                {status && (
                    <div className="p-3 fixed right-10 top-25 italic border border-neutral-850 bg-neutral-900 rounded z-1000 cursor-pointer ">
                        <p>{status}</p>
                    </div>
                )}
            </div>
        </form>
    )
}

export default ConnectForm;