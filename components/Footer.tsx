"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="contact" className="py-24 px-6 md:px-24 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4">
                        SOMETHING SPARKED IN YOUR MIND?
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto mb-8">
                        My inbox is always open. Whether you have an interesting project, a question or
                        just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a
                        href="mailto:vinod@example.com"
                        className="text-2xl font-bold text-white hover:text-brand-primary transition-colors hover:underline underline-offset-8 decoration-brand-primary"
                    >
                        Say Hello <span className="ml-2">👋</span>
                    </a>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
                    <p className="text-xs text-slate-500 font-medium">
                        © 2026 Vinod. Built with Next.js & Tailwind.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><FaGithub size={20} /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                        <a href="mailto:vinod@example.com" className="text-slate-500 hover:text-white transition-colors"><FaEnvelope size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
