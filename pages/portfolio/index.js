import React from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { squareVariants } from '../../helpers/variants'

export const data = [
  { id: 1, thumb: 'undraw_Landing_page.png', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.' },
  { id: 2, thumb: 'undraw_Landing_page.png', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.' },
  { id: 3, thumb: 'undraw_Landing_page.png', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.' },
  { id: 4, thumb: 'undraw_Landing_page.png', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.' },
  { id: 5, thumb: 'undraw_Landing_page.png', title: 'Lorem ipsum dolor sit amet', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.' }
]

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