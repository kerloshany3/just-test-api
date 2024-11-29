'use client'
import React, { useEffect, useState } from 'react'
import { getCourseData, dataofdays } from '../api'




export const Bannerl = ({ courseslist }) => {
    const [numberofsection, setnumberofsection] = useState('')
    const [mono, setmono] = useState(null)
  
    

    function handleclick(e) {
        e.preventDefault()
        setmono(numberofsection)
    }



    
    


    console.log(numberofsection)

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
    const sectionsfitlered = days.filter((item) => (item.numberofsection === parseInt(mono)))
    return (
        <div>
            <div className=' bg-white rounded-2xl w-2/5 mb-5 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3 border-4 border-white rounded-t-xl'>سكاشن يوم السبت</h3>

                {sectionsfitlered.map((item, index) => (
                    item.numofweek === 1 && (
                        <ul key={index} className=' m-auto flex justify-center'>
                            <li className=' drop-shadow-2xl dr text-black font-rakkas text-7xl m-4 p-2 '>{item.sectionname}</li>

                        </ul>
                    )
                ))}
            </div>
            <div className=' bg-white rounded-2xl w-2/5 mb-6 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3  border-4 border-white rounded-t-xl'>سكاشن يوم الاحد</h3>
                {sectionsfitlered.map((item, index) => (
                    item.numofweek === 2 && (
                        <ul key={index} className=' m-auto flex justify-center'>
                            <li className=' drop-shadow-2xl dr text-black font-rakkas text-7xl m-4 p-2 '>{item.sectionname}</li>

                        </ul>
                    )))}
            </div>
            <div className=' bg-white rounded-2xl w-2/5 mb-6 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3  border-4 border-white rounded-t-xl'>سكاشن يوم الاتنين</h3>
                {(sectionsfitlered.map((item, index) => (
                    item.isimo ? (<h2 key={index} className=' text-5xl font-rakkas text-black  m-auto flex justify-center'>لا مفيش سكاشن</h2>) :
                        item.numofweek === 3 && (
                            <ul key={index} className=' m-auto flex justify-center'>
                                <li className=' drop-shadow-2xl dr text-black font-rakkas text-7xl m-4 p-2 '>{item.sectionname}</li>
                            </ul>
                        ))))}


            </div>
            <div className=' bg-white rounded-2xl w-2/5 mb-6 m-auto'>
                <h3 className=' text-white font-rakkas text-5xl bg-red-500 m-auto flex justify-center p-3  border-4 border-white rounded-t-xl'>سكاشن يوم التلات</h3>
                {(sectionsfitlered.map((item, index) => (
                        item.numofweek === 4 && (
                            <ul key={index} className=' m-auto flex justify-center'>
                                <li className=' drop-shadow-2xl dr text-black font-rakkas text-7xl m-4 p-2 '>{item.sectionname}</li>
                            </ul>
                        ))))}


            </div>

            <div className='  bg-white rounded-2xl w-1/3 mb-6 m-auto'>
                <h3 className=' text-white p-6  font-rakkas text-5xl bg-red-500 flex justify-center  border-4 border-white rounded-xl'>  ادخل رقم السكشن</h3>

                <form action="submit">
                    <input value={numberofsection} onChange={(e) => setnumberofsection(e.target.value)} type="number" className=' w-1/4 items-center self-center content-center place-self-center place-content-center p-2 text-red-500 font-rakkas m-3 rounded-xl  bg-gray-300 text-6xl' />
                    <button onClick={handleclick} className=' bg-red-500 font-extrabold text-white p-4 text-5xl rounded-xl shadow-red-500/50 shadow-xl'> Send Data</button>
                </form>
               
                

            </div>
        </div>
    )
}
