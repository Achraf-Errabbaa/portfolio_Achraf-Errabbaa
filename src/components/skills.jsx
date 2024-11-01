import React from 'react';
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { motion } from 'framer-motion';

const Skills = () => {
    const iconVariants = (index) => ({
        initial: { y: 0 },
        animate: {
            y: index % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    });

    return (
        <div id="skills" className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Skills</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                    { component: <FaReact className="text-7xl bg-[#2a2e36] text-cyan-400" />, bgColor: '#2a2e36' },
                    { component: <IoLogoJavascript className="text-7xl bg-[#efd81d] text-black" />, bgColor: '#efd81d' },
                    { component: <FaLaravel className="text-7xl bg-[#fd5542] text-white" />, bgColor: '#fd5542' },
                    { component: <FaHtml5 className="text-7xl bg-[#fffff] text-[#dd4b25]" />, bgColor: '#ffff' },
                    { component: <FaCss3Alt className="text-7xl  text-[#254bdf]" />, bgColor: '#ffff' },
                ].map((icon, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-2xl border-4 border-neutral-800 p-4 bg-[${icon.bgColor}]`}
                        variants={iconVariants(index)}
                        initial="initial"
                        animate="animate"
                    >
                        {icon.component}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;