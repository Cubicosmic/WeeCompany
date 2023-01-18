import React from 'react'
import { motion } from 'framer-motion'
import imgGoogleplay from '../assets/s4-googleplay.png'
import imgAppstore from '../assets/s4-appstore.png'
import imgCel from '../assets/s6-cel.png'
import imgBotiquin from '../assets/s1-botiquin.png'
import imgLupa from '../assets/s1-lupa.png'
import imgCorazon from '../assets/s1-corazon.png'
import imgS1a from '../assets/s1-a.png'
import imgS1b from '../assets/s1-b.png'
import imgS1c from '../assets/s1-c.png'
import imgS1d from '../assets/s1-d.png'

export default function Seccion1({ s1OutView }) {
    return (
        <section className='w-full flex flex-wrap relative'>
            <div className={s1OutView ? 'absolute bottom-0 w-full h-100vh S5 -z-10':'fixed bottom-0 w-full h-100vh S5 -z-10'}></div>
            <div className='w-full md:w-1/2 h-auto md:h-400vh relative'>
                <div className={s1OutView ? 'w-full h-150vh md:h-100vh S1 relative md:absolute md:bottom-0 flex-wrap':'w-full md:w-1/2 h-150vh md:h-100vh md:fixed md:top-0 flex-wrap'}>
                    <div className='w-full h-90vh flex justify-center items-center flex-wrap pb-14 pt-14 md:pt-32'>
                        <h1 className='text-3xl md:text-4xl font-bold w-full px-10 text-white text-center'>Tu aplicación de<br></br><b className='text-bluewee-50 font-black'>salud inteligente</b></h1>
                        <h1 className='text-base md:text-xl font-black w-full px-10 md:px-16 md:py-6 text-white text-center my-4 md:my-0'>Monitorea tu salud de forma digital ¡y encuentra los mejores servicios médicos!</h1>
                        <div className='w-full flex flex-wrap justify-center md:py-6'>
                            <img src={imgGoogleplay} alt='no found' className='w-32 h-12 bg-white rounded-lg p-1 shadow-md mx-4'/>
                            <img src={imgAppstore} alt='no found' className='w-32 h-12 bg-white rounded-lg p-1 shadow-md mx-4'/>
                        </div>
                        <ul className='w-full flex flex-wrap justify-around mt-8 md:mt-0 px-10'>
                            <li className='flex items-center mx-4'><img src={imgBotiquin} alt='no found' className='w-20 md:w-24'/><h1 className='text-white text-2xl'>Localiza</h1></li>
                            <li className='flex items-center mx-4'><img src={imgBotiquin} alt='no found' className='w-20 md:w-24'/><h1 className='text-white text-2xl'>Localiza</h1></li>
                            <li className='flex items-center mx-4'><img src={imgBotiquin} alt='no found' className='w-20 md:w-24'/><h1 className='text-white text-2xl'>Localiza</h1></li>
                        </ul>
                    </div>
                    <div className='w-full h-50 md:h-90vh flex md:hidden'>
                        <img src={imgS1a} alt='no found' className='h-full'/>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-auto md:h-400vh'>
                <div className='w-full h-60 md:h-90vh hidden md:flex'>
                    <img src={imgS1a} alt='no found' className='h-full'/>
                </div>
                <div className='w-full h-auto md:h-100vh flex bg-bluewee-50 items-center relative'>
                    <div className='w-1/2 text-white px-8'>
                        <b className='text-3xl'>Localiza</b>
                        <p className='text-lg'>Conecta con los mejores médicos, farmacias, laboratorios y aseguradoras.</p>
                    </div>
                    <img src={imgS1b} alt='no found' className='absolute h-full right-0'/>
                </div>
                <div className='w-full h-auto md:h-100vh flex bg-pinkwee-200 items-center relative'>
                    <div className='w-1/2 absolute right-0 top-1/5 text-white px-8'>
                        <b className='text-3xl'>Monitorea</b>
                        <p className='text-lg'>Tu historial clínico, receta digital y estudios de laboratorio, ¡contigo a donde vayas!</p>
                    </div>
                    <img src={imgS1c} alt='no found' className='absolute h-full'/>
                </div>
                <div className='w-full h-auto md:h-110vh flex bg-greenwee-200 items-center relative'>
                    <div className='w-3/5 absolute left-10 bottom-8 text-white px-8'>
                        <b className='text-3xl'>Monitorea</b>
                        <p className='text-lg'>Tu historial clínico, receta digital y estudios de laboratorio, ¡contigo a donde vayas!</p>
                    </div>
                    <img src={imgS1d} alt='no found' className='absolute right-0 h-100vh'/>
                </div>
            </div>
        </section>
    )
}
