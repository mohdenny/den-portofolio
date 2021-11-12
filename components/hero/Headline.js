import { motion } from 'framer-motion'
import { headlineVariants } from '../../helpers/variants'

const HeroHeadline = ({ text }) => {
    return (
        <div id="headline" className="flex justify-center content-center flex-wrap px-4 lg:h-80 sm:h-52 h-96 w-full">
            <div id="text" className="h-auto w-full">
                <motion.p 
                    className="text-white sm:text-3xl text-2xl text-center font-roboto-medium"
                    variants={headlineVariants}
                    initial="initial"
                    animate="animate"
                >
                    {text.headline}
                </motion.p>
            </div>
        </div>
    )
}

export default HeroHeadline