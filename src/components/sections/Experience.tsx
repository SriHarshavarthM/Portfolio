"use client";

import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const experiences = [
    {
        period: "Nov 2025 – Dec 2025",
        title: "Full Stack Web Developer Intern",
        company: "Friendzion Technologies Pvt. Ltd.",
        description: [
            "Built employee CRUD operations web app with real data from Database and custom login page with two-step authentication.",
            "Developed an E-commerce website with admin and user dashboard, product management, and billing system via Stripe payment gateway.",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Stripe"],
    },
    {
        period: "Startup Experience",
        title: "MERN Stack Developer Intern",
        company: "Yugayatra Retail (OPC) Pvt. Ltd.",
        description: [
            "Developed and deployed Freshin10.com, an e-commerce grocery delivery platform, leveraging the full MERN stack (MongoDB, Express, React, Node.js).",
            "Designed and implemented a highly responsive, user-centric interface, ensuring seamless accessibility and optimized performance across devices.",
            "Engineered an interconnected digital network for a specialized betel leaf market system, streamlining supply chain communication and B2B connectivity.",
        ],
        tags: ["MongoDB", "Express.js", "React", "Node.js", "B2B"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-30"
                    style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.06), transparent 60%)" }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <SectionHeading eyebrow="Experience" title="Professional Journey" centered />

                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #2563EB, rgba(34,197,94,0.3), transparent)" }} />

                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, i) => (
                            <AnimatedSection key={i} delay={i * 0.15}>
                                <div className="relative pl-12 sm:pl-16 md:pl-20">
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute left-2.5 sm:left-4 md:left-6 top-2 w-3 sm:w-4 h-3 sm:h-4 rounded-full"
                                        style={{ background: "#2563EB", boxShadow: "0 0 12px rgba(37,99,235,0.4), 0 0 0 4px #0F172A" }}
                                    />

                                    <div className="glass-card p-4 sm:p-6 hover:-translate-y-1 transition-all duration-300">
                                        <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: "#2563EB" }}>
                                            {exp.period}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-bold mt-2" style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}>
                                            {exp.title}
                                        </h3>
                                        <p className="text-sm font-medium mb-3" style={{ color: "#22C55E" }}>
                                            {exp.company}
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            {exp.description.map((item, j) => (
                                                <li key={j} className="text-xs sm:text-sm leading-relaxed flex gap-2" style={{ color: "#9CA3AF" }}>
                                                    <span className="mt-0.5 shrink-0" style={{ color: "#2563EB" }}>▸</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium"
                                                    style={{ background: "rgba(37,99,235,0.1)", color: "#2563EB", border: "1px solid rgba(37,99,235,0.2)" }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
