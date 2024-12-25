import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Service from './Service/Service'
import Project from './Project/Project'
import Skill from './Skill/Skill'
import Review from './Review/Review'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <About />
            <Service />
            <Project />
            <Skill />
            <Review />
        </div>
    )
}

export default Home
