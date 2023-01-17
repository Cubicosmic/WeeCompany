import React from 'react'
import { motion, useTransform } from 'framer-motion'

export default function Seccion4({ scrollProgress }) {

    return (
        <section className='w-full bg-bluewee-100 overflow-hidden py-10'>
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
        </section>
    )
}
