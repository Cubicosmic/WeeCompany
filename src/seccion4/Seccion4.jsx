import React from 'react'
import { motion, useTransform } from 'framer-motion'
import imgGoogleplay from '../assets/s4-googleplay.png'
import imgAppstore from '../assets/s4-appstore.png'

export default function Seccion4({ scrollProgress }) {
    return (
        <section className='w-full bg-bluewee-100 overflow-hidden py-20'>
            <motion.h3 className='text-8xl font-black Super-text py-5'
                style={{x: 0, width: "10000%"}} transition={{duration: 50, ease: "linear", repeat: Infinity, repeatType: 'mirror'}} whileInView={{x: -10000}}>
                ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA?
            </motion.h3>
            <motion.h3 className='text-8xl font-black Super-text py-5'
                style={{x: -10000, width: "10000%"}} transition={{duration: 50, ease: "linear", repeat: Infinity, repeatType: 'mirror'}} whileInView={{x: 0}}>
                ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA?
            </motion.h3>
            <motion.h3 className='text-8xl font-black Super-text py-5'
                style={{x: 0, width: "10000%"}} transition={{duration: 50, ease: "linear", repeat: Infinity, repeatType: 'mirror'}} whileInView={{x: -10000}}>
                ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA? ¿LISTO PARA TRANSFORMAR TU EXPERIENCIA?
            </motion.h3>
            <div className='w-full flex flex-wrap justify-center'>
                <img src={imgGoogleplay} alt='no found' className='w-48 h-16 bg-white rounded-lg p-1 shadow-md mx-20 mt-10'/>
                <img src={imgAppstore} alt='no found' className='w-48 h-16 bg-white rounded-lg p-1 shadow-md mx-20 mt-10'/>
            </div>
        </section>
    )
}
