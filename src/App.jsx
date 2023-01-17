import React, { useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
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
    const picu = useTransform(
        scrollYProgress,
        [0, 100],
        ["tranlateX(0%)","tranlateX(0%)"]
    )

    const [page,setPage] = useState('inicio')

    return (
        <>
            <Header setPage={setPage} />
            <div className='w-full h-20'></div>
            <Seccion1/>
            <Seccion2/>
            <Seccion3/>
            <Seccion4 scrollProgress={scrollYProgress}/>
            <Seccion5/>
            <Seccion6/>
            <Seccion7/>
        </>
    )
}