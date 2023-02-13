import Image from 'next/image';
import React, {useContext} from 'react'
import logo from '../public/logo.webp'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMoon } from 'react-icons/bi'
import { BsFillSunFill } from 'react-icons/bs'
import { CiWallet } from 'react-icons/ci'
import solana from '../public/solana.png'
import ThemeContext from './ThemeContext';
import Link from 'next/link';
const Navbar = () => {
 const context =useContext(ThemeContext);
 const {darkMode,setDarkMode} =context ;

 const handleClick =()=>{
  setDarkMode((prevvalue)=> !prevvalue)
 }
 console.log(darkMode);
  return (<>
    <div className={`hidden lg:flex justify-between z-10 fixed w-full ${darkMode ? 'bg-[#181823]' : 'bg-[#F3EEEA] '}  p-2'`}>
      <Link href='/' >
        <div className='h-10 w-10 py-0'>
          <Image className='cursor-pointer hover:-rotate-6 duration-150 object-cover h-full w-full mt-2' src={logo} />

        </div>
      </Link>
      <div className='flex gap-6 py-1'>
      <Link href='/Trade' >
        <p className={`cursor-pointer p-3 rounded-lg ${darkMode? 'hover:bg-slate-800' : 'hover:bg-[#ECECFE]'}  text-[#9A8880] font-semibold text-lg`}>Trade</p>
        </Link>
        <p className={`cursor-pointer p-3 rounded-lg ${darkMode? 'hover:bg-slate-800' : 'hover:bg-[#ECECFE]'} text-[#9A8880] font-semibold text-lg `}>Pool</p>
        <p className={`cursor-pointer p-3 rounded-lg ${darkMode? 'hover:bg-slate-800' : 'hover:bg-[#ECECFE]'} text-[#9A8880] font-semibold text-lg `}>Stake</p>
        <p className={`cursor-pointer p-3 rounded-lg ${darkMode? 'hover:bg-slate-800' : 'hover:bg-[#ECECFE]'} text-[#9A8880] font-semibold text-lg `}>Farm</p>
      </div>
      <div className='w-[318px] relative'>
        <span className='absolute top-4 left-3 cursor-pointer'><AiOutlineSearch size={20} /></span>
        <input className={`${darkMode ? 'bg-slate-700 text-white ':'bg-white'} hover:border focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300  mt-1 py-2 px-10 rounded-full w-full`}  type="search" name="Search" id="Search" placeholder='Search by symbol or name' />
      </div>

      <div>
        {
          darkMode ?
            <button onClick={handleClick} className='p-2 mt-1 hover:bg-slate-600 text-white rounded-full bg-slate-700 '><BsFillSunFill size={20} /></button>
            :
            <button onClick={handleClick} className='p-2 mt-1 hover:bg-[#ECECFE] rounded-full bg-white '><BiMoon size={20} /></button>
        }
      </div>

      <div>
        <button className={`flex gap-1 mt-1 rounded-full ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white': 'bg-white hover:bg-[#ECECFE]'} py-2  px-4`}>
          <span className='font-bold mt-1'><CiWallet size={20} /></span>
          <p className='font-semibold'>Connect Wallet</p>
        </button>
      </div>
      {/* secondary navbar */}
    </div>
    <div className={`flex lg:hidden justify-between z-10 fixed w-full ${darkMode ? 'bg-[#181823]' : 'bg-[#F3EEEA]'}  p-2`}>
      <Link href='/' >
        <div className='h-10 w-10 py-0'>
          <Image className='cursor-pointer hover:-rotate-6 duration-150 object-cover h-full w-full mt-2' src={logo} />

        </div>
      </Link>

      <div className='flex gap-3'>

        <div>
          {
            darkMode ?
              <button onClick={handleClick} className='p-2 mt-1 hover:bg-slate-600 text-white rounded-full bg-slate-700 '><BsFillSunFill size={20} /></button>
              :
              <button onClick={handleClick} className='p-2 mt-1 hover:bg-[#ECECFE] rounded-full bg-white '><BiMoon size={20} /></button>
          }
        </div>

        <div>
          <button className={`flex gap-1 mt-1 rounded-full ${darkMode ? 'bg-slate-700 hover:bg-slate-600 text-white': 'bg-white hover:bg-[#ECECFE]'} py-2  px-4`}>
            <span className='font-bold mt-1'><CiWallet size={20} /></span>
            <p className='font-semibold'>Connect Wallet</p>
          </button>
        </div>
      </div>

    </div>

    <div className={`flex px-2 justify-between  lg:hidden w-full z-10 ${darkMode ? 'bg-[#2F3146]  border-t-slate-500' : 'bg-white border'} bottom-0 fixed   py-1`}>
      <p className={`cursor-pointer py-3 px-6 rounded-lg ${darkMode ? 'hover:bg-slate-800' :'hover:bg-[#ECECFE]'}   text-[#9A8880] font-semibold text-lg`}>Trade</p>
      <p className={`cursor-pointer py-3 px-6 rounded-lg ${darkMode ? 'hover:bg-slate-800' :'hover:bg-[#ECECFE]'}  text-[#9A8880] font-semibold text-lg `}>Pool</p>
      <p className={`cursor-pointer py-3 px-6 rounded-lg ${darkMode ? 'hover:bg-slate-800' :'hover:bg-[#ECECFE]'}  text-[#9A8880] font-semibold text-lg `}>Stake</p>
      <p className={`cursor-pointer py-3 px-6 rounded-lg ${darkMode ? 'hover:bg-slate-800' :'hover:bg-[#ECECFE]'}  text-[#9A8880] font-semibold text-lg `}>Farm</p>
    </div>

  </>
  )
}

export default Navbar;