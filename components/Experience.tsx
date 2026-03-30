"use client";

import { motion } from "framer-motion";

const Experience = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

    const projects = [
        { name: "Attendance Manager", desc: "Streamlined attendance tracking and management tool for training environments." },
        { name: "Complaints Platform", desc: "Enables marketplace users to raise and track complaints for rapid resolution." },
        { name: "Reinstatement Responsible", desc: "Workflow tool for managing reinstatement processes and team responsibilities." },
        { name: "Company Official Website", desc: "Full company marketing site built for reaching and converting prospects." },
        { name: "Institution Catalog & Research Focus", desc: "Comprehensive catalog and discovery system for institutions and research initiatives." }
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

            <div className="flex flex-col gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={springTransition}
                    className="grid grid-cols-1 md:grid-cols-[192px_1fr] gap-12"
                >
                    <div>
                        <div className="font-mono text-[12px] text-text-dim tracking-[0.04em] mb-1.5 pt-1">Jul 2023 — Present</div>
                        <div className="font-mono text-[10px] text-accent tracking-[0.08em] uppercase opacity-90">Full-time</div>
                    </div>

                    <div>
                        <h3 className="text-[20px] font-semibold text-text-bright tracking-[-0.02em] mb-1">Full Stack Engineer</h3>
                        <div className="text-[13px] text-text-dim mb-3.5">Zonmonk</div>
                        <p className="text-[14px] font-light text-text leading-[1.75] max-w-[540px] mb-4.5">
                            Develop and maintain essential web projects, handling both frontend and backend systems. Collaborate closely with cross-functional teams — developers, designers, and product managers — to implement and champion new features.
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-7">
                            {["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"].map(tag => (
                                <span key={tag} className="font-mono text-[11px] px-2.5 py-1 text-accent bg-accent/7 border border-accent/18 rounded-sm tracking-[0.04em]">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 p-6 md:p-6 bg-accent/4 border border-accent/15 rounded-lg">
                            <div className="font-mono text-[11px] text-accent tracking-[0.1em] uppercase mb-4">Projects shipped at Zonmonk</div>
                            <div className="flex flex-col gap-0.5">
                                {projects.map((proj, idx) => (
                                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-sm hover:bg-accent/5 transition-colors group">
                                        <div className="w-1.25 h-1.25 rounded-full bg-accent opacity-65 shrink-0 mt-2" />
                                        <div>
                                            <div className="text-[14px] font-medium text-text-bright tracking-[-0.01em] mb-0.5">{proj.name}</div>
                                            <div className="text-[13px] text-[#8a9ab0] font-light leading-[1.55]">{proj.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
