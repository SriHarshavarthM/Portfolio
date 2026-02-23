"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    centered?: boolean;
}

export default function SectionHeading({
    eyebrow,
    title,
    centered = false,
}: SectionHeadingProps) {
    return (
        <AnimatedSection
            className={`mb-8 sm:mb-12 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}
        >
            <span
                className="inline-block text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "#2563EB" }}
            >
                {eyebrow}
            </span>
            <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "#E5E7EB" }}
            >
                {title}
            </h2>
        </AnimatedSection>
    );
}
