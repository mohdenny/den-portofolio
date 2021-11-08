import { data } from './config'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { squareVariants } from '../../helpers/variants'

const Portfolio = () => {
  return (
    <>
      <main className="container mx-auto mt-4 h-full w-full">
        <div className="flex justify-center">
            <Header text={'Portfolio'} />
        </div>

        <motion.div 
          className="grid grid-cols-4 gap-4 py-4 px-2"
          variants={squareVariants}
          initial="hidden"
          animate="visible"
        >
          { 
            data.map(item => {
              return (
                <Card key={item.id} data={item} />
              )
            })  
          }
        </motion.div>
      </main>
    </>
  )
}

export default Portfolio