"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    { value: "410+", label: "LeetCode Problems" },
    { value: "8.58", label: "CGPA" },
    { value: "12+", label: "Tech Tools" },
];

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute -top-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full opacity-15"
                    style={{
                        background: "radial-gradient(circle, #2563EB, transparent 70%)",
                        animation: "float 20s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute -bottom-48 -left-24 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full opacity-10"
                    style={{
                        background: "radial-gradient(circle, #22C55E, transparent 70%)",
                        animation: "float 25s ease-in-out infinite reverse",
                    }}
                />
                <div
                    className="absolute top-1/3 left-1/2 w-56 sm:w-72 h-56 sm:h-72 rounded-full opacity-8"
                    style={{
                        background: "radial-gradient(circle, #2563EB, transparent 70%)",
                        animation: "pulse-glow 8s ease-in-out infinite",
                    }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4"
                            style={{ color: "#2563EB" }}
                        >
                            Full-Stack Developer & ML Engineer
                        </motion.span>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
                            style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}
                        >
                            Building Scalable Systems &{" "}
                            <span className="gradient-text">Intelligent Interfaces.</span>
                        </h1>

                        <p className="text-base sm:text-lg max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0" style={{ color: "#9CA3AF" }}>
                            Full-Stack Developer specializing in the MERN stack and Machine
                            Learning integrations. Passionate about competitive programming
                            and crafting elegant solutions to complex problems.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: "#2563EB", boxShadow: "0 4px 20px rgba(37, 99, 235, 0.35)" }}
                            >
                                View My Work
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                                style={{ color: "#E5E7EB", border: "1px solid #1F2933" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.background = "rgba(37,99,235,0.08)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1F2933"; e.currentTarget.style.background = "transparent"; }}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-12">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="glass-card px-3 sm:px-4 py-3 text-center"
                                >
                                    <span className="block text-xl sm:text-2xl font-bold gradient-text">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] sm:text-xs" style={{ color: "#9CA3AF" }}>{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Profile image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]">
                            {/* Glow */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-30 blur-3xl"
                                style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.4), rgba(34,197,94,0.2))" }}
                            />
                            <div className="relative glass-card p-2.5 sm:p-3 overflow-hidden">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Sri Harshavarth M"
                                    width={400}
                                    height={500}
                                    priority
                                    className="rounded-2xl object-cover w-full"
                                    style={{ aspectRatio: "4/5" }}
                                />
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2.5 sm:mt-3">
                                    {["Full Stack Developer", "ML Engineer", "Problem Solver"].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium"
                                            style={{ background: "rgba(37, 99, 235, 0.1)", color: "#2563EB", border: "1px solid rgba(37, 99, 235, 0.2)" }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
