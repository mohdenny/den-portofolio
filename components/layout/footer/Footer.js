const Footer = () => {
    return (
        <>
            <div id="footer" className="h-40 w-full py-2 flex items-center justify-between lg:px-120px md:px-6 px-1 text-boulder-100 font-poppins-regular">
                <div className="flex flex-col items-start justify-center h-full w-full">
                    <p className="text-2xl">Mohammad Denny</p>
                    <p className="text-sm">Frontend Developer</p>
                </div>
                <div className="flex flex-col items-end justify-center h-full w-full">
                    <p className="text-xs">Built with:</p>
                    <p className="text-sm">NextJS & Tailwindcss</p>
                    <p className="text-xs">Copyright © 2021</p>
                </div>
            </div>
        </>
    )
}

export default Footer;