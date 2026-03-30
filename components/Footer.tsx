"use client";

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-border px-10 py-7 max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <span className="font-mono text-[13px] text-text-dim">vinod.dev</span>

            <div className="flex gap-6">
                <a href="#" className="font-mono text-[12px] text-text-dim hover:text-accent tracking-[0.04em] transition-colors">GitHub</a>
                <a href="#" className="font-mono text-[12px] text-text-dim hover:text-accent tracking-[0.04em] transition-colors">LinkedIn</a>
                <a href="#" className="font-mono text-[12px] text-text-dim hover:text-accent tracking-[0.04em] transition-colors">Resume</a>
            </div>

            <span className="font-mono text-[11px] text-text-dim opacity-70">© 2026 Vinod</span>
        </footer>
    );
};

export default Footer;
