import Image from 'next/image'
import Link from 'next/link'
import { data } from './config'
import { motion } from 'framer-motion'
import { squareVariants } from '../../helpers/variants'
import Header from '../../components/header/Header'


const Contact = () => {
    return (
        <>
            <main className="container mx-auto mt-4 h-full w-full">
                <div className="flex justify-center">
                    <Header text={'Contact'} />
                </div>

                <motion.div 
                    className="grid grid-cols-2 gap-8 py-4 px-2"
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
                                                    <p className="text-white text-center text-xl font-roboto-medium">{item.title}</p>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-center bg-gray-800 rounded-b-xl h-1/2 px-4">
                                            <p className="text-white text-center text-sm font-roboto-regular">{item.address}</p>
                                        </div>
                                    </div>
                                    <div id="card-thumb" className="flex items-center justify-center bg-white h-full w-1/2">
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