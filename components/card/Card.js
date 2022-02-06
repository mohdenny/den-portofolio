import Thumb from './Thumb'
import Title from './Title'
import Desc from './Desc'
import { motion } from 'framer-motion'
import Button from '../button/Button'

const Card = ({ data }) => {
  return (
    <motion.div 
      id="card" 
      className='flex flex-col rounded-xl h-auto w-full'
      whileHover={{ 
        scale: 1.1 , 
        textShadow: "0px 0px 2px rgb(0, 0, 0)",
        boxShadow: "0px 0px 8px rgb(0, 0, 0)",
        marginBottom: '20px'
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300 
      }}
    >
      <Thumb data={data} />
      <div id="card-content" className="bg-rhino-100 flex flex-col h-auto w-full">
        <Title data={data} />
        <Desc data={data} />
      </div>
      <div className="py-2 bg-rhino-35 rounded-b-xl">
        <Button text={'Live Demo'} url={data.url}/>
      </div>
    </motion.div>
    )
}

export default Card;