import React, { useEffect, useRef } from 'react';
import poriflepic from '../assets/kevinRushProfile.jpg';
import achrafTech from '../assets/achraf-tech.pdf';
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100 }, 
        visible: { opacity: 1, x: 0 },
    };

    const controls = useAnimation();
    const ref = useRef();

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                controls.start("visible");
            } else {
                controls.start("hidden");
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1 
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controls]);

    return (
        <div id='main' ref={ref} className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <motion.div 
                    className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'
                    initial="hidden"
                    animate={controls} 
                    variants={textVariants}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl'>
                        Achraf ERrabbaa
                    </h1>

                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </span>

                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        A Web Developer who loves creating amazing web experiences.
                    </p>

                    <button className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                        <span className="inline-flex h-full w-full  cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                            <a  href={achrafTech} download>
                                Download Resume (PDF)
                            </a>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 448 512"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </motion.div>

                <motion.div 
                    className='w-full lg:w-1/2 lg:p-8 flex justify-center rounded-3xl overflow-hidden'
                    initial="hidden"
                    animate={controls} 
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                >
                    <img src={poriflepic} alt="Profile" />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
