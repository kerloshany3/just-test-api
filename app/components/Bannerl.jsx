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
            setdays(resp.dataOfWeek)
        })
    }
    return (
        <div>


            <img src={courseslist[0]?.banner.url || null} width={100} height={200} alt='56' />

            {days.map((item, index) => (
                <li key={index}>{item.nameOfTheDay}</li>
            ))} 


        </div>
    )
}
