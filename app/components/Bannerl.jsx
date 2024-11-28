'use client'
import React, { useEffect, useState } from 'react'
import { getCourseData, dataofdays } from '../api'
import Image from 'next/image'



export const Bannerl = ({ courseslist }) => {


    const raqamelsection = 10
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
    const sectionsfitlered = days.filter((item)=>(item.numberofsection === raqamelsection ))
    return (
        <div>
            <div className=' bg-white rounded-2xl w-4/5 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3 border-4 border-white rounded-t-xl'>سكاشن يوم السبت</h3>
                
                {sectionsfitlered.map((item, index) => (
                    item.numofweek === 1 && (
                        <li key={index} className=' text-black font-rakkas text-5xl m-4 p-6 '>{item.sectionname}</li>
                    )
                ))}
            </div>
            <div className=' bg-white rounded-2xl w-4/5 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3 border-4 border-white rounded-t-xl'>سكاشن يوم الاحد</h3>
                {sectionsfitlered.map((item, index) => (
                    item.numofweek === 2 && (
                        <li key={index} className=' text-black font-rakkas text-5xl m-4 p-6 '>{item.sectionname}</li>
                    )))}
            </div>
        </div>
    )
}
