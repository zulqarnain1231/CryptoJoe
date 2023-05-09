import React from 'react'
import TableItem from './TableItem';

const Table = ({ data }) => {
    return (
        <>
            <div className='flex flex-col px-6  sm:px-10  lg:px-[80px] my-12 w-full'>
                <h1 className='font-bold text-2xl my-5'>Top Traded</h1>
                <div className='w-full overflow-auto HideScroll'>
                    <div className='w-full overflow-auto HideScroll'>
                        <div className='grid  h-[40px]  grid-cols-[.5fr,1fr,1fr,1fr,1fr,1fr] px-4 min-w-[600px] w-full overflow-auto'>
                            <p className=' flex items-center font-semibold text-indigo-500 '>#</p>
                            <p className=' flex items-center font-semibold text-indigo-500 '>TOKEN</p>
                            <p className=' flex items-center font-semibold text-indigo-500 '>VOLUME</p>
                            <p className=' flex items-center   font-semibold text-indigo-500 '>PRICE</p>
                            <p className=' flex items-center font-semibold text-indigo-500 '>CHANGE(24H)</p>
                            <p className=' flex items-center font-semibold text-indigo-500 '>CHANGE(7D)</p>
                        </div>
                    </div>
                </div>

                <div className='w-full overflow-auto ThinScrollbar'>
                    <div className='w-full min-w-[600px] h-[500px] flex flex-col overflow-auto '>
                        {
                            data.map((item, index) => {
                                return (
                                    <TableItem
                                        key={index}
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
                </div>


            </div>
        </>
    )
}

export default Table;