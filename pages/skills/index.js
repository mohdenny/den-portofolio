import React from 'react'
import { data } from './config'
import { motion } from 'framer-motion'
import { squareVariants } from '../../helpers/variants'
import Image from 'next/image'
import Header from '../../components/header/Header'


const Skills = () => {
    return (
        <>
            <main className="container mx-auto mt-4 h-full w-full">
                <div className="flex justify-center">
                    <Header text={'Skills'} />
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
                                <motion.div 
                                    key={item.id} 
                                    id="card" 
                                    className='flex flex-row bg-gray-700 rounded-xl h-auto w-full'
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
                                    <div id="card-thumb" className="flex items-center justify-center w-1/3">
                                        <Image src={require(`../../public/images/${item.thumb}`)} alt="logo-skill" height="80" width="100%" className="object-cover"/>
                                    </div>
                                    <div id="content" className="h-full w-full">
                                        <div className="h-1/2 flex items-center justify-center">
                                            <p className="text-white text-xl font-roboto-medium">{item.title}</p>
                                        </div>
                                        <div className="bg-gray-800 rounded-b-xl text-white h-1/2 flex items-center justify-center">
                                            <p className="text-white font-xl font-roboto-regular">{item.rating}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })  
                    }
                </motion.div>
            </main>
        </>
    )
}

export default Skills