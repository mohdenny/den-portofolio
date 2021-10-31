import Hero from '../components/hero/Hero'
import Header from '../components/header/Header'
import ArticleBox from '../components/articlebox/ArticleBox'
import { data } from './api/config'
import { motion } from "framer-motion"
import { buttonVariants } from '../helpers/variants'

const Home = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  return (
    <>
      <Hero/>
      <main className="container mx-auto mt-4">
        <div className="flex justify-center">
            <Header text={'Article Feed'} />
        </div>
        <div className="grid grid-cols-3 gap-4 py-4 px-2 h-full w-full">
          {
            data.map(item => {
              return (
                <ArticleBox key={item.id} data={item}/>
              )
            })
          }
        </div>
        <div className="flex items-center justify-center">
          <motion.button 
            className="bg-blue-500 h-full w-24 text-white rounded-xl text-center py-1 hover:bg-blue-600 "
            variants={buttonVariants}
            whileHover="hover"
          >
            View More
          </motion.button>
        </div>
      </main>
    </>
  )
}

export default Home