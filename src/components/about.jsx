import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import aboutimg from '../assets/about.jpg';

const About = () => {
    // Define animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 50 }, // Start from below
        visible: { opacity: 1, y: 0 }, // End at the original position
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 }, // Start from below
        visible: { opacity: 1, scale: 1, y: 0 }, // End at the original position
    };

    const controlsText = useAnimation();
    const controlsImage = useAnimation();
    const ref = useRef();

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start the animations when the section is in view
                controlsText.start("visible");
                controlsImage.start("visible");
            } else {
                // Reset the animations when it leaves view
                controlsText.start("hidden");
                controlsImage.start("hidden");
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1 // Adjust this value to change when the animation triggers
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [controlsText, controlsImage]);

    return (
        <div id='about' ref={ref} className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>
            <div className='flex flex-wrap'>
                <motion.div 
                    className='w-full lg:w-1/2 lg:p-8'
                    initial="hidden"
                    animate={controlsImage} // Use controls for the image
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                >
                    <img className='rounded-2xl' src={aboutimg} alt="about" />
                </motion.div>
                <motion.div 
                    className='w-full lg:w-1/2'
                    initial="hidden"
                    animate={controlsText} // Use controls for the text
                    variants={textVariants}
                    transition={{ duration: 0.5, delay: 0.2 }} 
                >
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            I'm a passionate and eager web developer starting my journey in the world of programming. With a solid foundation in front-end technologies like HTML, CSS, and JavaScript, I enjoy building responsive and user-friendly web interfaces. I also have hands-on experience with React, creating dynamic single-page applications, and Laravel for building scalable back-end solutions. I'm constantly learning and excited to expand my skill set, taking on new challenges and projects to enhance my expertise. Whether it's bringing a design to life or solving a back-end problem, I love using code to create meaningful web experiences. Feel free to explore my work, and let's connect!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
