import { motion } from 'framer-motion'
import { headlineVariants } from '../../helpers/variants'

const HeroHeadline = ({ text }) => {
    return (
        <div id="headline" className="flex justify-center flex-wrap h-full w-full">
            <motion.div 
                id="text" 
                className="h-auto w-full"
                variants={headlineVariants}
                initial="initial"
                animate="animate"
            >
                <div className="text-white text-title font-playfair-display-bold">
                    {text.title1}{<br/>}{text.title2}
                </div>
                <div className='text-caption font-poppins-regular text-boulder-65 mt-8'>{text.caption1}{<br/>}{text.caption2}</div>
            </motion.div>
        </div>
    )
}

export default HeroHeadline