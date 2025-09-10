import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Subview from './Subview';



export default function View() {
    const loaddata = useLoaderData()
    const [coffee,setcoffee]=useState(loaddata)
    return (
        <div>
            <h1>view is the best option on the world {coffee.length} Data only</h1>
            <div className='grid grid-cols-4 gap-5 max-w-[1100px] mx-auto'>
                {
                    coffee.map(data => <Subview data={data} coffee={coffee} setcoffee={setcoffee}></Subview>)
                }
            </div>
        </div>
    )
}
