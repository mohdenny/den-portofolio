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
                <p className="text-white text-title font-playfair-display-bold">
                    {text.title1}
                </p>
                <p className="text-white text-title font-playfair-display-bold">
                    {text.title2}
                </p>
                <p className='text-caption font-poppins-regular text-boulder-65 mt-8'>{text.caption1}</p>
                <p className='text-caption font-poppins-regular text-boulder-65 mt-8'>{text.caption2}</p>
            </motion.div>
        </div>
    )
}

export default HeroHeadline