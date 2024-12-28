import { IBlogCardProps } from '@/interfaces/props/IBlog'
import Image from 'next/image'
import React from 'react'

const BlogCard = (Props: IBlogCardProps) => {
    const { blog } = Props
    return (
        <div className='bg-indigo-900 rounded-md overflow-hidden'>
            <Image src={blog.image} alt={blog.title} width={300} height={300} className='w-full h-[250px] object-cover' />
            <div className='p-6'>
                <p className='rounded-sm px-6 py-1.5 bg-rose-500 text-white w-fit'>
                    News
                </p>
                <h1 className='sm:text-lg text-base cursor-pointer hover:text-gray-100 hover:underline transition-all duration-200 mt-6 mb-2 text-gray-200 leading-[1.6rem] font-bold'>
                    {blog.title}
                </h1>
                <p className='text-sm font-semibold opacity-70 text-gray-400'>
                    {blog.summary}
                </p>
                <div className='mt-4 mb-4 w-full h-[1.5px] bg-gray-400 opacity-45'></div>
                <div className='flex items-center justify-between'>
                    <h1 className='texta-sm text-gray-300 font-bold '>
                        {blog.date}
                    </h1>
                    <button className='text-base hover:text-rose-500 text-gray-200 underline font-bold'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
