import React from 'react'
import img_1 from '../../public/assets/a6.jpg'
import video_1 from '../../public/assets/1.mp4'

const About = () => {
  return (
    <div className='w-11/12 m-auto mt-20'>
        <div className="flex-row md:flex items-center">
            <div className="mb-6 mr-0 md:mr-10">
                <img className='w-[2500px]' src={img_1} alt="" />
            </div>
            <div className="p-0 md:p-4">
              <h2 className='text-3xl font-bold mb-6 text-[#3c4242]'>Who We Are? </h2>
              <p className='text-gray-400 tracking-wider'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                accusamus recusandae inventore nemo aperiam iusto, eaque
                distinctio id facere et cum eius odit voluptatibus! Dolores
                sequi in tempora asperiores dolore, fuga odio aut quas!
                Voluptates ad culpa dolore libero provident!
              </p>
      
              <br /><br />
              <marquee  bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning images with as much or as little control as you
              like thanks to a choice of basic and Creative modes.</marquee>
            </div>
        </div>
        <div className="mt-10 text-center">
            <h1 className='text-3xl font-bold mb-6 text-[#3c4242]'>Download Our App</h1>
            <div className='flex items-center justify-center'>
              <video autoPlay loop muted controls className="w-[700px] p-3" src={video_1}></video>
            </div>
          </div>
    </div>
  )
}

export default About