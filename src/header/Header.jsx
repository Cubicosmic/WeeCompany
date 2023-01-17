import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import logo from '../assets/logoHeader.png'
import { motion } from "framer-motion"

export default function Header({ setPage }) {

    const [openMenu,setOpenMenu] = useState('open')
    const variants = {
        open: { x: 0 },
        closed: { x: "100%" }
    }
      
    return (
        <header className='fixed w-full h-20 z-40 bg-bluewee-500'>
            <div className='fixed md:z-50 top-0 left-0 md:left-1/2 md:-translate-x-1/2 logo w-full md:w-1/5 h-20 flex items-center justify-between md:justify-center px-6'>
                <img src={logo} alt='no found' className='h-12' />
                <div className='w-12 h-12 flex justify-around items-center rotate-45 md:hidden cursor-pointer'
                    onClick={() => setOpenMenu('open')}>
                    <div className='bg-white h-1/2 w-1'></div>
                    <div className='bg-white h-full w-1'></div>
                    <div className='bg-white h-1/2 w-1'></div>
                </div>
            </div>
            <motion.div className='fixed top-0 right-0 w-4/5 md:w-full h-full md:h-20 md:flex justify-between Glass'
                animate={openMenu==='closed' ? "closed" : "open"}
                transition={{duration:0.5, ease: "easeOut"}}
                variants={variants}>
                <div className='w-full h-20 md:hidden text-white text-5xl flex justify-end items-center pr-8 cursor-pointer'
                    onClick={() => setOpenMenu('closed')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <nav className='md:w-2/5 px-6 md:px-10 flex flex-wrap md:flex-nowrap justify-around mb-10 md:mb-0'>
                    <button className='text-base text-start font-bold text-white m-4 w-full md:w-min'>Inicio</button>
                    <button className='text-base text-start font-bold text-white m-4 w-full md:w-min'>Preguntas frecuentes</button>
                    <button className='text-base text-start font-bold text-white m-4 w-full md:w-min'>Blog</button>
                </nav>
                <nav className='w-2/3 md:w-2/5 px-6 md:px-10 flex flex-wrap items-start md:items-center md:flex-nowrap justify-around'>
                    <button className='text-base text-center py-1 px-6 rounded-lg bg-white h-1/2 mx-1/2 font-bold text-bluewee-500'>Registrate</button>
                    <span className='md:hidden w-full h-6'></span>
                    <button className='text-base text-center py-1 px-6 rounded-lg border-2 text-white border-white h-1/2 mx-2 font-bold'>Registrate</button>
                </nav>
            </motion.div>
        </header>
    )
}
