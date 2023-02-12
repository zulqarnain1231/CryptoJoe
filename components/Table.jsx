import React from 'react'
import TableItem from './TableItem';

const Table = ({data}) => {
  return (
    <>
    <div className='flex flex-col px-6  sm:px-10 lg:px-[150px] my-12 w-full'>
<h1 className='font-bold text-2xl my-5'>Top Traded</h1>
<div className='grid grid-cols-3 md:grid-cols-6 px-4 '>
<p className='col-span-1 font-semibold text-indigo-500 '>#</p>
<p className='col-span-1 font-semibold text-indigo-500 '>TOKEN</p>
<p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>VOLUME</p>
<p className='col-span-1  font-semibold text-indigo-500 '>PRICE</p>
<p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>CHANGE(24H)</p>
<p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>CHANGE(7D)</p>
</div>
   
    {
        data.map((item)=>{
            return (
                <TableItem 
                rank={item.market_cap_rank} 
                title={item.name} 
                logo={item.image}
                volume={item.total_volume} 
                price={item.current_price}
                change24h={item.price_change_percentage_24h_in_currency.toString().slice(0,4)} 
                change7d={item.price_change_percentage_7d_in_currency.toString().slice(0,4)}
                />
            )
        })
    }
     </div>
    </>
  )
}

export default Table;