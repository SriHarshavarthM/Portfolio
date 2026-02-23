"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "backdrop-blur-xl border-b shadow-lg shadow-black/30"
                    : "bg-transparent"
                }`}
            style={scrolled ? { background: "rgba(15, 23, 42, 0.85)", borderColor: "#1F2933" } : {}}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-lg sm:text-xl font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}
                >
                    Sri<span className="gradient-text">Harsha</span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium transition-colors duration-200 relative group"
                            style={{ color: "#9CA3AF" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#E5E7EB")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300" style={{ background: "#2563EB" }} />
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold px-5 py-2.5 rounded-full text-white transition-all duration-200 hover:-translate-y-0.5"
                        style={{ background: "#2563EB", boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)" }}
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 rounded-full"
                        style={{ background: "#E5E7EB" }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-6 h-0.5 rounded-full"
                        style={{ background: "#E5E7EB" }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                        className="block w-6 h-0.5 rounded-full"
                        style={{ background: "#E5E7EB" }}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden backdrop-blur-xl overflow-hidden"
                        style={{ background: "rgba(15, 23, 42, 0.95)", borderBottom: "1px solid #1F2933" }}
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="text-base font-medium transition-colors"
                                    style={{ color: "#9CA3AF" }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-semibold px-5 py-2.5 rounded-full text-white text-center mt-2"
                                style={{ background: "#2563EB" }}
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
