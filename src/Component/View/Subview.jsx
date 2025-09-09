import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { CgKey } from 'react-icons/cg';

export default function Subview({ data }) {
    const { _id, price, name, quantity, photo } = data

    const heldeldete = _id => {
        console.log(_id, "this is a deletet id")
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {


            fetch(`http://localhost:5000/returncoffee/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    }
                })


        });
    }
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={data.photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                        Quantity: {data.quantity}</span>
                    <h2 className="text-xl font-semibold tracking-wide">Name: {data.name}</h2>
                </div>
                <p className="dark:text-gray-800">Price: {data.price}</p>
                <div className='flex gap-5'>
                    <button onClick={() => heldeldete(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"><RiDeleteBin5Line ></RiDeleteBin5Line ></button>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"><FaRegEdit ></FaRegEdit ></button>
                </div>
            </div>
        </div>
    )
}
