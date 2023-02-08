import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Item = ({title,img,color,border,link}) => {
    
  return (
    <Link href={`/${link}`} >
    <div className={`my-4 rounded-2xl text-center hover:border-[${border}] border hover:border px-8 pt-8 pb-10 group bg-[${color}]  lg:h-60 lg:w-60 sm:h-56 sm:w-56 h-40 w-40 col-span-1 relative cursor-pointer `}>
        <div>
        <Image className='h-full w-full group-hover:scale-110 duration-200' src={img} height='500' width='500' />
        </div>
       
   
   <h1 className=' font-semibold absolute sm:left-16 left-6 bottom-1 group-hover:scale-100'>{title}</h1>
    </div>
    </Link>
  )
}

export default Item