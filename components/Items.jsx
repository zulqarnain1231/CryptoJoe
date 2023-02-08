import React from 'react'
import Item from './Item';
import { Slide } from "react-awesome-reveal";

const Items = () => {
    return (
        <div className=' md:px-[140px] my-4 w-full '>
            <h1 className='my-3 font-bold text-xl'>Explore Trader Joe</h1>
            <div className='grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            <Slide direction='left'>
                <Item img='/firstimage.webp' title='Trade Tokens' link='Trade' color='#D0E8D0' border='#6CCD72' />
                <Item img='/secondimage.webp' title='Provide Liquidity' color='#CFEEF8' border='#71B7CF' />
                <Item img='/thirdimage.webp' title='Provide Liquidity' color='#F8EBC8' border='#A58C4E' />
                </Slide>
                <Slide direction='right'>

                <Item img='/fourthimage.webp' title='Provide Liquidity' color='#F7DFE5' border='#74434F' />
                <Item img='/fifthimage.webp' title='Provide Liquidity' color='#ECECFE' border='#9595B2' />
                <Item img='/sixthimage.webp' title='Provide Liquidity' color='#CECDFB' border='#4D4BB8' />
                </Slide>
            </div>

        </div>
    )
}

export default Items;