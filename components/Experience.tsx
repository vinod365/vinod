"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { FaChevronRight } from "react-icons/fa";

const EXPERIENCE_DATA = [
    {
        period: "JULY 2023 - PRESENT",
        role: "Full Stack Engineer",
        company: "Zenmonk",
        description: "Develop and maintain essential web projects, handling both frontend and backend tasks. Collaborate closely with cross-functional teams, including developers, designers, and product managers, to implement and champion new features.",
        projects: [
            {
                title: "Attendance Manager",
                description: "A tool was requested to assist teachers in tracking students' attendance, including the registration of absences, lateness, and releases for each class session. The tool should also allow teachers to view the total number and percentage of absences for each type of session configured. \n\nMy main responsibility was implementing the frontend of the application using Next.js, MUI, and Redux Toolkit for state management.",
                tech: ["Next.js", "MUI", "Redux Toolkit"]
            },
            {
                title: "Complaints",
                description: "This tool enables users to file complaints about ongoing corruption. It features two interfaces: one for users to submit complaints and another for managers to review and manage the received complaints. \n\n My primary responsibility is to develop the frontend using Next.js, leveraging Material-UI (MUI) for styling and Redux for global state management.",
                tech: ["Next.js", "MUI", "Redux"]
            },
            {
                title: "Reinstatement Responsible",
                description: "This feature enables the addition of reinstatement responsible parties and assigns specific permissions to each. \n\n My role is to refactor the existing project, transitioning it from a classical architecture to a vertical slice architecture (Feature Slice Design - FSD).",
                tech: ["Next.js", "FSD Architecture"]
            },
            {
                title: "Company Official Website",
                description: "The company’s official website was an exciting project developed entirely from scratch. It involved close collaboration with the UI/UX team to deliver the initial version while designing and coding complex UI elements. \n\n My primary responsibility was to handle both the design and development, completing the entire project from start to finish.",
                tech: ["Next.js", "Custom CSS", "UI/UX"]
            },
            {
                title: "Institution catalog and Research focus",
                description: "These two features enable CRUD operations on an entity and served as our first exposure to microservice architecture.",
                tech: ["Microservices", "CRUD", "API Design"]
            }
        ]
    },
    {
        period: "JULY 2021 - JULY 2023",
        role: "B.Tech Computer Science Engineering",
        company: "LPU",
        description: "Developed a strong understanding of core computer science principles, software development practices, and effective problem-solving techniques.",
        highlights: ["8.1 CGPA"]
    }
];

const Experience = () => {
    const [selectedProject, setSelectedProject] = useState<null | any>(null);

    return (
        <section id="experience" className="py-12 px-6 md:px-24">
            <div className="max-w-4xl">
                <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-12">
                    TIMELINE
                </h2>

                <div className="space-y-12">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <motion.div
                            key={exp.period}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                                <span className="text-xs font-bold tracking-widest text-slate-500 min-w-[150px] pt-1">
                                    {exp.period}
                                </span>

                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {exp.role} · <span className="text-slate-300">{exp.company}</span>
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
                                        {exp.description}
                                    </p>

                                    {exp.projects && (
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={() => setSelectedProject(exp.projects![0])} // Just a placeholder highlight or first project
                                                className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-xs font-bold text-slate-300 hover:bg-white/5 transition-colors"
                                            >
                                                Featured Projects <FaChevronRight size={10} className="mt-0.5" />
                                            </button>
                                            <div className="flex flex-wrap gap-2 pt-2 md:pt-0">
                                                {["JavaScript", "TypeScript", "React", "Node"].map(t => (
                                                    <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-[10px] font-bold tracking-wider uppercase">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {exp.projects && (
                                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {exp.projects.map((proj) => (
                                                <button
                                                    key={proj.title}
                                                    onClick={() => setSelectedProject(proj)}
                                                    className="text-left glass-card p-4 hover:border-brand-primary transition-all group/btn"
                                                >
                                                    <h4 className="text-sm font-bold text-white mb-1 transition-colors group-hover/btn:text-brand-primary">
                                                        {proj.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-500 line-clamp-1">
                                                        {proj.description.slice(0, 100)}...
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {exp.highlights && (
                                        <div className="flex gap-2">
                                            {exp.highlights.map(h => (
                                                <span key={h} className="px-3 py-1 bg-white/5 text-slate-300 rounded-full text-xs font-bold">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Experience;
