import React from 'react'
import TableItem from './TableItem';

const Table = ({ data }) => {
    return (
        <>
            <div className='flex flex-col px-6  sm:px-10  lg:px-[80px] my-12 w-full'>
                <h1 className='font-bold text-2xl my-5'>Top Traded</h1>
                <div className='grid gap-16 sm:gap-0 grid-cols-2 md:grid-cols-6 px-4 w-full'>
                    <div className='md:col-span-2  flex gap-4 sm:gap-[2rem] md:gap-16 lg:gap-20'>
                        <p className=' font-semibold text-indigo-500 '>#</p>
                        <p className=' font-semibold text-indigo-500 '>TOKEN</p>
                    </div>
                    <p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>VOLUME</p>
                    <p className='col-span-1  font-semibold text-indigo-500 '>PRICE</p>
                    <p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>CHANGE(24H)</p>
                    <p className='col-span-1 hidden md:flex font-semibold text-indigo-500 '>CHANGE(7D)</p>
                </div>

                {
                    data.map((item) => {
                        return (
                            <TableItem
                                rank={item.market_cap_rank}
                                title={item.symbol}
                                logo={item.image}
                                volume={item.total_volume}
                                price={item.current_price}
                                change24h={item.price_change_percentage_24h_in_currency.toString().slice(0, 4)}
                                change7d={item.price_change_percentage_7d_in_currency.toString().slice(0, 4)}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Table;