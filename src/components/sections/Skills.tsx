"use client";

import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const skillCategories = [
    {
        title: "Frontend",
        icon: "🎨",
        skills: ["React.js", "Next.js", "HTML5 / CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "FastAPI", "Laravel", "RESTful APIs", "WebSockets"],
    },
    {
        title: "Database & Cloud",
        icon: "☁️",
        skills: ["MongoDB", "MySQL", "PostgreSQL", "AWS Services", "Render / Vercel", "Docker"],
    },
    {
        title: "ML / AI",
        icon: "🧠",
        skills: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Machine Learning", "Federated Learning"],
    },
    {
        title: "Programming",
        icon: "💻",
        skills: ["Java", "C / C++", "Python", "JavaScript", "Data Structures", "Algorithms"],
    },
    {
        title: "Tools",
        icon: "🔧",
        skills: ["Git / GitHub", "VS Code", "Postman", "Android Studio", "SQL Workbench", "Packet Tracer"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative">
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "linear-gradient(180deg, transparent, rgba(37,99,235,0.02) 50%, transparent)"
            }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <SectionHeading eyebrow="Skills & Tools" title="A versatile stack for modern development." centered />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {skillCategories.map((cat, i) => (
                        <AnimatedSection key={cat.title} delay={i * 0.08}>
                            <div className="glass-card p-4 sm:p-6 h-full hover:-translate-y-1 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                    <span className="text-xl sm:text-2xl">{cat.icon}</span>
                                    <h3 className="text-base sm:text-lg font-bold" style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}>
                                        {cat.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors duration-300"
                                            style={{ background: "rgba(31,41,51,0.8)", color: "#9CA3AF", border: "1px solid #1F2933" }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
