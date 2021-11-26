import Image from 'next/image'
import { motion } from 'framer-motion'
import { photoProfileVariants } from '../../helpers/variants'

const HeroImage = ({ src }) => {return (
        <motion.div 
            id="image" 
            className="flex justify-center content-center flex-wrap px-4 lg:w-1/3 h-80 overflow-hidden relative w-full"
            variants={photoProfileVariants}
            initial="initial"
            animate="animate"
        >
            <Image id="image-profile" src={require(`../../public/images/${src.image}`)} className="rounded-full" layout="fill" objectFit="contain"/>
        </motion.div>
    )
}

export default HeroImage;