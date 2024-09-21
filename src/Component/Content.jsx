import React from 'react'
import { FaXTwitter, FaGithub } from "react-icons/fa6"
import { SiInstagram } from "react-icons/si";
import styles from './Content.module.css'
// import './Content.css'

const Content = () => {
  return (
    <>
      <div className='flex flex-row justify-center items-center mt-20 gap-40'>
        <div className={styles.img}></div>
        <div className='flex flex-col items-center'>
          <h2 className='mb-5 font-sans font-semibold text-3xl text-cyan-400 cursor-none'>Tanish Rastogi</h2>
          <p className='flex justify-center items-center text-center text-xl cursor-none type'>Full Stack Developer <br />Enthusiastic about Web Development. <br />curious to explore all dimension of computer science</p>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center -mt-14 ml-96 mb-52 gap-10'>
        <div className='flex flex-row items-center justify-center px-2 py-2 shadow-md hover:shadow-rose-400 ml-28'>
          <SiInstagram className='mx-3 text-5xl text-rose-400 cursor-pointer' />
          <p className='font-sans text-lg'>Instagram</p>
        </div>
        <div className='flex flex-row items-center justify-center px-2 py-2 shadow-md hover:shadow-cyan-500'>
          <FaXTwitter className='mx-3 text-5xl text-cyan-500 cursor-pointer' />
          <p>Twitter</p>
        </div>
        <div className='flex flex-row items-center justify-center px-2 py-2 shadow-md hover:shadow-gray-700'>
          <FaGithub className='mx-3 text-5xl text-gray-700 cursor-pointer' />
          <p>Twitter</p>
        </div>
      </div>
    </>
  )
}

export default Content