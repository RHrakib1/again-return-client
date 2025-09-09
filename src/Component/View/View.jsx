import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Subview from './Subview';



export default function View() {
    const loaddata = useLoaderData()
    return (
        <div>
            <h1>view is the best option on the world {loaddata.length} Data only</h1>
            <div className='grid grid-cols-4 gap-5 max-w-[1100px] mx-auto'>
                {
                    loaddata.map(data => <Subview data={data}></Subview>)
                }
            </div>
        </div>
    )
}
