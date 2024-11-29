'use client'

import { VscGithubInverted } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { getCourseData } from "./api";
import { Bannerl } from "./components/Bannerl";
import { AuroraBackgroundDemo } from "./components/Shit"
import AButton from "./components/AButton";

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

 

  return (
    <div className="selection:bg-black selection:text-white">

      <div className=" m-5 flex gap-4 mr-0 ">
        <AButton title="بيانات السكشن" icon={<VscGithubInverted className=' ml-4' />
        }></AButton>
        <AButton title="بيانات الدكاترة" icon={<VscAccount className=' ml-4' />}></AButton>

      </div>


      <Bannerl courseslist={courseslist}></Bannerl>
      <h4 className=" text-white text-5xl bg-red-500 rounded-2xl flex justify-center m-auto">
        {courseslist[0]?.name}</h4>
      <h4 className=" text-white text-5xl font-semibold p-3 outline-dashed outline-4 outline-slate-500 outline-offset-4 bg-slate-500 rounded-2xl flex justify-center m-auto">
        {courseslist[0]?.description}</h4>


      


      

    </div>
  );
}
