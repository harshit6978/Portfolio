import React, { useState } from 'react';
import logo from "../../../redux/public/logo.png";
import { FaBriefcase, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeButton, setActiveButton] = useState("Home");

    const handleSetActiveButton = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className='container max-w-[1320px] px-4 relative mx-auto mt-5'>
            <div className='p-3'>
                <div className='row flex flex-wrap'>
                    <div className='w-full flex'>

                        <div className='log w-[20%] col-12'>
                            <img src={logo} alt="Logo" className=' ' />
                        </div>
                        <div className=' w-[80%] p-3 '>
                            <div className='float-right'>
                                <ul className='flex items-center'>
                                    <Link to="/" className={`bg-white transition ease-in delay-100 ${activeButton === 'Home' ? 'text-white bg-gradient-to-r from-red-500  to-pink-600' : 'hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600'} cursor-pointer px-2 rounded-lg mx-4`} onClick={() => handleSetActiveButton('Home')}>
                                        <a className='m-2 flex'><FaHome className='mr-2 m-auto' />Home</a>
                                    </Link>
                                    <Link to="/about" className={`bg-white transition  ${activeButton === 'About' ? 'text-white bg-gradient-to-r from-red-500  to-pink-600' : 'hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600'} cursor-pointer px-2 rounded-lg mx-4`} onClick={() => handleSetActiveButton('About')}>
                                        <a className='flex m-2'><FaUser className='mr-2 m-auto' />About</a>
                                    </Link>
                                    <Link to="/resume" className={`bg-white transition ease-in delay-100 ${activeButton === 'Resume' ? 'text-white bg-gradient-to-r from-red-500  to-pink-600' : 'hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600'} cursor-pointer px-2 rounded-lg mx-4`} onClick={() => handleSetActiveButton('resume')}>
                                        <a className='flex m-2'><FaFileAlt className='mr-2 m-auto' />Resume</a>
                                    </Link>
                                    <Link to="/work" className={`bg-white transition ease-in delay-100 ${activeButton === 'Work' ? 'text-white bg-gradient-to-r from-red-500  to-pink-600' : 'hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600'} cursor-pointer px-2 rounded-lg mx-4`} onClick={() => handleSetActiveButton('Work')}>
                                        <a className='flex m-2'><FaBriefcase className='mr-2 m-auto' />Work</a>
                                    </Link>
                                    <Link to="/contact" className={`bg-white transition ease-in delay-100 ${activeButton === 'Contact' ? 'text-white bg-gradient-to-r from-red-500  to-pink-600' : 'hover:text-white hover:bg-gradient-to-r from-red-500  to-pink-600'} cursor-pointer px-2 rounded-lg mx-4`} onClick={() => handleSetActiveButton('Contact')}>
                                        <a className='flex m-2'><IoCall className='mr-2 m-auto' />Contact</a>
                                    </Link>
                                    {/* Add similar logic for other links */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
