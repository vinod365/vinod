"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
    const [scrolledLists, setScrolledLists] = useState<Record<number, boolean>>({});

    const handleScroll = (id: number, e: React.UIEvent<HTMLDivElement>) => {
        const isScrolled = e.currentTarget.scrollTop > 5;
        setScrolledLists(prev => ({ ...prev, [id]: isScrolled }));
    };

    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    const experiences = [
        {
            company: "Ducktale IT Service",
            role: "Full Stack Engineer",
            period: "Nov 2025 — Present",
            type: "Full-time",
            desc: "Architecting sovereign AI infrastructures and enterprise-grade platforms with a focus on data security, regulatory automation, and global connectivity.",
            tags: ["Next.js", "TypeScript", "Node.js", "AI Agents", "Cybersecurity"],
            projects: [
                { name: "Safechats (Vective)", desc: "Engineering sovereign, secure AI agents for high-stakes enterprise workflows, prioritizing data sovereignty and trustworthy autonomous agents." },
                { name: "Adept EPR AI", desc: "Developing an AI-driven platform for managing Extended Producer Responsibility (EPR) compliance, automating regulatory navigation for global brands." },
                { name: "Telgea", desc: "Building a Stockholm-based telecom platform that centralizes global mobile operations and automates connectivity management for international businesses." }
            ]
        },
        {
            company: "Zenmonk",
            role: "Full Stack Engineer",
            period: "Jul 2023 — Oct 2025",
            type: "Full-time",
            desc: "Worked across the full product lifecycle, handling both frontend and backend systems for essential startup web projects.",
            tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
            projects: [
                { name: "Attendance Manager", desc: "Streamlined attendance tracking and management tool for training environments." },
                { name: "Complaints Platform", desc: "Enables marketplace users to raise and track complaints." },
                { name: "Reinstatement Responsible", desc: "Workflow tool for managing reinstatement processes." },
                { name: "Company Official Website", desc: "Full marketing site built for conversion." },
                { name: "Institution Catalog", desc: "Comprehensive catalog and discovery system for institutions." },
                { name: "Admin Dashboard v2", desc: "Real-time analytics and user management dashboard." },
                { name: "Inventory Sync Service", desc: "Automated service for syncing stocks across market APIs." }
            ]
        }
    ];

    return (
        <section id="experience" className="py-[88px] border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="flex items-center gap-3.5 mb-[52px]"
            >
                <span className="font-mono text-[12px] text-accent opacity-80">03</span>
                <span className="text-[12px] font-medium text-text-bright tracking-[0.12em] uppercase">Experience</span>
                <div className="flex-1 h-px bg-border"></div>
            </motion.div>

            <div className="flex flex-col gap-20">
                {experiences.map((exp, expIdx) => (
                    <motion.div
                        key={expIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={springTransition}
                        className="grid grid-cols-1 md:grid-cols-[192px_1fr] gap-12"
                    >
                        <div>
                            <div className="font-mono text-[12px] text-text-dim tracking-[0.04em] mb-1.5 pt-1">{exp.period}</div>
                            <div className="font-mono text-[10px] text-accent tracking-[0.08em] uppercase opacity-90">{exp.type}</div>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-semibold text-text-bright tracking-[-0.02em] mb-1">{exp.role}</h3>
                            <div className="text-[13px] text-text-dim mb-3.5">{exp.company}</div>
                            <p className="text-[14px] font-light text-text leading-[1.75] max-w-[540px] mb-4.5">
                                {exp.desc}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mb-7">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="font-mono text-[11px] px-2.5 py-1 text-accent bg-accent/7 border border-accent/18 rounded-sm tracking-[0.04em]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {exp.projects.length > 0 && (
                                <div className="mt-7 p-4 md:p-8 bg-accent/4 border border-accent/15 rounded-lg relative overflow-hidden group/list">
                                    <div className="font-mono text-[11px] text-accent tracking-[0.1em] uppercase mb-4">Projects at {exp.company}</div>
                                    <div
                                        onScroll={(e) => handleScroll(expIdx, e)}
                                        className="flex flex-col gap-0.5 overflow-y-auto max-h-[300px] no-scrollbar scroll-smooth"
                                    >
                                        {exp.projects.map((proj, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 p-2.5 md:gap-3.5 md:p-3.5 rounded-sm hover:bg-accent/5 transition-colors group">
                                                <div className="w-1.25 h-1.25 rounded-full bg-accent opacity-65 shrink-0 mt-2" />
                                                <div>
                                                    <div className="text-[14px] font-medium text-text-bright tracking-[-0.01em] mb-0.5">{proj.name}</div>
                                                    <div className="text-[13px] text-[#8a9ab0] font-light leading-[1.55]">{proj.desc}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={`absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/80 to-transparent backdrop-blur-[1px] pointer-events-none transition-all duration-500 flex items-end justify-center pb-3 ${scrolledLists[expIdx] ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"} group-hover/list:opacity-0`}>
                                        {exp.projects.length >= 3 && (
                                            <div className="flex flex-col items-center gap-1.5">
                                                <div className="w-px h-4 bg-gradient-to-b from-transparent to-accent/40 animate-bounce" />
                                                <span className="font-mono text-[8px] text-accent tracking-[0.2em] uppercase bg-[#0a0e14] px-2.5 py-0.5 rounded-full border border-white/5">
                                                    Scroll to view more
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
