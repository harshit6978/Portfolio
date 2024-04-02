import React from 'react'
import profile from "../../public/IMG_8330-1.jpeg.jpg"
// import { li } from 'react-router-dom'
import { FaDownload, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import jsPDF from 'jspdf';

const Home = () => {

  return (
    <>
      <div className='container max-w-[1320px] px-4 mx-auto'>
        <div className='p-6'>
          <div className="avatar w-full m-auto mt-9">
            <div className="w-[25%] rounded-full m-auto">
              <img src={profile} className='' />
            </div>
          </div>
        </div>
        <h2 className='text-center text-[50px] font-serif font-bold' >Harshit Lathiya</h2>
        <h2 className='text-center text-[30px] font-thin' >Full-stack Developer</h2>
        <div className=' w-full p-3 '>
          <div className=''>
            <ul className='flex items-center justify-center '>
              <li className='bg-white transition ease-in delay-100 hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer px-2 py-2 rounded-lg mx-4'>
                <a className='m-2 flex '><FaFacebookF className='600 text-xl hover:text-white' /></a>
              </li>
              <li  className='bg-white transition ease-in delay-100 hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer px-2 py-2 rounded-lg mx-4'>
                <a className='flex m-2'><FaWhatsapp className=' text-xl hover:text-white' /></a>
              </li>
              <li className='bg-white transition ease-in delay-100 hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer px-2 py-2 rounded-lg mx-4'>
                <a href='https://www.linkedin.com/in/harshit-lathiya-66871b266/' className=' m-2 flex' target="_blank"><FaLinkedinIn className='text-xl'  /></a>
              </li>
              <li className='bg-white transition ease-in delay-100 hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer px-2 py-2 rounded-lg mx-4'>
                <a className='flex m-2'><FaGithub className='text-xl' /></a>
              </li>
              <li className='bg-white transition ease-in delay-100 hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer px-2 py-2 rounded-lg mx-4'>
                <a className='flex m-2'><FaInstagram className='text-xl  hover:text-white' /></a>
              </li>

            </ul>
          </div>
        </div>
        <div className='m-auto mt-10'>
          <button href='C:\Users\Harsh.it\Downloads' download className='bg-gradient-to-r from-red-500  to-pink-600 cursor-pointer text-white p-3 m-auto rounded-md flex' ><FaDownload className='m-auto flex mr-3'/>Download CV</button>
        </div>
      </div>
    </>
  )
}

export default Home