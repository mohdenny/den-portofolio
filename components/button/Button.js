import { motion } from 'framer-motion'
import { buttonVariants } from '../../helpers/variants'

const Button = ({ text, url }) => {
    return (
        <div className="flex items-center justify-center">
          <motion.a 
            className="border-boston-blue-100 border-2 font-poppins-regular h-full w-24 text-boston-blue-100 rounded-xl text-center py-1 hover:border-boston-blue-65 hover:text-boston-blue-65 "
            variants={buttonVariants}
            whileHover="hover"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text}
          </motion.a>
        </div>
    )
}

export default Button