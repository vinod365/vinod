"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[960px] z-[100] h-[52px] flex items-center justify-between px-6 bg-bg-alt/88 backdrop-blur-xl border border-border rounded-full transition-all duration-300">
            <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#68d391] shadow-[0_0_8px_#68d391] animate-pulse" />
                <span className="font-mono text-[13px] text-text-bright font-medium tracking-tight">vinodevx.com</span>
                <span className="font-mono text-[11px] text-[#68d391] opacity-90 hidden sm:inline">&nbsp;· Available</span>
            </div>

            <ul className="hidden md:flex items-center gap-1 list-none">
                <li>
                    <Link href="#about" className="block px-3.5 py-1.5 text-[13px] text-text-dim hover:text-text-bright transition-colors">About</Link>
                </li>
                <li>
                    <Link href="#experience" className="block px-3.5 py-1.5 text-[13px] text-text-dim hover:text-text-bright transition-colors">Experience</Link>
                </li>
                <li>
                    <Link href="#contact" className="block px-3.5 py-1.5 text-[13px] text-text-dim hover:text-text-bright transition-colors">Contact</Link>
                </li>
            </ul>

            <Link
                href="#contact"
                className="font-mono text-[12px] tracking-wider px-4.5 py-1.5 border border-accent text-accent rounded-full hover:bg-accent/8 transition-colors"
            >
                Hire me
            </Link>
        </nav>
    );
};

export default Navbar;
