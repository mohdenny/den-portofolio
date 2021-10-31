import Background from './Background'
import Image from './Image'
import Headline from './Headline'
import { data } from './config'

const Hero = () => {
    return (
        <div id="hero" className="h-36rem w-full">
            <Background />
            <div className="flex flex-row transform -translate-y-28rem px-8 w-full">
                <Headline text={data} />
                <Image src={data} />
            </div>
        </div>
    )
}

export default Hero;