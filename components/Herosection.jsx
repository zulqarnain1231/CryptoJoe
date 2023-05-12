import React from 'react'
import mainImage from '../public/herosectionimg.webp'
import Image from 'next/image'
const Herosection = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center text-center px-5 py-4 my-3 '>
      <div className=' w-[80%] sm:h-[350px] h-[250px] relative'>
        <Image className='bg-cover' src={mainImage} alt='heroimg' fill />

      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-bold text-2xl  sm:text-3xl md:text-4xl'>One-stop decentralized trading</h1>
      </div>
    </div>
  )
}

export default Herosection