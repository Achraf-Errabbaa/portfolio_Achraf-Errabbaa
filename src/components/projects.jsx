import React from 'react';
import marketplace from '../assets/Screenshot 2024-10-11 101640.png';
import yummy from '../assets/ymmy.png';
import fashe from '../assets/fashe.png';
import { motion } from "framer-motion";

function Projects() {
    // Define animation variants
    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const projects = [
        {
            image: marketplace,
            title: "Marketplace Dashboard",
            description: "A sleek and responsive marketplace dashboard that empowers users to search, filter, and manage product listings efficiently. It boasts a user-friendly interface with sidebar navigation for easy access to account settings, social features, and analytics. The intuitive product grid allows users to browse items by category and effortlessly add new products or view product details. This dashboard enhances the overall marketplace experience by providing a seamless and efficient platform for users to interact with product listings.",
            technologies: ["React", "HTML", "CSS"],
            alt: "Marketplace Dashboard"
        },
        {
            image: yummy,
            title: "Yummy Restaurant Landing Page",
            description: "Designed a modern and responsive landing page for a restaurant website using Bootstrap. The layout features an eye-catching hero section with a large food image and a clear call to action, encouraging users to book a table or watch a promotional video. The top navigation provides easy access to the menu, events, and contact pages. This clean and user-friendly design offers a seamless experience for visitors, enhancing user engagement with a visually appealing interface.",
            technologies: ["Sass", "HTML", "CSS"],
            alt: "Yummy Restaurant Landing Page"
        },
        {
            image: fashe,
            title: "Fashion eCommerce Landing Page",
            description: "This project is a responsive landing page for an online fashion store. It features a full-width carousel with high-quality imagery and a clear call-to-action button. The minimalistic navigation bar enhances user experience by keeping the design clean and easy to navigate. The product section highlights featured items with a hover effect, providing a smooth and interactive experience. Tailwind CSS was used for fast styling, and Swiper.js was integrated to create the interactive carousel for showcasing the latest collections.",
            technologies: ["React", "HTML", "CSS"],
            alt: "Fashion eCommerce Landing Page"
        }
    ];

    return (
        <div id='projects' className="border-b border-neutral-900 pb-12 lg:pb-20">
            <h2 className="my-20 text-center text-4xl font-bold tracking-tight text-gray-200 lg:text-5xl">
                Projects
            </h2>

            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center gap-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={projectVariants}
                    transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 // Stagger effect
                    }}
                >
                    <div className="w-[350px] h-[350px] lg:w-1/3 flex justify-center">
                        <img
                            className="mb-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                            src={project.image}
                            alt={project.alt}
                        />
                    </div>
                    <div className="w-full max-w-xl lg:w-2/3 flex flex-col justify-center">
                        <h6 className="mb-3 text-2xl font-bold text-gray-100 lg:text-3xl">
                            {project.title}
                        </h6>
                        <p className="mb-6 text-lg text-neutral-400 leading-relaxed">
                            {project.description}
                        </p>
                        <div className='flex flex-wrap gap-4'>
                            {project.technologies.map((tech, techIndex) => (
                                <p key={techIndex} className="mt-4 w-[100px] py-2 px-4 flex items-center justify-center rounded-lg bg-purple-500 hover:bg-purple-700 text-white font-medium text-sm transition duration-300 shadow-md hover:shadow-lg">
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Projects;
