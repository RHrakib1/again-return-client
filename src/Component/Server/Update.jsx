import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Update() {
    const loaderdata = useLoaderData()
    const { _id, price, name, quantity, photo, type1 } = loaderdata
    console.log(loaderdata, "this is a daata new")
    const hendleupdate = e => {
        e.preventDefault()
        const shortdata = e.target
        const name = shortdata.name.value
        const price = shortdata.price.value
        const quantity = shortdata.quantity.value
        const type1 = shortdata.type1.value
        const photo = shortdata.photo.value
        const objdata = { name, price, quantity, type1, photo }
        console.log(objdata)


        fetch(`http://localhost:5000/returncoffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(objdata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update your form ')
                }
                console.log(data)
            })
    }

    return (
        <div>
            <h1>
                Update Return Coffee : {name}
            </h1>

            <div>
                <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                    <form onSubmit={hendleupdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-200">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Please Share Yoiur Coffee Information</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">Name</label>
                                    <input name='name' defaultValue={name} id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 dark:border-gray-300" />
                                </div>

                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Price</label>
                                    <input defaultValue={price} name='price' id="price" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Quantity</label>
                                    <input defaultValue={quantity} name='quantity' id="address" type="text" placeholder="Quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Type</label>
                                    <input defaultValue={type1} name='type1' id="type" type="text" placeholder="Type1" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 dark:border-gray-300 " />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Photo</label>
                                    <input defaultValue={photo} name='photo' id="type" type="text" placeholder="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 dark:border-gray-300 " />
                                </div>
                                <button className='btn' type='submit'>Update</button>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </div>
    )
}
