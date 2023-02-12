import React from 'react'
import Item from './Item';
import { Slide } from "react-awesome-reveal";

const Items = () => {
    return (
        <div className='px-6  sm:px-10 lg:px-[100px] my-4 w-full '>
            <h1 className='my-3 font-bold text-xl'>Explore Trader Joe</h1>
            <div className='grid text-center grid-cols-2 md:grid-cols-3 '>
            <Slide direction='left'>
                <Item img='/firstimage.webp' title='Trade' link='Trade' color='green-200' border='green-500' />
                <Item img='/secondimage.webp' title='Trade' color='indigo-200' border='blue-600' />
                <Item img='/thirdimage.webp' title='Trade' color='orange-200' border='orange-600' />
                </Slide>
                <Slide direction='right'>

                <Item img='/fourthimage.webp' title='Trade' color='pink-200' border='pink-600' />
                <Item img='/fifthimage.webp' title='Trade' color='cyan-200' border='cyan-600' />
                <Item img='/sixthimage.webp' title='Trade' color='purple-200' border='purple-600' />
                </Slide>
            </div>

        </div>
    )
}

export default Items;