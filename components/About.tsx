"use client";

import { motion } from "framer-motion";

const About = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    return (
        <section id="about" className="py-[88px] border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={springTransition}
                className="flex items-center gap-3.5 mb-[52px]"
            >
                <span className="font-mono text-[12px] text-accent opacity-80">01</span>
                <span className="text-[12px] font-medium text-text-bright tracking-[0.12em] uppercase">About</span>
                <div className="flex-1 h-px bg-border"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-18 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ ...springTransition, delay: 0.1 }}
                >
                    <p className="text-[15px] font-light text-text leading-[1.85] mb-[18px]">
                        Back in 2020, I began exploring the field of software development. Fast-forward to today — I&apos;ve had the privilege of <strong className="text-text-bright font-medium">building software for a startup</strong>, working across the full product lifecycle from architecture to deployment.
                    </p>
                    <p className="text-[15px] font-light text-text leading-[1.85] mb-[18px]">
                        What I enjoy most is creating software that strikes the perfect balance between <strong className="text-text-bright font-medium">design and engineering</strong> — projects that not only look great, but are built to perform and scale well.
                    </p>
                    <p className="text-[15px] font-light text-text leading-[1.85]">
                        I collaborate closely with cross-functional teams, champion clean code, and care deeply about the details that make a product feel truly polished.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ ...springTransition, delay: 0.2 }}
                    className="w-full"
                >
                    <div className="flex justify-between items-center border-border text-[13px] border-b py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Status</span>
                        <span className="text-[#68d391] flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#68d391] before:rounded-full before:shadow-[0_0_6px_#68d391] before:inline-block">Available for hire</span>
                    </div>
                    <div className="flex justify-between items-center border-border text-[13px] border-b py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Location</span>
                        <span className="text-text-bright font-normal">India</span>
                    </div>
                    <div className="flex justify-between items-center border-border text-[13px] border-b py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Expertise</span>
                        <span className="text-text-bright font-normal">Full Stack</span>
                    </div>
                    <div className="flex justify-between items-center border-border text-[13px] border-b py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">Focus</span>
                        <span className="text-text-bright font-normal">Web & AI Apps</span>
                    </div>
                    <div className="flex justify-between items-center border-border text-[13px] border-b py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">GitHub</span>
                        <span className="text-text-bright font-normal"><a href="#" className="text-accent hover:underline">@vinod</a></span>
                    </div>
                    <div className="flex justify-between items-center text-[13px] py-2.5">
                        <span className="font-mono text-[11px] text-text-dim tracking-[0.07em] uppercase">LinkedIn</span>
                        <span className="text-text-bright font-normal"><a href="#" className="text-accent hover:underline">/in/vinod</a></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
