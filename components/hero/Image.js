import Image from 'next/image'
import { motion } from 'framer-motion'
import { photoProfileVariants } from '../../helpers/variants'

const HeroImage = ({ src }) => {return (
        <motion.div 
            id="image" 
            className="flex justify-center border-4 content-center flex-wrap px-4 lg:ml-4 lg:w-1/3 h-80 w-full"
            variants={photoProfileVariants}
            initial="initial"
            animate="animate"
        >
            <Image id="image-profile" className="rounded-xl object-contain object-center h-full w-full" src={require(`../../public/images/${src.image}`)}/>
        </motion.div>
    )
}

export default HeroImage;