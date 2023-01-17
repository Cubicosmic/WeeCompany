import React from 'react'
import imgGoogleplay from '../assets/s4-googleplay.png'
import imgAppstore from '../assets/s4-appstore.png'
import imgCel from '../assets/s6-cel.png'

export default function Seccion6() {
    return (
        <section className='w-full bg-bluewee-100 flex flex-wrap justify-center items-center py-14'>
            <div className='w-full md:w-1/2 pr-8 pl-8 md:pl-20 text-center md:text-left'>
                <h2 className='text-3xl md:text-5xl font-bold text-bluewee-500'>Ecosistema digital de salud</h2>
                <p className='mt-5'>Permite un mejor control de tu información clínica para acceder a servicios sanitarios de calidad</p>
                <div className='w-full flex flex-wrap justify-center'>
                    <img src={imgGoogleplay} alt='no found' className='w-40 h-14 bg-white rounded-lg p-1 shadow-md mx-10 mt-10'/>
                    <img src={imgAppstore} alt='no found' className='w-40 h-14 bg-white rounded-lg p-1 shadow-md mx-10 mt-10'/>
                </div>
            </div>
            <img src={imgCel} alt='no found' className='w-1/2 md:w-1/3 mt-10 md:mt-0' />
        </section>
    )
}
