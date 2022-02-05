import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { squareVariants } from '../../helpers/variants'
import Header from '../../components/header/Header'

const data = [
    { id: 1, thumb: 'logos/ig.png' ,title: 'Instagram', address: '@mohdenny', url: 'https://www.instagram.com/mohdenny'},
    { id: 2, thumb: 'logos/github.png', title: 'Github', address: 'mohdenny', url: 'https://github.com/mohdenny'},
    { id: 3, thumb: 'logos/linkedin.png', title: 'LinkedIn', address: 'mohammad-denny-379065131', url: 'https://www.linkedin.com/in/mohammad-denny-379065131'},
    { id: 4, thumb: 'logos/gmail.png', title: 'Email', address: 'mohammaddenny94\n@gmail.com', url: 'https://mail.google.com/mail/u/0/?fs=1&to=mohammaddenny94@gmail.com&tf=cm'},
    { id: 5, thumb: 'logos/twitter.png', title: 'Twitter', address: '@mohdenny', url: 'https://twitter.com/mohdenny'},
    { id: 6, thumb: 'logos/youtube.png', title: 'Youtube', address: 'Mohammad Denny', url: 'https://www.youtube.com/channel/UCvfQmEp-sxwtGbSqfzyOe4g'},
    { id: 7, thumb: 'logos/wa.png', title: 'Whatsapp', address: '08119956XXX', url: 'https://api.whatsapp.com/send?phone=628119956668&text=Hallo Denny, saya ingin bekerjasama dengan Anda :)'}
]

const Contact = () => {
    return (
        <>
            <main className="container mx-auto mt-4 h-full w-full">
                <div className="flex justify-center">
                    <Header text={'Contact'} />
                </div>

                <motion.div 
                    className="grid md:grid-cols-2 grid-rows-auto gap-8 py-4 px-2"
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
                                    <div id="content" className="h-full w-1/2">
                                        <div className="h-1/2 flex items-center justify-center">
                                            <Link href={item.url}>
                                                <a target="_blank" rel="noopener noreferrer">
                                                    <p className="text-white text-center text-xl font-poppins-medium hover:text-gray-300">{item.title}</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-center bg-gray-800 rounded-bl-xl h-1/2 px-4">
                                            <p className="text-white text-center text-sm font-poppins-regular">{item.address}</p>
                                        </div>
                                    </div>
                                    <div id="card-thumb" className="flex items-center justify-center rounded-r-xl bg-gray-600 h-full w-1/2">
                                        <Image src={require(`../../public/images/${item.thumb}`)} alt="logo-skill" height="150" width="100%" className="object-contain drop-shadow-lg"/>
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

export default Contact