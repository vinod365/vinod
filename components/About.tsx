"use client";

import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-12 px-6 md:px-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl"
            >
                <h2 className="text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">
                    ABOUT
                </h2>
                <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-normal">
                    <p>
                        Back in 2020, I began exploring the field of software development. Fast-forward to today,
                        and I've had the privilege of building software for a startup.
                    </p>
                    <p>
                        What I enjoy most is creating software that strikes the perfect balance between design
                        and engineering—projects that not only look great but are also built to perform well.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
