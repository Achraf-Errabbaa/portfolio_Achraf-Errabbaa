import React from 'react';

const Footer = () => {
    return (
        <footer className=" py-6 text-center text-gray-400">
            <p className="mb-2">&copy; 2024 Achraf ERrabbaa. All Rights Reserved.</p>
            <p className="mb-2">+212 7741 113 86</p>
            
            <a
                href="mailto:achraferrabbaa7@gmail.com"
                className="hover:text-gray-200 transition-colors duration-300"
            >
                achraferrabbaa7@gmail.com
            </a>
        </footer>
    );
};

export default Footer;
