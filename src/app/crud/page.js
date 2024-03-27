"use client"

import useFetch from '@/CustomHooks/useFetch';
import React, { useState } from 'react'

export default function page() {

    const [show, setShow] = useState(false);

    return (
        <div className='p-4'>
            <div className='flex items-center justify-center w-full'>
                <button className="btn btn-outline btn-success" onClick={() => setShow(!show)}>{!show ? "Show add": "Hide add"}</button>
            </div>
            <div className='flex'>
                <Left show={show} />
                {show && <div className="divider divider-horizontal"></div>}
                {show && <Right />}
            </div>
        </div>
    )
}

function Left({ show }) {
    const [apiData, pending] = useFetch("https://jsonplaceholder.typicode.com/posts")
    console.log("ApiData = ", apiData, "Pending = ", pending);

    return (
        <div className={show ? "w-3/4" : "w-full"}>
            {!pending && <div className='p-4'>
                <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    {
                        apiData.slice(0,20).map((element) => {
                            return (
                                <>
                                    <div className="shadow-xl card bg-base-100">
                                        <div className="card-body">
                                            <h2 className="card-title">{element.title.split(" ")[0]}</h2>
                                            <p>If a dog chews shoes whose shoes does he choose?</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>}
        </div>
    )
}

function Right() {
    return (
        <div className='flex flex-col gap-3'>
            <h1>Add User</h1>
            <input type="text" placeholder="User title" className="w-full max-w-xs input input-bordered" />
            <input type="text" placeholder="body" className="w-full max-w-xs input input-bordered" />
            <input type="number" placeholder="User id" className="w-full max-w-xs input input-bordered" />
        </div>
    )
}

