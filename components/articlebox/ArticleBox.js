import React, { useEffect } from "react";
import Title from './Title'
import Desc from './Desc'
import Thumb from './Thumb'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { squareVariants } from '../../helpers/variants'

const ArticleBox = ({ data }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          controls.start("visible")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
        >
            <motion.div 
                className="flex flex-row bg-gray-700 h-60 w-full rounded-xl"
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
                <Thumb />
                <div id="content" className="h-full w-1/2">
                    <Title data={data}/>
                    <Desc data={data}/>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ArticleBox