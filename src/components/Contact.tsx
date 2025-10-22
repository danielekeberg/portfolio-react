import ConnectForm from "@/components/ContactForm";

function Contact() {
    return (
        <div id="contact" className="h-[80vh] py-20">
            <div className="flex gap-6 mb-20">
                <h1 className="text-6xl font-bold">Let's</h1>
                <h1 className="text-6xl font-bold text-neutral-600">Connect</h1>
                <div className="h-auto w-full mb-1 rounded flex items-center opacity-20">
                    <div className="h-0.5 bg-white w-full"></div>
                </div>
            </div>
            
            <ConnectForm />
            <h4 className="h-[20vh] flex flex-col justify-end text-2xl text-neutral-500">Feel free to contact me if you have any questions or inquiries.</h4>
        </div>
    )
}

export default Contact;