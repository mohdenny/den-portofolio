import React, { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'

const CardDesc = ({ data }) => {
    const [ isDisplay, setIsDisplay ] = useState(false)

    const arrowDown = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    )

    const arrowUp = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <   path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
    )

    return (
        <div id="desc" className="bg-rhino-65 flex flex-col justify-center px-4 py-2 h-full w-full">
            <button 
                className="text-boulder-35 flex flex-row justify-between gap-4 text-paragraph font-poppins-regular break-word text-justify hover:text-white"
                onClick={() => setIsDisplay(!isDisplay)}
            >
                <span>Description</span>
                <span>{ isDisplay ? arrowDown : arrowUp }</span>
            </button>
            <AnimatePresence>
                {   isDisplay &&
                        (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }} 
                                animate={{ opacity: 1, height: 'auto' }} 
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <div className=" border-t-2 flex content-center justify-center text-boulder-35 text-paragraph font-poppins-regular break-word text-justify">
                                    <p>{data.desc}</p>
                                </div>
                            </motion.div>
                        )
                }
            </AnimatePresence>
        </div>
    )
}

export default CardDesc