'use client'
import React, { useEffect, useState } from 'react'
import { getCourseData, dataofdays } from '../api'
import Image from 'next/image'



export const Bannerl = ({ courseslist }) => {

    const [days, setdays] = useState([])
    useEffect(() => {
        datadays()
    }, [])

    const datadays = () => {
        dataofdays().then(resp => {
            console.log(resp)
            setdays(resp.testos)
        })
    }
    return (
        <div>

            <div className=' bg-white rounded-2xl w-4/5 m-auto'>

                <h3 className=' text-black'></h3>

                {days.map((item, index) => (
                    <li key={index} className=' text-black font-rakkas text-5xl m-4 p-3'>{item.sectionname}</li>
                ))}

            </div>





        </div>
    )
}
