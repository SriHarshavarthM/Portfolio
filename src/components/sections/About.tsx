"use client";

import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const highlights = [
    { value: "410+", label: "LeetCode Solved" },
    { value: "1144", label: "Codeforces Rating" },
    { value: "4+", label: "Projects Built" },
    { value: "12+", label: "Google Cloud Badges" },
];

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    <div>
                        <SectionHeading
                            eyebrow="About Me"
                            title="Driven by curiosity, powered by algorithms."
                        />
                        <AnimatedSection delay={0.1}>
                            <p className="leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>
                                I&apos;m Sri Harshavarth M, a B.Tech Information Technology student at
                                Chennai Institute of Technology with a strong passion for building
                                full-stack web applications and solving real-world problems through
                                thoughtful software solutions.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.2}>
                            <p className="leading-relaxed mb-4" style={{ color: "#9CA3AF" }}>
                                An avid competitive programmer, I&apos;ve solved over 410 problems on
                                LeetCode (Top 15%) and maintain a Codeforces rating of 1144. I thrive
                                on algorithmic challenges and translate that problem-solving mindset
                                into building scalable, efficient systems.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.3}>
                            <p className="leading-relaxed" style={{ color: "#9CA3AF" }}>
                                With experience across the MERN stack, ML pipelines, and cloud
                                technologies, I continuously adapt to new tools and frameworks to
                                deliver elegant, user-centric solutions.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.2}>
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="glass-card p-4 sm:p-6 text-center hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="block text-2xl sm:text-3xl font-bold gradient-text mb-1">
                                        {item.value}
                                    </span>
                                    <span className="text-xs sm:text-sm" style={{ color: "#9CA3AF" }}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
