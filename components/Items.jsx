import React from 'react'
import Item from './Item';
import { Slide } from "react-awesome-reveal";

const Items = () => {
    return (
        <div className='px-6  sm:px-10 lg:px-[100px] my-8 w-full '>
            <h1 className='my-3 font-bold text-xl'>Explore Trader Joe</h1>
            <div className='grid text-center grid-cols-2 md:grid-cols-3 '>
            <Slide direction='left'>
                <Item img='/firstimage.webp' title='Trade' link='Trade' darkColor='bg-green-800' color='bg-green-200' border='hover:border-green-500' />
                <Item img='/secondimage.webp' title='Trade' darkColor='bg-indigo-800' color='bg-indigo-200' border='hover:border-blue-600' />
                <Item img='/thirdimage.webp' title='Trade' darkColor='bg-orange-800' color='bg-orange-200' border='hover:border-orange-600' />
                </Slide>
                <Slide direction='right'>

                <Item img='/fourthimage.webp' title='Trade' darkColor='bg-pink-800' color='bg-pink-200' border='hover:border-pink-600' />
                <Item img='/fifthimage.webp' title='Trade' darkColor='bg-cyan-800' color='bg-cyan-200' border='hover:border-cyan-600' />
                <Item img='/sixthimage.webp' title='Trade' darkColor='bg-purple-800' color='bg-purple-200' border='hover:border-purple-600' />
                </Slide>
            </div>

        </div>
    )
}

export default Items;