import React from 'react'
import Item from './Item';
import { Slide } from "react-awesome-reveal";

const Items = () => {
    return (
        <div className='px-6  sm:px-10 lg:px-[100px] my-8 w-full '>
            <h1 className='my-3 font-bold text-xl'>Explore Trader Joe</h1>
            <div className='grid text-center grid-cols-2 md:grid-cols-3 '>
            <Slide direction='left'>
                <Item img='/firstimage.webp' title='Trade' link='Trade' darkColor='green-400' color='green-200' border='green-500' />
                <Item img='/secondimage.webp' title='Trade' darkColor='indigo-400' color='indigo-200' border='blue-600' />
                <Item img='/thirdimage.webp' title='Trade' darkColor='orange-400' color='orange-200' border='orange-600' />
                </Slide>
                <Slide direction='right'>

                <Item img='/fourthimage.webp' title='Trade' darkColor='pink-400' color='pink-200' border='pink-600' />
                <Item img='/fifthimage.webp' title='Trade' darkColor='cyan-400' color='cyan-200' border='cyan-600' />
                <Item img='/sixthimage.webp' title='Trade' darkColor='purple-400' color='purple-200' border='purple-600' />
                </Slide>
            </div>

        </div>
    )
}

export default Items;