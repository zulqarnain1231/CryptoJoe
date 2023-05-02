import Image from 'next/image'
import Link from 'next/link'
import React ,{useContext} from 'react'
import ThemeContext from './ThemeContext'
const Item = ({title,img,color,border,link,darkColor}) => {
    const context=useContext(ThemeContext);
const {darkMode,setDarkMode}=context;

  return (
    <Link href={`/${link}`} >
    <div className={`flex flex-col items-center  my-4 rounded-3xl text-center   ${border} ${darkMode? darkColor:`${color} border`}  hover:border px-8 pt-8 pb-10 group   lg:h-[17rem] lg:w-[17rem] sm:h-56 sm:w-56 h-[10rem] w-[10rem] col-span-1 relative cursor-pointer `}>
        <div className='w-[200px] h-[200px] relative'>
        <Image className=' group-hover:scale-110 duration-200' src={img}  fill />
        </div>
       
   
   <h1 className=' font-semibold absolute lg:left-[7rem] left-[4rem] sm:left-[5rem] bottom-1 group-hover:scale-100'>{title}</h1>
    </div>
    </Link>
  )
}

export default Item