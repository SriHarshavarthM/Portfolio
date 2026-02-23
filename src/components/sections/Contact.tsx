"use client";

import { useState } from "react";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/SriHarshavarthM",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sri-harshavarth-m",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "LeetCode",
        href: "https://leetcode.com/u/Sri_Harshavarth/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
            </svg>
        ),
    },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:sriharshavarth@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.email}`;
        window.open(mailtoLink, "_blank");
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,235,0.04), transparent 60%)"
            }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
                <SectionHeading eyebrow="Get In Touch" title="Let's build something great together." centered />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                    {/* Contact form */}
                    <AnimatedSection>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#9CA3AF" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                                    style={{ background: "#111827", border: "1px solid #1F2933", color: "#E5E7EB" }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(37,99,235,0.15)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#1F2933"; e.currentTarget.style.boxShadow = "none"; }}
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#9CA3AF" }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200"
                                    style={{ background: "#111827", border: "1px solid #1F2933", color: "#E5E7EB" }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(37,99,235,0.15)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#1F2933"; e.currentTarget.style.boxShadow = "none"; }}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#9CA3AF" }}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-200 resize-none"
                                    style={{ background: "#111827", border: "1px solid #1F2933", color: "#E5E7EB" }}
                                    onFocus={(e) => { e.currentTarget.style.borderColor = "#2563EB"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(37,99,235,0.15)"; }}
                                    onBlur={(e) => { e.currentTarget.style.borderColor = "#1F2933"; e.currentTarget.style.boxShadow = "none"; }}
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: "#2563EB", boxShadow: "0 4px 14px rgba(37,99,235,0.3)" }}
                            >
                                Send Message
                            </button>
                        </form>
                    </AnimatedSection>

                    {/* Contact info */}
                    <AnimatedSection delay={0.15}>
                        <div className="space-y-4 sm:space-y-6">
                            <div className="glass-card p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}>
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(37,99,235,0.1)" }}>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#2563EB" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] sm:text-xs uppercase tracking-wider" style={{ color: "#9CA3AF" }}>Email</p>
                                            <a
                                                href="mailto:sriharshavarth@gmail.com"
                                                className="text-xs sm:text-sm font-medium transition-colors"
                                                style={{ color: "#E5E7EB" }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = "#E5E7EB")}
                                            >
                                                sriharshavarth@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(37,99,235,0.1)" }}>
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#2563EB" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] sm:text-xs uppercase tracking-wider" style={{ color: "#9CA3AF" }}>Education</p>
                                            <p className="text-xs sm:text-sm font-medium" style={{ color: "#E5E7EB" }}>
                                                Chennai Institute of Technology
                                            </p>
                                            <p className="text-[10px] sm:text-xs" style={{ color: "#9CA3AF" }}>B.Tech IT • Sep 2024 – May 2028</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social links */}
                            <div className="glass-card p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}>
                                    Find Me Online
                                </h3>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {socials.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200"
                                            style={{ background: "rgba(31,41,51,0.8)", border: "1px solid #1F2933", color: "#9CA3AF" }}
                                            onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; e.currentTarget.style.borderColor = "rgba(37,99,235,0.3)"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.color = "#9CA3AF"; e.currentTarget.style.borderColor = "#1F2933"; }}
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                            <span className="text-xs sm:text-sm font-medium">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
