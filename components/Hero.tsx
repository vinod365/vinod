"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="relative pt-40 pb-12 px-6 md:px-24 flex flex-col justify-center">
            <div className="mesh-gradient" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-tight">
                    Vinod
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-brand-primary mb-6">
                    Full Stack Developer
                </h2>
                <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                    Building precise, engaging, and accessible digital experiences.
                </p>

                <div className="flex items-center gap-6 mb-10">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        className="text-2xl text-slate-400 hover:text-white transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        className="text-2xl text-slate-400 hover:text-white transition-colors"
                    >
                        <FaGithub />
                    </a>
                </div>

                <a href="#contact">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-8 py-3 rounded-md font-bold text-sm tracking-wider uppercase hover:bg-slate-200 transition-colors"
                    >
                        Contact ME
                    </motion.button>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
