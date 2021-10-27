const Hero = () => {
    return (
        <div id="hero" className="border-4 border-blue-500 h-36rem w-full">
            <div id="bg-image" className="border-4 border-red-500 h-full w-full">
            </div>
            <div className="flex flex-row transform -translate-y-28rem px-8 w-full">
                <div id="headline" className="border-4 border-red-500 flex justify-center content-center flex-wrap px-4 h-80 w-full">
                    <div id="text" className="border-4 border-green-500 h-60 w-full">
                    </div>
                </div>
                <div id="image-profile" className="border-4 border-red-500 px-4 h-80 w-1/3">
                    <div id="avatar" className="border-4 border-green-500 h-full w-full">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;