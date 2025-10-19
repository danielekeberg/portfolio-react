function Footer() {
    return (
        <div className="flex justify-between mt-20 py-10 text-neutral-600">
            <p>Ekeberg, 2025</p>
            <div className="flex gap-10">
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