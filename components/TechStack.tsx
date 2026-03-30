"use client";

import { motion } from "framer-motion";

const TechStack = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    const categories = [
        {
            label: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"]
        },
        {
            label: "Backend",
            skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"]
        },
        {
            label: "Infrastructure & Tooling",
            skills: ["Azure", "Docker", "Git / GitHub", "CI/CD", "Linux / SSH"]
        },
        {
            label: "AI / ML Integration",
            skills: ["OpenAI API", "LLM Pipelines", "RAG Systems", "Vector Databases", "Voice AI"]
        }
    ];

    return (
        <section className="py-[88px] border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="flex items-center gap-3.5 mb-[52px]"
            >
                <span className="font-mono text-[12px] text-accent opacity-80">02</span>
                <span className="text-[12px] font-medium text-text-bright tracking-[0.12em] uppercase">Tech Stack</span>
                <div className="flex-1 h-px bg-border"></div>
            </motion.div>

            <div className="flex flex-col gap-7">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ ...springTransition, delay: idx * 0.1 }}
                    >
                        <div className="font-mono text-[11px] text-text-dim tracking-[0.09em] uppercase mb-2.5">{cat.label}</div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3.5 py-1.5 text-[13px] font-normal text-text bg-surface border border-border rounded-sm cursor-default hover:border-accent/30 hover:text-accent hover:bg-accent/6 transition-all duration-150"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
