import Image from 'next/image'
import { data } from './config'
import avatar from '../../public/images/avatar.jpg'

const Hero = () => {
    return (
        <div id="hero" className="h-34rem w-full">
            <div id="bg-image" className="bg-space-img h-full w-full"/>
            <div className="flex flex-row transform -translate-y-28rem px-8 w-full">
                <div id="headline" className="flex justify-center content-center flex-wrap px-4 h-80 w-full">
                    <div id="text" className="h-auto w-full">
                        <p className="text-white text-2xl text-center font-roboto-medium">
                            {data.headline}
                        </p>
                    </div>
                </div>
                <div id="image-profile" className="flex justify-center content-center flex-wrap px-4 ml-4 h-80 w-1/3">
                    <Image id="avatar" className="rounded-xl h-full w-full" src={avatar}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;