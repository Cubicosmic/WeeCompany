import React from 'react'
import imgCandado from '../assets/s7-candado.png'
import imgCel from '../assets/s7-cel.png'
import imgRompecabezas from '../assets/s7-rompecabezas.png'

export default function Seccion7() {
    return (
        <section className='w-full bg-whitewee-200 py-10 overflow-hidden'>
            <div className='w-full'>
                <h2 className='w-full text-center text-3xl md:text-5xl font-bold text-bluewee-500'>Ventajas</h2>
                <div className='w-full mt-8 overflow-x-scroll'>
                    <ul className='flex w-3full md:w-full text-white'>
                        <li style={{width: "33.33%"}} className='flex justify-center'>
                            <div className='w-60 h-68 bg-bluewee-500 rounded-3xl py-4 px-2'>
                                <h5 className='w-full text-base font-bold text-center p-2'>Colaboración</h5>
                                <img src={imgRompecabezas} alt='no found' className='w-full' />
                                <p className='w-full text-sm text-center p-2'>Médicos, laboratorios y farmacias conectados para ofrecerte mejores soluciones integrales.</p>
                            </div>
                        </li>
                        <li style={{width: "33.33%"}} className='flex justify-center'>
                            <div className='w-60 h-68 bg-bluewee-500 rounded-3xl py-4 px-2'>
                                <h5 className='w-full text-base font-bold text-center p-2'>Seguridad</h5>
                                <img src={imgCandado} alt='no found' className='w-full' />
                                <p className='w-full text-sm text-center p-2'>Tu información resguardada con los estándares más altos de seguridad y privacidad.</p>
                            </div>
                        </li>
                        <li style={{width: "33.33%"}} className='flex justify-center'>
                            <div className='w-60 h-68 bg-bluewee-500 rounded-3xl py-4 px-2'>
                                <h5 className='w-full text-base font-bold text-center p-2'>Portabilidad</h5>
                                <img src={imgCel} alt='no found' className='w-full' />
                                <p className='w-full text-sm text-center p-2'>Actualización automática constante de tus recetas médicas y estudios de laboratorio</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div></div>
        </section>
    )
}
