import React from 'react'


const AButton = ({title,icon}) => {
    return (
        <div>
            <button className="  relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className=" absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="hover:bg-white ease-in-out duration-300 hover:text-purple-900 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-xl font-rakkas text-fuchsia-200 backdrop-blur-3xl">
                    {title}
                    {icon}
                </span>
            </button>
        </div>
    )
}

export default AButton