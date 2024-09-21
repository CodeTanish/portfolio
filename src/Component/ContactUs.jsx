import React from 'react'
import { SiInstagram } from 'react-icons/si'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
const ContactUs = () => {
  return (
    <>
    <section id='contact Us' className='section'>
    <div>
        <p className='items-start mx-3 mb-2 font-mono font-normal text-4xl'>About Us</p>
      </div>
      <div className='flex justify-center mb-5'>
        <p className='text-3xl px-5 py-4 font-sans text-justify'>Feel free to contact me</p>
      </div>
      <div className='flex flex-row items-center justify-center mb-16'>
        <SiInstagram className='mx-3 text-5xl text-rose-400 cursor-pointer' />
        <FaXTwitter className='mx-3 text-5xl text-cyan-500 cursor-pointer' />
        <FaGithub className='mx-3 text-5xl text-black cursor-pointer' />
      </div>
    </section>
    </>
  )
}

export default ContactUs