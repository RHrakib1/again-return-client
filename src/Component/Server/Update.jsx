import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const loaderdata = useLoaderData()
    console.log(loaderdata, "this is a daata new")
    return (
        <div>
            <h1>
                Update Return Coffee {loaderdata.quantity}
            </h1>

            <p>{loaderdata.name}</p>
        </div>
    )
}
