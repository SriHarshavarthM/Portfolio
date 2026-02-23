"use client";

import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const projects = [
    {
        title: "Accident Incident Responder System",
        description:
            "Real-time CCTV analysis platform with automated severity scoring and emergency dispatch (ERSS-112). Uses end-to-end ML pipeline to detect vehicle collisions, rollovers, and pedestrian impacts with a human-in-the-loop verification dashboard.",
        tags: ["YOLOv8", "PyTorch", "FastAPI", "React", "PostgreSQL", "WebSockets", "OpenCV"],
        accentColor: "#2563EB",
        github: "https://github.com/SriHarshavarthM",
        icon: "🚨",
    },
    {
        title: "DevTrails2026 — Guidewire Hackathon",
        description:
            "Competitive hackathon project developed during the DevTrails2026 Guidewire event. Built innovative solutions under time pressure, showcasing rapid prototyping and teamwork skills.",
        tags: ["Hackathon", "Full Stack", "Innovation", "Teamwork"],
        accentColor: "#22C55E",
        icon: "🏆",
    },
    {
        title: "Employee Portal Website",
        description:
            "Comprehensive Employee Portal supporting over 100 concurrent users, streamlining CRUD operations. Integrated MySQL for efficient data management, reducing data retrieval time by 25%.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "Laravel"],
        accentColor: "#2563EB",
        github: "https://github.com/SriHarshavarthM",
        icon: "👥",
    },
    {
        title: "E-Commerce Platform",
        description:
            "Full-featured E-commerce website with admin and user dashboards, custom products and categories, interactive maps, and Stripe payment integration. Optimized backend reducing server load by 25%.",
        tags: ["Laravel", "Node.js", "MySQL", "Stripe", "REST API"],
        accentColor: "#22C55E",
        github: "https://github.com/SriHarshavarthM",
        icon: "🛒",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <SectionHeading eyebrow="Featured Projects" title="Building real-world solutions with code." centered />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.title} delay={i * 0.1}>
                            <div className="glass-card overflow-hidden h-full flex flex-col hover:-translate-y-1 transition-all duration-300 group">
                                {/* Gradient header bar */}
                                <div className="h-1.5" style={{ background: project.accentColor }} />

                                <div className="p-4 sm:p-6 flex flex-col flex-1">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-2 sm:gap-3">
                                            <span className="text-xl sm:text-2xl">{project.icon}</span>
                                            <h3 className="text-base sm:text-lg font-bold" style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}>
                                                {project.title}
                                            </h3>
                                        </div>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-colors shrink-0 p-1"
                                                style={{ color: "#9CA3AF" }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                                                aria-label={`GitHub repo for ${project.title}`}
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-xs sm:text-sm leading-relaxed mb-4 flex-1" style={{ color: "#9CA3AF" }}>
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {project.tags.map((tag) => (
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
        </section>
    );
}
