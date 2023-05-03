import React from 'react'
import mainImage from '../public/herosectionimg.webp'
import Image from 'next/image'
const Herosection = () => {
  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center px-5 py-4 my-3 '>
      <div className=' w-[80%] h-[350px] relative'>
        <Image className='' src={mainImage} alt='heroimg' fill />

      </div>
      <div className='w-full flex items-center justify-center'>
        <h1 className='font-bold text-3xl md:text-4xl'>One-stop decentralized trading</h1>
      </div>
    </div>
  )
}

export default Herosection