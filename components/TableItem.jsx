import Image from 'next/image'
import React ,{useContext} from 'react'
import ThemeContext from './ThemeContext'
const TableItem = ({rank,title,logo,volume,change24h,change7d,price}) => {
 
  const context=useContext(ThemeContext);
 const {darkMode,setDarkMode}=context;

 
  return (
    <div className={`grid  justify-center text-center sm:gap-0 md:grid-cols-6 grid-cols-2 ${darkMode? 'hover:bg-slate-800' : 'hover:bg-slate-200 '}  cursor-pointer rounded-lg  p-4`}>
      
      <div className='md:col-span-2 flex gap-4 sm:gap-[2rem] md:gap-16 lg:gap-20'>
      <p className='col-span-1'>{rank}</p>
        <div className='flex gap-2'>
      <Image className='h-6 w-6' src={logo} height='500' width='500' />
      <p className='font-bold uppercase'>{title}</p>
        </div>
      </div>
       <p className='font-bold hidden md:flex'>${volume.toLocaleString()}</p>
     <p className='font-bold '>${price.toLocaleString()}</p>
     <p className={`${change24h<0? 'text-red-500':'text-green-600'} font-bold hidden md:flex`}>{change24h}%</p>
     <p className={`${change7d<0? 'text-red-500':'text-green-600'} font-bold hidden md:flex`}>{change7d}%</p>
    </div>
  )
}

export default TableItem