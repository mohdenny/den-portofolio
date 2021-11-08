import { motion } from 'framer-motion'
import { buttonVariants } from '../../helpers/variants'

const Button = ({ text }) => {
    return (
        <div className="flex items-center justify-center">
            <motion.button 
              className="bg-blue-500 h-full w-24 text-white rounded-xl text-center py-1 hover:bg-blue-600 "
              variants={buttonVariants}
              whileHover="hover"
            >
              {text}
            </motion.button>
        </div>
    )
}

export default Button