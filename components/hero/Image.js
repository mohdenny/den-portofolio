import Image from 'next/image'
import { motion } from 'framer-motion'
import { photoProfileVariants } from '../../helpers/variants'

const HeroImage = ({ src }) => {return (
        <motion.div 
            id="image" 
            className="flex justify-center content-center flex-wrap px-4 ml-4 h-80 w-1/3"
            variants={photoProfileVariants}
            initial="initial"
            animate="animate"
        >
            <Image id="image-profile" className="rounded-xl object-cover object-center h-full w-full" src={require(`../../public/images/${src.image}`)}/>
        </motion.div>
    )
}

export default HeroImage;