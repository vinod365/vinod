"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        tech?: string[];
    } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl glass-card p-8 md:p-12 overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2"
                        >
                            <IoClose size={24} />
                        </button>

                        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
                            PROJECTS
                        </h2>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            {project.title}
                        </h3>

                        <div className="text-slate-400 leading-relaxed mb-8 space-y-4">
                            {project.description.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        {project.tech && (
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
