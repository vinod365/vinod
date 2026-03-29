"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaUser, FaPen } from "react-icons/fa";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Thanks for reaching out! This is a demo form.");
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-24">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.3em] mb-4">
                        Get In Touch
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Let's build something <span className="text-brand-primary">extraordinary</span> together.
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-1 space-y-6"
                    >
                        <div className="glass-card p-6 flex flex-col gap-2 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="text-[40px] font-mono select-none">@</div>
                            </div>
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Protocol: SMTP</span>
                            <span className="text-slate-400 text-sm font-medium">Link established via</span>
                            <a href="mailto:vinod@example.com" className="text-white hover:text-brand-primary transition-colors font-semibold">
                                vinod@example.com
                            </a>
                        </div>
                        <div className="glass-card p-6 flex flex-col gap-2 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="text-[40px] font-mono select-none">LOC</div>
                            </div>
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Signal Origin</span>
                            <span className="text-slate-400 text-sm font-medium">Currently based in</span>
                            <span className="text-white font-semibold flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                India
                            </span>
                        </div>

                        <div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Availability</span>
                            <span className="text-[10px] font-mono text-emerald-500 uppercase flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                                Ready for projects
                            </span>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <FaUser className="text-[10px]" /> Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <FaEnvelope className="text-[10px]" /> Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <FaPen className="text-[10px]" /> Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <FaPen className="text-[10px]" /> Message
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:bg-brand-primary hover:text-white transition-all group"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Sending...</span>
                                ) : (
                                    <>
                                        Send Message
                                        <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
