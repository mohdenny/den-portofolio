import React from 'react'
import { motion } from 'framer-motion'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { squareVariants } from '../../helpers/variants'

export const data = [
  { thumb: 'devgram-thumb.png', title: 'Devgram', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://devgram-app.herokuapp.com/' },
  { thumb: 'Bisnis.com-Spirit-Indonesia-thumb.png', title: 'Bisnis.com (Spirit Indonesia!)', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://blissful-perlman-ba1151.netlify.app/' },
  { thumb: 'aligbola-thumb.png', title: 'Aligbola', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://alig-bola.web.app/' },
  { thumb: 'gitrepos-thumb.png', title: 'Gitrepos', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://infallible-poincare-6ad975.netlify.app/' },
  { thumb: 'denpic-thumb.png', title: 'Denpic', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://relaxed-hodgkin-3cfeb1.netlify.app/' },
  { thumb: 'laparcom-thumb.png', title: 'Laparcom', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://adoring-keller-e29a10.netlify.app/' },
  { thumb: 'porto-semantic-thumb.png', title: 'Semantic Web Portfolio', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero quam. Nam pellentesque, mi vulputate rhoncus laoreet, mi nunc commodo nulla, ut convallis purus eros nec massa.', url: 'https://eloquent-murdock-69203b.netlify.app/' },
]

const Portfolio = () => {
  return (
    <>
      <main className="container mx-auto mt-4 h-full w-full">
        <div className="flex justify-center">
            <Header text={'Portfolio'} />
        </div>

        <motion.div 
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-rows-auto gap-4 py-4 px-2"
          variants={squareVariants}
          initial="hidden"
          animate="visible"
        >
          { 
            data.map((item, index) => {
              return (
                <Card key={index} data={item} />
              )
            })  
          }
        </motion.div>
      </main>
    </>
  )
}

export default Portfolio