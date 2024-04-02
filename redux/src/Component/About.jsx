import React from 'react'
import image from "../../public/8H8A1507.jpg"
import { FaCalendarAlt, FaMobileAlt } from 'react-icons/fa'
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";




const About = () => {


  return (
    <>

      <div className='container max-w-[1320px] px-4 mx-auto'>
        <div className='w-full bg-white h-1/2 rounded-2xl mt-16 px-20 py-16 '>

          <div className='about flex mb-9'>
            <h1 className='text-4xl font-bold font-serif'>About Me</h1>
            <div className=' w-[50%] items-center justify-center p-4'>
              <div className='bg-gradient-to-r from-red-500  to-pink-600 w-[40%] h-1 ml-4'></div>
            </div>
          </div>

          {/* image  */}
          <div className='imagee flex'>
            <div className="avatar w-[35%] ">
              <div className=" rounded-3xl mt-12">
                <img src={image} />
              </div>
            </div>

            <div className='mt-12  px-8 w-[65%]'>
              <h2 className='text-2xl font-medium'>Who Am I?</h2>
              <h2 className='text-lg '>I have good understanding of full-stack developer with ability to create beautiful website. I am exited to work in dynamic project as a full-stack developer.
                I like to work in team with good Communication skills.</h2>
              <h2 className='text-lg mt-5'>My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</h2>

              <h1 className='mt-5 text-3xl'>Personal Info</h1>

              {/* first row   */}
              <div className='roww flex mt-9'>
                <div className='flex w-[70%] h-14 p-2'>
                  <div className='icopn  w-11 h-11 shadow-md bg-white rounded-xl  p-[9px]  hover:text-white  hover:bg-gradient-to-r from-red-500  to-pink-600'>
                    <FaMobileAlt className='text-2xl' />
                  </div>
                  <div className='mobile '>
                    <p className='text-xs ml-3 font-medium'>Phone</p>
                    <div className='ml-3 text-base font-medium'>+91 7862046538</div>
                  </div>
                </div>

                <div className='flex w-[70%] h-14 p-2 ml-6'>
                  <div className='icon w-11 h-11 bg-white shadow-md rounded-xl p-[9px] hover:text-white  hover:bg-gradient-to-r from-red-500  to-pink-600'>
                    <IoIosMailOpen className='text-2xl font-bold ' />
                  </div>
                  <div>
                    <h2 className='text-xs ml-3 font-medium'>Email</h2>
                    <div className='ml-3 text-base font-medium'>lathiyaharshit19@gmail.com</div>
                  </div>
                </div>
              </div>

              {/* second row  */}
              <div className='roww flex py-3'>
                <div className='flex w-[70%] h-14 p-2'>
                  <div className='icopn  w-11 h-11 shadow-md bg-white rounded-xl  p-[9px]  hover:text-white  hover:bg-gradient-to-r from-red-500  to-pink-600'>
                    <FaLocationDot className='text-2xl' />
                  </div>
                  <div className='mobile '>
                    <p className='text-xs ml-3 font-medium'>Location</p>
                    <div className='ml-3 text-base font-medium'>Surat, Gujarat </div>
                  </div>
                </div>

                <div className='flex w-[70%] h-14 p-2 ml-6'>
                  <div className='icon w-11 h-11 bg-white shadow-md rounded-xl p-[9px] hover:text-white  hover:bg-gradient-to-r from-red-500  to-pink-600'>
                    <FaCalendarAlt className='text-2xl font-bold ' />
                  </div>
                  <div>
                    <h2 className='text-xs ml-3 font-medium'>Birthday</h2>
                    <div className='ml-3 text-base font-medium'>April 27, 2004</div>
                  </div>
                </div>
              </div>

            </div>




          </div>




        </div>

      </div>
    </>
  )
}

export default About