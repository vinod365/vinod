"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const springTransition = {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    };

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
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Thanks for reaching out! Your message has been sent.");
        setFormState({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section id="contact" className="py-[88px] border-t border-border">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={springTransition}
                className="flex items-center gap-3.5 mb-[52px]"
            >
                <span className="font-mono text-[12px] text-accent opacity-80">05</span>
                <span className="text-[12px] font-medium text-text-bright tracking-[0.12em] uppercase">Get In Touch</span>
                <div className="flex-1 h-px bg-border"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ...springTransition, delay: 0.1 }}
                >
                    <h2 className="text-[clamp(24px,3.5vw,36px)] font-semibold text-text-bright tracking-[-0.03em] leading-[1.15] mb-3.5">
                        Let&apos;s build something <span className="text-accent">great</span> together.
                    </h2>
                    <p className="text-[14px] font-light text-[#8a9ab0] leading-[1.75] max-w-[310px] mb-8">
                        My inbox is always open. Whether you have a role, an interesting project, or just want to connect — I&apos;ll get back to you promptly.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a href="mailto:vinod@example.com" className="inline-flex items-center gap-2.5 font-mono text-[13px] text-[#a0b0c4] hover:text-accent transition-colors group">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 shrink-0 group-hover:opacity-100"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
                            vinod@example.com
                        </a>
                        <a href="#" className="inline-flex items-center gap-2.5 font-mono text-[13px] text-[#a0b0c4] hover:text-accent transition-colors group">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 shrink-0 group-hover:opacity-100"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            linkedin.com/in/vinod
                        </a>
                        <a href="#" className="inline-flex items-center gap-2.5 font-mono text-[13px] text-[#a0b0c4] hover:text-accent transition-colors group">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 shrink-0 group-hover:opacity-100"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                            github.com/vinod
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ ...springTransition, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.25">
                                <label className="font-mono text-[11px] text-[#8a9ab0] tracking-[0.09em] uppercase">Name</label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    placeholder="Your name"
                                    className="bg-[#111720] border border-white/10 text-text-bright font-sans text-[14px] font-light px-3.25 py-2.5 rounded-sm outline-none focus:border-accent/45 transition-colors placeholder:text-[#5a6a80]"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-1.25">
                                <label className="font-mono text-[11px] text-[#8a9ab0] tracking-[0.09em] uppercase">Email</label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    placeholder="your@email.com"
                                    className="bg-[#111720] border border-white/10 text-text-bright font-sans text-[14px] font-light px-3.25 py-2.5 rounded-sm outline-none focus:border-accent/45 transition-colors placeholder:text-[#5a6a80]"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.25">
                            <label className="font-mono text-[11px] text-[#8a9ab0] tracking-[0.09em] uppercase">Subject</label>
                            <select
                                value={formState.subject}
                                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                                className="bg-[#111720] border border-white/10 text-text-bright font-sans text-[14px] font-light px-3.25 py-2.5 rounded-sm outline-none focus:border-accent/45 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2210%22_height=%226%22%3E%3Cpath_d=%22M1_1l4_4_4-4%22_stroke=%22%234a5568%22_stroke-width=%221.5%22_fill=%22none%22_stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_12px_center] pr-8"
                                required
                            >
                                <option value="" disabled>Select a topic</option>
                                <option value="job">Job opportunity</option>
                                <option value="collab">Project collaboration</option>
                                <option value="freelance">Freelance work</option>
                                <option value="hi">Just saying hi</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.25">
                            <label className="font-mono text-[11px] text-[#8a9ab0] tracking-[0.09em] uppercase">Message</label>
                            <textarea
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                                placeholder="Tell me about your project or role..."
                                className="bg-[#111720] border border-white/10 text-text-bright font-sans text-[14px] font-light px-3.25 py-2.5 rounded-sm outline-none focus:border-accent/45 transition-colors resize-none min-h-[100px] placeholder:text-[#5a6a80]"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg text-[14px] font-semibold rounded-md hover:opacity-88 hover:-translate-y-px transition-all self-start disabled:opacity-50 disabled:translate-y-0"
                        >
                            {isSubmitting ? "Sending..." : "Send message →"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
