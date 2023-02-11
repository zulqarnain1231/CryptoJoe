import React from 'react'
import TableItem from './TableItem';

const Table = ({data}) => {
  return (
    <>
    {
        data.map((item)=>{
            return (
                <TableItem 
                rank={item.market_cap_rank} 
                title={item.name} 
                logo={item.image}
                volume={item.total_volume} 
                price={item.current_price}
                change24h={item.price_change_percentage_24h_in_currency} 
                change7d={item.price_change_percentage_7d_in_currency}
                />
            )
        })
    }
    </>
  )
}

export default Table;