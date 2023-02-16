import Image from 'next/image'
import Link from 'next/link'
import React ,{useContext} from 'react'
import ThemeContext from './ThemeContext'
const Item = ({title,img,color,border,link,darkColor}) => {
    const context=useContext(ThemeContext);
const {darkMode,setDarkMode}=context;

  return (
    <Link href={`/${link}`} >
    <div className={`my-4 rounded-3xl text-center   ${border} ${darkMode? darkColor:`${color} border`}  hover:border px-8 pt-8 pb-10 group   lg:h-[17rem] lg:w-[17rem] sm:h-56 sm:w-56 h-[10rem] w-[10rem] col-span-1 relative cursor-pointer `}>
        <div>
        <Image className='h-full w-full group-hover:scale-110 duration-200' src={img} height='500' width='500' />
        </div>
       
   
   <h1 className=' font-semibold absolute lg:left-[7rem] left-[4rem] sm:left-[5rem] bottom-1 group-hover:scale-100'>{title}</h1>
    </div>
    </Link>
  )
}

export default Item