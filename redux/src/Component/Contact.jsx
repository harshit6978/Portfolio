import React from 'react'
import call from "../../public/phone-call.png"
import mail from "../../public/email-icon.png"
import map from "../../public/map-icon.png"


const Contact = () => {
    return (
        <div className='container max-w-[1320px] px-4 mx-auto'>
            <div className='w-full bg-white h-1/2 rounded-2xl mt-16 px-20 py-16 '>

                <div className='about flex mb-9'>
                    <h1 className='text-[40px] font-bold font-sans'>Contact</h1>
                    <div className=' w-[50%] items-center justify-center p-7'>
                        <div className='bg-gradient-to-r from-red-500  to-pink-600 w-[40%] h-1 ml-4'></div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='w-1/3'>

                        <div className='box rounded-2xl p-8 bg-red-50 flex mb-5'>
                            <img src={call} className='w-9 h-9'></img>
                            <div className='ml-5'>
                                <h1 className='text-xl font-medium  mb-3'>Phone:</h1>
                                <h1 className='text-xl '>+91 786046538</h1>
                            </div>
                        </div>

                        <div className='box  rounded-2xl p-8 bg-red-50 flex mb-5'>
                            <img src={mail} className='w-9 h-9'></img>
                            <div className='ml-5'>
                                <h1 className='text-xl font-medium  mb-3'>Email:</h1>
                                <h1 className='text-xl  mb-3'>lathiyaharshit19@gmail.com</h1>
                            </div>
                        </div>

                        <div className='box  rounded-2xl p-8 bg-red-50 flex'>
                            <img src={map} className='w-9 h-9'></img>
                            <div className='ml-5'>
                                <h1 className='text-xl font-medium mb-3'>Address:</h1>
                                <h1 className='text-xl mb-3'>69,70 Kamalbag Soc, KhodiyarNagar Road, Surat, Gujarat</h1>
                            </div>
                        </div>
                    </div>

                    <div className='w-2/3 rounded-2xl  py-16 px-11 ml-5 bg-blue-50'>
                        <h1 className='text-2xl font-normal mb-3'>I'm Always Open To Discussing Produuct</h1>
                        <h1 className='text-2xl font-bold mb-11'>Web-site Work Or Partnerships</h1>

                        {/* <!--Email input--> */}
                        <div class="relative mb-10">
                            <input
                                type="text"
                                class="peer m-0 block h-[58px] w-full rounded  border-solid border-b border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-red-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-red-500 focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingInput"
                                placeholder="name@example.com" />
                            <label
                                for="floatingInput"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-b border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-red-500"
                            >Name</label>
                        </div>

                        {/* <!--email input--> */}
                        <div class="relative mb-10">
                            <input
                                type="email"
                                class="peer m-0 block h-[58px] w-full rounded border-b border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-green-500 focus:shadow-twe-primary focus:outline-none peer-focus:text-red dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingPassword"
                                placeholder="Email" />
                            <label
                                for="floatingPassword"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-green-500"
                            >Email</label>
                        </div>
                        
                        {/* message  */}
                        <div class="relative mb-10">
                            <textarea
                                type="text area"
                                class="peer m-0 block h-[58px] w-full rounded border-b border-solid border-secondary-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-blue-500 focus:shadow-twe-primary focus:outline-none peer-focus:text-primary dark:border-neutral-400 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                                id="floatingPassword"
                                placeholder="Password" />
                            <label
                                for="floatingPassword"
                                class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-blue-500"
                            >Message</label>
                        </div>
                    <button className='p-4 border-2 border-solid font-semibold w-32 h-14 rounded-xl  hover:text-white  hover:bg-gradient-to-r from-red-500  to-pink-600'>Submit</button>
                    </div>

                </div>




            </div>

        </div>
    )
}

export default Contact