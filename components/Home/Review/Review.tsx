import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Review = () => {
    return (
        <div className='pt-16 pb-16 bg-[#0f0715]'>
            <SectionHeading>Clients Reviews</SectionHeading>
            <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
                <Slider />
            </div>
        </div>
    )
}

export default Review
