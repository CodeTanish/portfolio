import React from 'react'

const Intro = () => {
  return (
    <>
    <div id='intro Us' className='flex flex-col justify-center bg-[#707070] mix-blend-normal'>
        <p className='items-start mx-3 font-mono font-normal text-4xl mt-5'>About Us</p>
        <p className='px-5 py-4  font-sans text-justify text-xl m-12'>
          Hello! I’m Tanish , a budding web developer with a passion for specific type of work you do, e.g., creating dynamic websites. As pursuring B.Tech from Jss Academy of techincal education, I am eager to bring my fresh perspective and innovative ideas to the professional world.
          Throughout my academic journey, I have developed a strong foundation in skill like HTML, CSS, Reactjs, Java, Spring boot. My portfolio showcases a selection of my projects, each reflecting my dedication to learning and my enthusiasm for Web development. 
        </p>
        <div className='flex flex-col justify-center mb-20 ml-32 mr-36 px-2 py-2'>
          <h2 className='flex items-start text-2xl font-sans ml-10 mb-4'>Qualification</h2>
          <div className='flex flex-row items-center mb-4'>
            <h3 className='text-xl ml-12'>Bachelor in Computer Science</h3>
            <p className='text-xl flex ml-44'>JSS Academy of Technical Education</p>
            <p className='ml-48 mr-10'>pursuing</p>
          </div>
          <div className='flex flex-row items-center mb-4'>
            <h3 className='text-xl ml-12'>Diploma in Electrical Engineering</h3>
            <p className='text-xl flex ml-[132px]'>Govt. Polytechnic, Rampur</p>
            <p className='ml-[250px]'>2020-2023</p>
          </div>
          <div className='flex flex-row items-center'>
            <h3 className='text-xl ml-12'>High school</h3>
            <p className='text-xl flex ml-[318px]'>K.C.M public School</p>
            <p className='ml-[307px]'>2020</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Intro
