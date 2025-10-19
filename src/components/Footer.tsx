function Footer() {
    const time = new Date();
    const year = time.getFullYear();
    
    return (
        <div className="flex justify-between mt-20 py-10 text-neutral-600">
            <p>Ekeberg, {year}</p>
            <div className="flex gap-5">
                <a href="https://github.com/danielekeberg" target="_blank">
                    <img src="github.svg" alt="GitHub" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/daniel-lehre-ekeberg-04a7b1178/" target="_blank">
                    <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}

export default Footer;