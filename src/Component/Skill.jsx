import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3, FaReact, FaJava, FaPython } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiMysql, SiFlask } from "react-icons/si";

const Skill = () => {
    return (
        <>
            <div className='bg-[#363636] mix-blend-normal shadow-md hover:shadow-cyan-300 ' id='skill'>
                <div className='flex flex-col justify-center mb-2'>
                    <p className='items-start mx-3 mb-2 font-mono font-normal text-4xl mt-10'>Skills</p>
                </div>


                <p className='ml-10 mb-2 font-mono font-normal text-2xl mt-10'>Programming Languages: </p>

                <div className='flex flex-row justify-center gap-16 mt-8 mb-10'>
                    <div className='flex flex-col mt-5 rounded h-48 w-48 justify-center items-center shadow-xl hover:shadow-orange-600 mb-10'>
                        <FaHtml5 className='mx-3 text-5xl text-orange-600' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Html 5</h2>
                    </div>
                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-blue-500'>
                        <FaCss3 className='mx-3 text-5xl text-blue-500' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Css</h2>
                    </div>

                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-orange-600'>
                        <FaJava className='mx-3 text-5xl text-orange-600' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Java</h2>
                    </div>
                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-yellow-400'>
                        <FaPython className='mx-3 text-5xl text-yellow-400' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Python</h2>
                    </div>
                </div>

                <p className='ml-10 mb-2 font-mono font-normal text-2xl mt-10'>Framworks And Librarys: </p>
                <div className='flex flex-row justify-center gap-16 mt-16 mb-10'>
                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-green-600 mb-10'>
                        <SiSpring className='mx-3 text-5xl text-green-600' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Spring Boot</h2>
                    </div>
                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-gray-700'>
                        <SiFlask className='mx-3 text-5xl text-gray-700' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>Flask</h2>
                    </div>
                    <div className='flex flex-col mt-5  h-48 w-48 justify-center items-center shadow-xl hover:shadow-blue-600'>
                        <FaReact className='mx-3 text-5xl text-blue-600' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>React Js</h2>
                    </div>
                </div>

                <p className='ml-20 mb-2 font-mono font-normal text-2xl mt-10'>Database: </p>
                <div className='flex flex-row justify-center mb-40'>
                    <div className='flex flex-col mt-5 mb-10 h-48 w-48 justify-center items-center shadow-xl hover:shadow-blue-600'>
                        <SiMysql className='text-5xl text-blue-600' />
                        <h2 className='mt-5 font-mono text-2xl text-white'>MySql</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill
