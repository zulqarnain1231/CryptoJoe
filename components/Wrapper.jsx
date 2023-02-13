import React, { useState }  from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import ThemeContext from './ThemeContext';
const Wrapper = ({children}) => {
  const [darkMode,setDarkMode]=useState(false);
  const handleClick = ()=>{
    setDarkMode((prevvalue)=> !prevvalue )
    
  }
  
  return (
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>

    <div className='flex flex-col'>
     <Navbar/>
     <main className={`mt-[3rem] ${darkMode ? 'bg-[#181823] text-white' : 'bg-[#F3EEEA]'} `}>
        {children}
     </main>
     <Footer isdark={darkMode} />
    </div>
    </ThemeContext.Provider>
  )
}



export default Wrapper;