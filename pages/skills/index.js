import React from 'react'
import { motion } from 'framer-motion'
import { squareVariants } from '../../helpers/variants'
import Image from 'next/image'
import Header from '../../components/header/Header'
import Rating from '../../components/rating/Rating'

export const data = [
    { thumb: 'undraw_Landing_page.png', title: 'HTML', rating: 5 },
    { thumb: 'undraw_Landing_page.png', title: 'HTML5', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'CSS', rating: 5 },
    { thumb: 'undraw_Landing_page.png', title: 'CSS3', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Javascript', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'ReactJS', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'React Native', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'Redux', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'NextJS', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'NPM', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Webpack', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Progressive Web Apps', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Automation Testing Web', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'JQuery', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'NodeJS', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'ExpressJS', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'Python', rating: 2 },
    { thumb: 'undraw_Landing_page.png', title: 'PHP', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'Codeigniter', rating: 3 },
    { thumb: 'undraw_Landing_page.png', title: 'Contentful', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Framer Motion', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'SASS', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Tailwindcss', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Bootstrap', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Materialize', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Semantic UI', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Github', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Rest API', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'MongoDB', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'MySQL', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Figma', rating: 4 },
    { thumb: 'undraw_Landing_page.png', title: 'Photoshop', rating: 5 }
]

const Skills = () => {
    return (
        <>
            <main className="lg:px-120px sm:px-6 pt-0 px-1 mx-auto h-full w-full">
                <div className="flex justify-center">
                    <Header text={'Skills'} />
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
                                <motion.div 
                                    key={index} 
                                    id="card" 
                                    className='flex flex-row bg-rhino-100 rounded-xl h-auto w-full'
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
                                    {/* <div id="card-thumb" className="flex items-center justify-center w-1/3">
                                        <Image src={require(`../../public/images/${item.thumb}`)} alt="logo-skill" height="80" width="100%" className="object-cover"/>
                                    </div> */}
                                    <div id="content" className="h-full w-full text-center">
                                        <div className="h-1/2 flex items-center justify-center py-2 px-2">
                                            <p className="text-boulder-35 text-xl font-poppins-semibold font-semibold">{item.title}</p>
                                        </div>
                                        <div className="bg-rhino-65 rounded-b-xl text-boulder-65 h-1/2 flex items-center justify-center py-2">
                                            <div className="flex items-center justify-center space-x-2">
                                                <Rating data={item.rating} />
                                            </div>
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