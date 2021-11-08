import Background from './Background'
import Image from './Image'
import Headline from './Headline'
import { data } from './config'

const Hero = () => {
    return (
        <div id="hero" className="h-36rem w-full">
            <Background />
            <div className="flex lg:flex-row flex-col transform -translate-y-28rem px-8 w-full">
                <div className="lg:hidden">
                    <Image src={data} />
                </div>
                <Headline text={data} />
                <Image src={data} />
            </div>
        </div>
    )
}

export default Hero;