import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiXCircle } from 'react-icons/fi'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("Scroll", handleScroll);
        return () => window.removeEventListener("Scroll", handleScroll);
    }, []);
    return (
        <nav className={`w-full fixed top-0 z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : 'bg-transparent'}`}>
            <div className="flex items-center justify-between">
                <div className="font-semibold text-xl cursor-pointer">
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-[#FFFFFF]'>Dibyendu Nayak</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>
                <div className='flex space-x-5'>
                    <FaGithub className='text-[#FFFFFF] text-xl' />
                    <FaLinkedin className='text-[#FFFFFF] text-xl' />
                </div>
            </div>
            <IoMenu />
            <FiXCircle />

        </nav>
    )
}

export default Navbar