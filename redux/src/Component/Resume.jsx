import React from 'react'
import { FaBook, FaBriefcase } from 'react-icons/fa'
import html from "../../public/html.png"
import css from "../../public/css.png"
import js from "../../public/js.png"
import db from "../../public/db.png"
import jq from "../../public/jq.png"
import react from '../../public/react.png'
import tail from "../../public/tail.png"
import node from "../../public/nodejs.png"
const Resume = () => {
    return (
        <div className='container max-w-[1320px] px-4 mx-auto'>
            <div className='w-full bg-white h-1/2 rounded-2xl mt-16 px-20 py-16 '>

                <div className='about flex mb-9'>
                    <h1 className='text-4xl font-bold font-serif'>Resume</h1>
                    <div className=' w-[50%] items-center justify-center p-4'>
                        <div className='bg-gradient-to-r from-red-500  to-pink-600 w-[40%] h-1 ml-4'></div>
                    </div>
                </div>

                {/* image  */}
                <div className=''>
                    <div className='row flex'>
                        <div className='w-1/2 px-3'>
                            <div className='mb-4 flex'>
                                <FaBook className='text-2xl mt-2 text-orange-500' /> <h1 className='text-2xl font-medium flex ml-2 p-1'>Education</h1>
                            </div>
                            <div className='eduxtaion mb-5'>
                                <div className=' bg-red-50 h-[50%] p-6 rounded-xl mb-5'>
                                    <h1 className='text-sm font-normal mb-2'>2021-2024</h1>
                                    <h1 className='text-lg font-normal mb-1'>Bachelor of Computer Applications</h1>
                                    <h1 className='text-lg font-normal mb-1'>Veer Narmad South Gujarat University</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1>
                                </div>

                                <div className=' bg-blue-50 h-[50%] p-6 rounded-xl mb-5'>
                                    <h1 className='text-sm font-normal mb-2'>2019-20</h1>
                                    <h1 className='text-lg font-normal mb-1'>GSEB HSCE Board </h1>
                                    <h1 className='text-lg font-normal mb-1'>Mauni Education Center</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1>
                                </div>
                                <div className=' bg-red-50 h-[50%] p-6 rounded-xl mb-5'>
                                    <h1 className='text-sm font-normal mb-2'>2017-18</h1>
                                    <h1 className='text-lg font-normal mb-1'>GSEB SSC Board </h1>
                                    <h1 className='text-lg font-normal mb-1'>P.P Savani Vidhyabhavan</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 px-3'>
                            <div className='mb-4  flex'>
                                <FaBriefcase className='text-2xl mt-2 text-orange-500' /> <h1 className='text-2xl font-medium flex ml-2 p-1'>Experience</h1>
                            </div>
                            <div className='eduxtaion mb-5 '>
                                <div className=' bg-red-50 h-[50%] p-6 rounded-xl mb-5'>
                                    {/* <h1 className='text-sm font-normal mb-2'>2021-2024</h1>
                                    <h1 className='text-lg font-normal mb-1'>Bachelor of Computer Applications</h1>
                                    <h1 className='text-lg font-normal mb-1'>Veer Narmad South Gujarat University</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1> */}
                                </div>

                                <div className=' bg-blue-50 h-[50%] p-6 rounded-xl mb-5'>
                                    {/* <h1 className='text-sm font-normal mb-2'>2019-20</h1>
                                    <h1 className='text-lg font-normal mb-1'>GSEB HSCE Board </h1>
                                    <h1 className='text-lg font-normal mb-1'>Mauni Education Center</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1> */}
                                </div>
                                <div className=' bg-red-50 h-[50%] p-6 rounded-xl'>
                                    {/* <h1 className='text-sm font-normal mb-2'>2017-18</h1>
                                    <h1 className='text-lg font-normal mb-1'>GSEB SSC Board </h1>
                                    <h1 className='text-lg font-normal mb-1'>P.P Savani Vidhyabhavan</h1>
                                    <h1 className='text-base font-normal mb-1'>Surat, Gujarat</h1> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-16'>
                    <h1 className='items-center text-center text-3xl'>Working Skills</h1>

                    <div className='flex flex-wrap mt-9'>
                        <div className='w-full flex'>


                            <div className='w-36 h-36 rounded-2xl p-6 mr-6'>
                                <img src={html} className='w-36 mt-4' ></img>
                                <h1 className='text-center mt-3 font-medium'>HTML</h1>
                            </div>

                            <div className='w-36 h-36 rounded-2xl p-6 mr-6'>
                                <img src={css} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>Css</h1>
                            </div>

                            <div className='w-36 h-36 rounded-2xl p-6 mr-6'>
                                <img src={js} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>JavaScript</h1>
                            </div>


                            <div className='w-36 h-36 rounded-2xl p-6 mr-6'>
                                <img src={jq} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>J Query</h1>
                            </div>

                            <div className='w-36 h-36 rounded-2xl p-6 mr-6 '>
                                <img src={react} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>React js</h1>
                            </div>

                            <div className='w-36 h-36 rounded-2xl p-6 mr-6 '>
                                <img src={node} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>Node js</h1>
                            </div>

                            <div className='w-36 h-36 rounded-2xl p-6 mr-6'>
                                <img src={tail} className='w-36 mt-4' />
                                <h1 className='text-center mt-3 font-medium'>Tailwind Css</h1>
                            </div>
                        </div>

                    </div>
                </div>





            </div>

        </div>
    )
}

export default Resume
