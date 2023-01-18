import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import Header from './header/Header'
import Seccion1 from './seccion1/Seccion1'
import Seccion2 from './seccion2/Seccion2'
import Seccion3 from './seccion3/Seccion3'
import Seccion4 from './seccion4/Seccion4'
import Seccion5 from './seccion5/Seccion5'
import Seccion6 from './seccion6/Seccion6'
import Seccion7 from './seccion7/Seccion7'

export default function App() {

    const { scrollYProgress } = useScroll()

    const [page,setPage] = useState('inicio')

    const [s1OutView,setS1OutView] = useState()
    useEffect(()=>{console.log(s1OutView)},[s1OutView])

    return (
        <>
            <Header setPage={setPage} />
            <div className='w-full h-20'></div>
            <Seccion1 s1OutView={s1OutView}/>
            <Seccion2 setS1OutView={setS1OutView}/>
            <Seccion3/>
            <Seccion4 scrollProgress={scrollYProgress}/>
            <Seccion5/>
            <Seccion6/>
            <Seccion7/>
        </>
    )
}