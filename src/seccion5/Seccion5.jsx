import React from 'react'
import { motion } from 'framer-motion'
import imgDoc from '../assets/s5-doc.png'
import imgEsteto from '../assets/s5-esteto.png'
import imgCels from '../assets/s5-cels.png'

export default function Seccion5() {
    return (
        <section className='w-full S5 py-14 text-white relative'>
            <div className='w-full md:w-3/5'>
                <div className='w-full md:pl-20'>
                    <h1 className='w-full px-10 text-3xl md:text-4xl font-bold text-center'>¡Recibe orientación médica sin salir de casa!</h1>
                    <p className='w-full px-10 pt-5 font-bold text-center'>Con la teleasistencia tu salud será valorada desde la comodidad de tu hogar.</p>
                </div>
                <div className='w-full md:bg-bluewee-500 mt-10 md:pl-20 py-10 px-6 flex flex-wrap' style={{borderRadius: "0 30px 30px 0"}}>
                    <h4 className='w-full px-10 text-xl md:text-2xl font-bold text-center'>Elige el tipo de servicio que necesites</h4>
                    <motion.div className='w-1/2 flex justify-center flex-wrap my-8'
                        style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                        <p className='font-bold w-full justify-center h-10 flex items-center'>Médico especialista</p>
                        <img src={imgDoc} alt='no found' className='w-24'/>
                        <p className='font-bold w-full justify-center h-10 flex items-center text-2xl md:text-4xl pt-6'>$300</p>
                    </motion.div>
                    <motion.div className='w-1/2 flex justify-center flex-wrap my-8'
                        style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                        <p className='font-bold w-full justify-center h-10 flex items-center'>Médico general</p>
                        <img src={imgEsteto} alt='no found' className='w-24'/>
                        <p className='font-bold w-full justify-center h-10 flex items-center text-2xl md:text-4xl pt-6'>$200</p>
                    </motion.div>
                </div>
            </div>
            <img src={imgCels} alt='no found' className='absolute top-0 right-10 hidden md:block h-full' />
        </section>
    )
}
