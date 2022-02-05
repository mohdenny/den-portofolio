import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pathVariants } from '../../../helpers/variants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' }
]

const logo = {
    text : 'MOHDENNY'
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [ animateLogo, setAnimateLogo ] = useState('animationOne')
    const [ showMenuMobile, setShowMenuMobile ] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimateLogo('animationTwo')
        }, 2000)

        return () => clearInterval(interval)
    })

    return (
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
                <>
                    <div className="max-w-full mx-auto lg:px-120px px-2 sm:px-6 mx-auto">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" onClick={() => setShowMenuMobile(false)} />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" onClick={() => setShowMenuMobile(true)}/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <div id="logo-with-text" className="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <motion.path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                                                variants={pathVariants}
                                                initial="hidden"
                                                animate={animateLogo}
                                            />
                                        </svg>
                                        <motion.div 
                                            className="text-white ml-2 font-orbitron text-xl hidden sm:block"
                                            initial={{ y: -250 }}
                                            animate={{
                                                y: -1
                                            }}
                                            transition={{ delay: 1, type: "tween" }}
                                        >
                                            {logo.text}
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-10">
                                        {navigation.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                <motion.a
                                                    href=''
                                                    className={classNames(
                                                        router.asPath === item.href ? 'bg-gray-35 text-white font-poppins-bold font-bold' : 'text-white bg-gray-65 hover:bg-gray-35 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-poppins-regular'
                                                    )}
                                                    aria-current={router.asPath === item.href ? 'page' : undefined}
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                >
                                                    {item.name}
                                                </motion.a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <AnimatePresence>
                        { showMenuMobile && (
                            <motion.div 
                                initial={{ opacity: 0, y: '-100vh', height: 0 }} 
                                animate={{ opacity: 1, y: 0, height: 'auto' }} 
                                exit={{ opacity: 0, y: '-100vh', height: 0 }}
                            >
                                <Disclosure className="sm:hidden px-2">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item, index) => (
                                            <Link key={index} href={item.href}>
                                                <a
                                                    href=''
                                                    className={classNames(
                                                        router.asPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'block px-3 py-2 rounded-md text-base font-medium'
                                                    )}
                                                    aria-current={router.asPath === item.href ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </Disclosure>
                            </motion.div>
                            )
                        }
                    </AnimatePresence>
                </>
            )}
        </Disclosure>
    )
}
