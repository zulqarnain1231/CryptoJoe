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
     <Navbar click={handleClick} />
     <main className='mt-[4rem] bg-[#F3EEEA]'>
        {children}
     </main>
     <Footer />
    </div>
  )
}

export default Wrapper;