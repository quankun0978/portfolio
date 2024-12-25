'use client';
import { IServiceCardProps } from '@/interfaces/props/IService'
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-parallax-tilt';
const ServiceCard = (Props: IServiceCardProps) => {
    const { service } = Props
    return (
        <Tilt className='shadow-2xl p-6 rounded-lg bg-[#814cec]'>
            <Image src={`${service.icon}`} alt={service.title} width={50} height={50} />
            <h1 className='mt-4 text-lg font-bold text-gray-100'>{service.title}</h1>
            <p className='mt-3 text-sm text-white text-opacity-80'>{service.description}</p>
        </Tilt>
    )
}

export default ServiceCard
