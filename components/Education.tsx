"use client";

import { motion } from "framer-motion";

const Education = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    return (
        <section className="py-[88px] border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="flex items-center gap-3.5 mb-[52px]"
            >
                <span className="font-mono text-[12px] text-accent opacity-80">04</span>
                <span className="text-[12px] font-medium text-text-bright tracking-[0.12em] uppercase">Education</span>
                <div className="flex-1 h-px bg-border"></div>
            </motion.div>

            <div className="flex flex-col gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springTransition}
                    className="grid grid-cols-1 md:grid-cols-[192px_1fr] gap-12"
                >
                    <div className="font-mono text-[12px] text-text-dim pt-1">2021 — 2025</div>
                    <div>
                        <h3 className="text-[17px] font-medium text-text-bright tracking-[-0.015em] mb-1.5">B.Tech — Computer Science Engineering</h3>
                        <div className="text-[13px] text-text-dim font-light">Lovely Professional University (LPU)</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
