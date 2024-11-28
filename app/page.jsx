'use client'

import Image from "next/image";

import { useEffect, useState } from "react";
import { getCourseData } from "./api";
import { Bannerl } from "./components/Bannerl";

export default function Home() {

  const [courseslist, setCourseList] = useState([])

  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = () => {
    getCourseData().then(response => {
      console.log(response)
      setCourseList(response.courseLists)
    })
  }

  const banner = courseslist[0]?.banner.url

  

  return (
    <div>

      <h2 className=" text-rose font-arabicUI">كورسات </h2>
      <Bannerl courseslist={courseslist}></Bannerl>
      <h4 className=" text-white text-5xl bg-red-500 rounded-2xl flex justify-center m-auto">
        {courseslist[0]?.name}</h4>
      <h4 className=" text-white text-5xl font-semibold p-3 outline-dashed outline-4 outline-slate-500 outline-offset-4 bg-slate-500 rounded-2xl flex justify-center m-auto">
        {courseslist[0]?.description}</h4>
    </div>
  );
}
