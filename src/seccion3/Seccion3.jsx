import React from 'react'
import { motion } from 'framer-motion'
import imgCalendario from '../assets/s3-calendario.png'
import imgCam from '../assets/s3-cam.png'
import imgCampana from '../assets/s3-campana.png'
import imgLupa from '../assets/s3-lupa.png'
import imgReceta from '../assets/s3-receta.png'
import imgUbicacion from '../assets/s3-ubicacion.png'

export default function Seccion3() {

    const servicios = [
        {img: imgCam, text: 'Teleasistencias 24/7'},
        {img: imgReceta, text: 'Surte tu receta digital en farmacias'},
        {img: imgUbicacion, text: 'Localiza servicios de salud'},
        {img: imgCalendario, text: 'Programa tus tratamientos'},
        {img: imgLupa, text: 'Supervisión de proveedores de salud'},
        {img: imgCampana, text: 'Recibe recordatorios'},
    ]

    return (
        <section className='w-full flex flex-wrap items-center bg-bluewee-500 py-14 text-white'>
            <h2 className='w-full text-center text-4xl font-bold px-8'>Servicios en un solo lugar</h2>
            <ul className='flex flex-wrap justify-around px-10 mt-4'>
                {servicios.map((servicio, id) => <motion.li key={id} className='flex flex-wrap justify-center p-5 w-1/2 md:w-3/10' 
                    style={{scale: 0.5}} transition={{duration: 0.3}} whileInView={{scale: 1}}>
                    <img src={servicio.img} alt='no found' className='w-24 h-24 md:w-28 md:h-28' />
                    <div className='w-full flex justify-center'><p className='w-full md:w-2/3 font-bold text-center p-2'>{servicio.text}</p></div>
                </motion.li>)}
            </ul>
        </section>
    )
}
