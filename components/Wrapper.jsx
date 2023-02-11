import React, { useState }  from 'react'
import Footer from './Footer';
import Navbar from './Navbar';

const Wrapper = ({children}) => {
  const [darkMode,setDarkMode]=useState(false);
  const handleClick = ()=>{
    setDarkMode((prevvalue)=> !prevvalue )
  }
  
  return (
    <div className='flex flex-col'>
     <Navbar isdark={darkMode} click={handleClick} />
     <main className={`mt-[3rem] ${darkMode ? 'bg-[#181823] text-white' : 'bg-[#F3EEEA]'} `}>
        {children}
     </main>
     <Footer isdark={darkMode} />
    </div>
  )
}



export default Wrapper;