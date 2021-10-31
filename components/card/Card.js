import Thumb from './Thumb'
import Title from './Title'
import Desc from './Desc'
import { motion } from 'framer-motion'

const Card = ({ data }) => {
  return (
    <motion.div 
      id="card" 
      className='flex flex-col bg-gray-700 rounded-xl h-80 w-full'
      whileHover={{ 
        scale: 1.1 , 
        textShadow: "0px 0px 8px rgb(0, 0, 0)",
        boxShadow: "0px 0px 8px rgb(0, 0, 0)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300 
      }}
    >
        <Thumb data={data} />
        <div id="card-content" className="flex flex-col h-1/2 w-full">
          <Title data={data} />
          <Desc data={data} />
        </div>
    </motion.div>
    )
}

export default Card;