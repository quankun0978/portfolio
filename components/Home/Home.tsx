"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Service from './Service/Service'
import Project from './Project/Project'
import Skill from './Skill/Skill'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos")
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            })
        }
        initAOS()
    }, [])

    return (
        <div className='overflow-hidden'>
            <Hero />
            <About />
            <Service />
            <Project />
            <Skill />
            <Review />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home
