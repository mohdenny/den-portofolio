import React from 'react'
import { motion } from 'framer-motion'
import { squareVariants } from '../../helpers/variants'
import Image from 'next/image'
import Header from '../../components/header/Header'

export const data = [
    { id: 1, thumb: 'undraw_Landing_page.png', title: 'HTML', rating: 5 },
    { id: 2, thumb: 'undraw_Landing_page.png', title: 'HTML5', rating: 4 },
    { id: 3, thumb: 'undraw_Landing_page.png', title: 'CSS', rating: 5 },
    { id: 4, thumb: 'undraw_Landing_page.png', title: 'CSS3', rating: 4 },
    { id: 5, thumb: 'undraw_Landing_page.png', title: 'Javascript', rating: 4 },
    { id: 6, thumb: 'undraw_Landing_page.png', title: 'ReactJS', rating: 4 },
    { id: 7, thumb: 'undraw_Landing_page.png', title: 'React Native', rating: 3 },
    { id: 8, thumb: 'undraw_Landing_page.png', title: 'Redux', rating: 4 },
    { id: 9, thumb: 'undraw_Landing_page.png', title: 'NextJS', rating: 4 },
    { id: 10, thumb: 'undraw_Landing_page.png', title: 'NPM', rating: 4 },
    { id: 11, thumb: 'undraw_Landing_page.png', title: 'Webpack', rating: 4 },
    { id: 12, thumb: 'undraw_Landing_page.png', title: 'Progressive Web Apps', rating: 4 },
    { id: 13, thumb: 'undraw_Landing_page.png', title: 'Automation Testing Web', rating: 3 },
    { id: 14, thumb: 'undraw_Landing_page.png', title: 'JQuery', rating: 4 },
    { id: 15, thumb: 'undraw_Landing_page.png', title: 'NodeJS', rating: 3 },
    { id: 16, thumb: 'undraw_Landing_page.png', title: 'Express', rating: 3 },
    { id: 17, thumb: 'undraw_Landing_page.png', title: 'Python', rating: 3 },
    { id: 18, thumb: 'undraw_Landing_page.png', title: 'PHP', rating: 3 },
    { id: 19, thumb: 'undraw_Landing_page.png', title: 'Codeigniter', rating: 3 },
    { id: 20, thumb: 'undraw_Landing_page.png', title: 'Contentful', rating: 4 },
    { id: 21, thumb: 'undraw_Landing_page.png', title: 'Framer Motion', rating: 4 },
    { id: 22, thumb: 'undraw_Landing_page.png', title: 'SASS', rating: 4 },
    { id: 23, thumb: 'undraw_Landing_page.png', title: 'Tailwindcss', rating: 4 },
    { id: 24, thumb: 'undraw_Landing_page.png', title: 'Bootstrap', rating: 4 },
    { id: 25, thumb: 'undraw_Landing_page.png', title: 'Materialize', rating: 4 },
    { id: 26, thumb: 'undraw_Landing_page.png', title: 'Semantic UI', rating: 4 },
    { id: 27, thumb: 'undraw_Landing_page.png', title: 'Github', rating: 4 },
    { id: 28, thumb: 'undraw_Landing_page.png', title: 'Rest API', rating: 4 },
    { id: 29, thumb: 'undraw_Landing_page.png', title: 'MongoDB', rating: 4 },
    { id: 30, thumb: 'undraw_Landing_page.png', title: 'MySQL', rating: 4 },
    { id: 31, thumb: 'undraw_Landing_page.png', title: 'Figma', rating: 4 },
    { id: 32, thumb: 'undraw_Landing_page.png', title: 'Photoshop', rating: 5 }
]

const Skills = () => {
    return (
        <>
            <main className="container mx-auto mt-4 h-full w-full">
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
                                    <div id="content" className="h-full w-full text-center">
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