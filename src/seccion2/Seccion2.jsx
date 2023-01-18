import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import img1 from '../assets/s2-img.png'
import imgCel from '../assets/s2-cel.png'
import imgLista from '../assets/s2-lista.png'
import imgLapiz from '../assets/s2-lapiz.png'

export default function Seccion2({ setS1OutView }) {

    const ref = useRef(null)
    const isInView = useInView(ref)
    useEffect(() => {
        setS1OutView(isInView)
    }, [isInView])
    
    return (
        <>
        <div className='w-full -z-50' style={{position: "sticky",top:"1vh", height:"1px"}} ref={ref} ></div>
        <section className='Full block md:flex items-center relative text-white bg-bluewee-700 md:bg-bluewee-100'>
            <div className='relative md:absolute z-10 p-10 right-0 w-full h-full md:w-2/3 md:h-2/3 s2-rounded flex justify-center items-center flex-wrap bg-bluewee-700'>
                <h2 className='w-full text-center text-4xl font-bold'>¿Cómo funciona?</h2>
                <ul className='px-auto'>
                    <motion.li className='flex justify-start items-center'
                        style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                        <img src={imgCel} alt='' className='w-16 sombra'/>
                        <p className='text-4xl mx-4 text-transparent font-bold' style={{WebkitTextStroke: "1px #FFFFFF"}}>01</p>
                        <p>Descarga Wee en tiendas digitales</p>
                    </motion.li>
                    <motion.li className='flex justify-start items-center'
                        style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                        <img src={imgLapiz} alt='' className='w-16'/>
                        <p className='text-4xl mx-4 text-transparent font-bold' style={{WebkitTextStroke: "1px #FFFFFF"}}>02</p>
                        <p>Registrate y activa tu perfil</p>
                    </motion.li>
                    <motion.li className='flex justify-start items-center'
                        style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                        <img src={imgLista} alt='' className='w-16'/>
                        <p className='text-4xl mx-4 text-transparent font-bold' style={{WebkitTextStroke: "1px #FFFFFF"}}>03</p>
                        <p>¡Ya eres paciente! disfruta de todos nuestros beneficios</p>
                    </motion.li>
                </ul>
            </div>
            <img src={img1} alt='no fund' className='relative md:absolute left-1/2 -translate-x-3/5 md:translate-x-0 md:left-0 md:top-1 z-20 h-60vh md:h-90vh'/>
        </section>
        </>
    )
}
