import React, { useEffect } from 'react'
import { data } from './api/config'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { squareVariants } from '../helpers/variants'
import Hero from '../components/hero/Hero'
import Header from '../components/header/Header'
import ArticleBox from '../components/articlebox/ArticleBox'
import Button from '../components/button/Button'

const Home = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      <Hero/>
      <main className="container mx-auto mt-4 h-full w-full">
        <div className="flex justify-center">
            <Header text={'NASA Feed'} />
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
        >
          <div className="grid lg:grid-cols-3 grid-rows-auto gap-4 py-4 px-2 h-full w-full">
            {
              data.map(item => {
                return (
                  <ArticleBox key={item.id} data={item}/>
                )
              })
            }
          </div>
          <Button text={'View More'}/>
        </motion.div>
      </main>
    </>
  )
}

export default Home