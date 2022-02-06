import Background from './Background'
import Image from './Image'
import Headline from './Headline'
import { data } from './config'

const Hero = () => {
    return (
        <div id="hero" className="lg:h-512px w-full lg:px-120px sm:px-6 lg:pt-100px pt-0 px-1 h-full">
            <Background/>

            {/* dekstop */}
            <div className="flex-row hidden lg:inline-flex lg:space-x-4 transform -translate-y-dekstop h-auto w-full">
                <Headline text={data} />
                <Image src={data} />
            </div>

            {/* mobile */}
            <div className="flex flex-col lg:hidden transform -translate-y-0 h-full w-full">
                <Image src={data} />
                <Headline text={data} />
            </div>
        </div>
    )
}

export default Hero;