import { motion } from 'framer-motion'
import { headlineVariants } from '../../helpers/variants'

const HeroHeadline = ({ text }) => {
    return (
        <div id="headline" className="border-4 flex justify-center content-center flex-wrap px-4 h-80 w-full">
            <div id="text" className="h-auto w-full">
                <motion.p 
                    className="text-white text-3xl text-center font-roboto-medium"
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