import Image from 'next/image'
import { motion } from 'framer-motion'
import { photoProfileVariants } from '../../helpers/variants'

const HeroImage = ({ src }) => {return (
        <motion.div className='flex justify-center content-center mx-auto flex-wrap bg-gradient-to-tr from-boston-blue-100 to-white w-auto rounded-full p-2 h-avatar-border'
            variants={photoProfileVariants}
            initial="initial"
            animate="animate"
        >
            <div 
                id="image" 
                className="flex justify-center content-center h-avatar-image overflow-hidden relative w-full border-8 rounded-full"
                
            >
                <Image id="image-profile" src={require(`../../public/images/${src.image}`)} width="500px" height="100%" objectPosition="center" objectFit="cover"/>
            </div>
        </motion.div>
    )
}

export default HeroImage;