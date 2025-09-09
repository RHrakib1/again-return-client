import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function View() {
    const loaddata = useLoaderData()
    return (
        <div>
            <h1>view is the best option on the world {loaddata.length} Data only</h1>
        </div>
    )
}
