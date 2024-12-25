import SectionHeading from '@/components/Helper/SectionHeading'
import { servicesData } from '@/Data/data'
import React from 'react'
import ServiceCard from './ServiceCard'
import { IService } from '@/interfaces/props/IService'

const Service = () => {
    return (
        <div className='pt-16 pb-16 bg-[#0f0715]'>
            <SectionHeading>Services</SectionHeading>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
                {servicesData.map((service: IService) => {
                    return <div key={service.id}>
                        <ServiceCard service={service} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Service
