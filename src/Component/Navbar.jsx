import React from 'react'
import { Link } from "react-scroll";


const Navbar = () => {

    const Resume_URL = "https://drive.google.com/file/d/1EIFO8mUt_ciGAnOWBWur35dz1lBPXc3S/view"

    const downloadR = (url) =>{
        const fileName = url.split('/').pop()
        const aTag =  document.createElement('a')
        aTag.href = url
        aTag.setAttribute("download", fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <>
            <nav className='flex justify-between center items-center px-6 py-4 mb-2 bg-[#363636] mix-blend-normal'>
                <h3 className='font-mono text-white text-2xl'>Portfolio</h3>
                <ul className='flex items-center justify-between'>
                    <li className='px-4'><Link className='font-mono text-xl px-1 py-1 border border-solid border-white rounded text-white cursor-pointer shadow-lg hover:shadow-red-400' to='intro Us' smooth={true} duration={500} >About Us</Link></li>
                    <li className='px-4'><Link className='font-mono text-xl px-1 py-1 border border-solid border-white rounded text-white cursor-pointer shadow-lg hover:shadow-red-400' to='skill' smooth={true} duration={750}>Skills</Link></li>
                    <li className='px-4'><Link className='font-mono text-xl px-1 py-1 border border-solid border-white rounded text-white cursor-pointer shadow-lg hover:shadow-red-400' to='contact Us' smooth={true} duration={1000}>Contact us</Link></li>
                    <li className='px-4'><Link className='font-mono text-xl bg-sky-400 px-1 py-1 border border-solid border-white rounded-md shadow-lg hover:shadow-sky-400' to='/resume' onClick={()=>{downloadR(Resume_URL)}}>Resume</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar
