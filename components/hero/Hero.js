import Background from './Background'
import Image from './Image'
import Headline from './Headline'
import { data } from './config'

const Hero = () => {
    return (
        <div id="hero" className="h-36rem w-full">
            <Background />

            {/* dekstop */}
            <div className="flex flex-row hidden lg:inline-flex transform -translate-y-28rem px-8 w-full">
                <Headline text={data} />
                <Image src={data} />
            </div>

            {/* mobile */}
            <div className="flex flex-col flex-col lg:hidden transform -translate-y-36rem px-8 w-full">
                <Image src={data} />
                <Headline text={data} />
            </div>
        </div>
    )
}

export default Hero;