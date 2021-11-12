import Image from 'next/image'
import { motion } from 'framer-motion'
import { photoProfileVariants } from '../../helpers/variants'

const HeroImage = ({ src }) => {return (
        <motion.div 
            id="image" 
            className="flex justify-center content-center flex-wrap px-4 lg:w-1/3 h-80 overflow-hidden w-full"
            variants={photoProfileVariants}
            initial="initial"
            animate="animate"
        >
            <Image id="image-profile" className="object-cover object-center" src={require(`../../public/images/${src.image}`)}/>
        </motion.div>
    )
}

export default HeroImage;