"use client";

import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

export default function Research() {
    return (
        <section id="research" className="section-padding relative">
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.04), transparent 60%)"
            }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <SectionHeading eyebrow="Research & Publications" title="Exploring the frontiers of AI." centered />

                <AnimatedSection delay={0.1}>
                    <div className="max-w-3xl mx-auto">
                        <div className="glass-card p-5 sm:p-8 md:p-10 relative overflow-hidden">
                            {/* Decorative orb */}
                            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 opacity-10 pointer-events-none" style={{
                                background: "radial-gradient(circle, #22C55E, transparent 70%)",
                            }} />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl sm:text-3xl">📄</span>
                                    <span
                                        className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                                        style={{ color: "#22C55E", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
                                    >
                                        Research Paper
                                    </span>
                                </div>

                                <h3
                                    className="text-lg sm:text-xl md:text-2xl font-bold mb-4 leading-snug"
                                    style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}
                                >
                                    Privacy-Aware Prompt Masking Interface for
                                    Secure Large Language Model Interactions
                                </h3>

                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#9CA3AF" }}>
                                    A novel interface design for protecting sensitive information in
                                    prompts sent to Large Language Models. This research presents a
                                    privacy-aware masking system that automatically detects and obfuscates
                                    personally identifiable information (PII) before LLM processing,
                                    ensuring secure and confidential AI interactions.
                                </p>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                                    {[
                                        "LLM Security",
                                        "Prompt Privacy",
                                        "PII Detection",
                                        "NLP",
                                        "Data Masking",
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-medium"
                                            style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: "#9CA3AF" }}>
                                    <svg className="w-4 h-4" style={{ color: "#2563EB" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>Sri Harshavarth M — Chennai Institute of Technology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
