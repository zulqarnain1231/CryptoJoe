import Image from 'next/image'
import React from 'react'

const TableItem = ({rank,title,logo,volume,change24h,change7d,price}) => {
  return (
    <div className='grid md:grid-cols-6 grid-cols-3  hover:bg-slate-200 cursor-pointer rounded-lg  p-4'>
      <p className='col-span-1'>{rank}</p>
      <div className='col-span-1 fkex gap-1'>
      {/* <Image src={logo} height='500' width='500' /> */}
      <p className='font-semibold'>{title}</p>
      </div>
       <p className='font-semibold'>${volume.toLocaleString()}</p>
     <p className='font-semibold hidden md:flex'>${price.toLocaleString()}</p>
     <p className={`${change24h<0? 'text-red-500':'text-green-600'} font-semibold hidden md:flex`}>{change24h}%</p>
     <p className={`${change7d<0? 'text-red-500':'text-green-600'} font-semibold hidden md:flex`}>{change7d}%</p>
    </div>
  )
}

export default TableItem