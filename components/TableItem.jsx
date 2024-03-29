import Image from 'next/image'
import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
const TableItem = ({ rank, title, logo, volume, change24h, change7d, price }) => {

  const context = useContext(ThemeContext);
  const { darkMode, setDarkMode } = context;


  return (
    <div className={`w-full min-w-[600px] grid  grid-cols-[.5fr,1fr,1fr,1fr,1fr,1fr]  ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-200 '}  cursor-pointer rounded-lg  p-4`}>
      <p className=''>{rank}</p>
      <div className=' flex items-center gap-4 sm:gap-[2rem] md:gap-16 lg:gap-20'>

        <div className='flex items-center gap-2'>
          <Image className='h-6 w-6' src={logo} height='500' width='500' />
          <p className='font-bold uppercase'>{title}</p>
        </div>
      </div>
      <p className=' w-full font-bold flex items-center'>${volume.toLocaleString()}</p>
      <p className=' w-full font-bold  '>${price.toLocaleString()}</p>
      <p className={`${change24h < 0 ? 'text-red-500' : 'text-green-600'} w-full  font-bold flex items-center`}>{change24h}%</p>
      <p className={`${change7d < 0 ? 'text-red-500' : 'text-green-600'} w-full  font-bold flex items-center`}>{change7d}%</p>
    </div>
  )
}

export default TableItem