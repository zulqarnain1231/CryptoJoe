import React from 'react'
import mainImage from '../public/herosectionimg.webp'
import Image from 'next/image'
const Herosection = () => {
  return (
    <div className='flex flex-col gap-4 text-center px-5 py-4 my-3 '>
      <div className=' w-full items-center'>
        <Image className='object-cover h-full mx-auto w-[80%] md:w-[60%]' src={mainImage} alt='heroimg' />

      </div>
      <div className='my-12'>
        <h1 className='font-bold text-3xl md:text-4xl'>One-stop decentralized trading</h1>
      </div>
    </div>
  )
}

export default Herosection