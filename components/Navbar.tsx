"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed bottom-10 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="glass-nav h-12 flex items-center px-6 gap-8 rounded-full border border-white/10"
            >
                <Link href="#about" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase transition-colors">About</Link>
                <Link href="#experience" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase transition-colors">Experience</Link>
                <Link href="#contact" className="text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase transition-colors">Contact</Link>
            </motion.nav>
        </div>
    );
};

export default Navbar;
