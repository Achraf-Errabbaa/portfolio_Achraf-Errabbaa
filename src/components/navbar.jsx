import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                <h1 className='text-white text-2xl font-bold'>Portfolio</h1>
            </div>

            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                    {isOpen ? '✖️' : '☰'}
                </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-center gap-4 text-2xl">
                <ul className="flex space-x-4">
                    <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                    <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
                    <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ul className={`flex flex-col items-center space-y-4 text-2xl ${isOpen ? 'block' : 'hidden'}`}>
                    <li><a href="#home" onClick={handleLinkClick} className="text-gray-300 hover:text-white">Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick} className="text-gray-300 hover:text-white">About</a></li>
                    <li><a href="#projects" onClick={handleLinkClick} className="text-gray-300 hover:text-white">Projects</a></li>
                    <li><a href="#skills" onClick={handleLinkClick} className="text-gray-300 hover:text-white">Skills</a></li>
                    <li><a href="#contact" onClick={handleLinkClick} className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
