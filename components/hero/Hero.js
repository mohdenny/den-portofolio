import Background from './Background'
import Image from './Image'
import Headline from './Headline'
import { data } from './config'

const Hero = () => {
    return (
        <div id="hero" className="h-36rem w-full">
            <Background />

            {/* dekstop */}
            <div className="flex-row hidden lg:inline-flex lg:space-x-4 transform -translate-y-28rem px-8 h-full w-full">
                <Headline text={data} />
                <Image src={data} />
            </div>

            {/* mobile */}
            <div className="flex flex-col lg:hidden transform -translate-y-36rem px-8 h-full w-full">
                <Image src={data} />
                <Headline text={data} />
            </div>
        </div>
    )
}

export default Hero;