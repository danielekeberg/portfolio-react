'use client';
import Message from "@/components/Message";
import { useEffect, useState } from "react";
import Link from "next/link"

export default function Admin() {
    const [admin, setAdmin] = useState<string | null>(null);
    useEffect(() => {
        const storedAdmin = localStorage.getItem("admin");
        setAdmin(storedAdmin);
    })
    if(!admin) {
        return (
            <div className="h-screen items-center flex justify-center">
                <h1 className="italic">No access.</h1>
            </div>
        )
    }

    return (
        <div className="xl:mx-25 xl:my-10 text-neutral-300 md:mx-25 md:my-10 sm:m-0">
            <Link href="./">
                <p className="mb-5 hover:bg-neutral-900 rounded-sm w-20 text-center">Go Back</p>
            </Link>
            <div className="flex gap-3 items-center mb-5 xl:justify-start md:justify-start sm:justify-center">
                <img src="/msg.svg" className=" w-10 h-10" />
                <h1 className="md:text-4xl font-bold sm:text-xl">Contact Submissions</h1>
            </div>
            <p className="mb-10 italic text-sm sm:text-center md:text-left xl:text-left">View and manage all contact form submissions in one place.</p>
            <Message />
        </div>
    )
}