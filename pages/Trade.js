import React from 'react'

const Trade = () => {
  return (
    <div className='w-full my-28 md:px-16 gap-4 md:gap-0 grid md:grid-cols-2 grid-cols-1'> 
    
    <div className='col-span-1 pt-10 px-6 pb-6 w-full text-center'>
        <p className='font-bold'>No Currencies selected</p>
    </div>
    
    <div className='col-span-1 p-6 flex flex-col  w-full bg-white rounded-3xl'>

   <div className='w-full justify-between flex '>
     <div className='flex flex-col gap-2'>
       <p className='font-semibold'>Swap</p>
        <input type='number' value='0.0' />
     </div>
     <select>
      <option>one</option>
     </select>
   </div>
   <div className='w-full border-b-2 my-6'></div>
   <div className='w-full justify-between flex '>
     <div className='flex flex-col gap-2'>
       <p className='font-semibold'>To</p>
        <input type='number' value='0.0' />
     </div>
     <select>
      <option>one</option>
     </select>
   </div>
    <button className='w-full mb-3 mt-6 bg-indigo-400 hover:bg-indigo-500  font-semibold text-white rounded-2xl p-3'>Connect Wallet</button>
    </div>
    </div>
  )
}

export default Trade