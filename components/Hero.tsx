"use client";

import { motion } from "framer-motion";

const Hero = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        transition: springTransition
    };

    return (
        <section className="relative z-10 min-h-screen pt-[100px] sm:pt-[120px] pb-[60px] sm:pb-[80px] flex flex-col justify-center">
            <motion.span
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.1 }}
                className="font-mono text-[12px] text-accent tracking-[0.1em] mb-7 before:content-['//_'] before:opacity-40"
            >
                full stack developer
            </motion.span>

            <motion.h1
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.2 }}
                className="text-[clamp(44px,9vw,84px)] font-semibold text-text-bright leading-[1.05] tracking-[-0.038em] mb-2.5"
            >
                Hi, I&apos;m <span className="text-accent">Vinod.</span>
            </motion.h1>

            <motion.p
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.28 }}
                className="text-[clamp(26px,5vw,48px)] font-light text-text-dim leading-[1.1] tracking-[-0.025em] mb-9"
            >
                I build things for the web.
            </motion.p>

            <motion.p
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.36 }}
                className="max-w-[600px] text-[16px] font-light text-text leading-[1.8] mb-11"
            >
                Full-stack developer building precise, scalable, and accessible digital experiences — at the intersection of thoughtful engineering and clean design.
            </motion.p>

            <motion.div
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.44 }}
                className="flex gap-3 mb-16"
            >
                <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-[14px] font-semibold rounded-md hover:opacity-88 hover:-translate-y-px transition-all">
                    View my work →
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-text text-[14px] font-normal border border-border rounded-md hover:border-border-hover hover:text-text-bright transition-all">
                    Get in touch
                </a>
            </motion.div>

            <motion.div
                {...fadeInUp}
                transition={{ ...springTransition, delay: 0.56 }}
                className="flex flex-wrap gap-x-10 gap-y-7 pt-9 border-t border-border"
            >
                <div>
                    <div className="text-[26px] font-semibold text-text-bright tracking-[-0.03em] leading-none mb-1">4+</div>
                    <div className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Years exp.</div>
                </div>
                <div>
                    <div className="text-[26px] font-semibold text-text-bright tracking-[-0.03em] leading-none mb-1">12+</div>
                    <div className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Projects shipped</div>
                </div>
                <div>
                    <div className="text-[26px] font-semibold text-text-bright tracking-[-0.03em] leading-none mb-1">1</div>
                    <div className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Startup built for</div>
                </div>
                <div>
                    <div className="text-[20px] font-semibold text-[#68d391] tracking-[-0.03em] leading-none mb-2 mt-1">Open</div>
                    <div className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">To opportunities</div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
