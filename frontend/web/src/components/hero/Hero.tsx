'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateHeroEntrance, setupHeroScroll } from "@/animations/hero";

import dynamic from 'next/dynamic';
import { isLowPowerDevice } from "@/utils/performance";
import { openWhatsApp } from "@/utils/whatsapp";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import('@/components/three/Scene'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-10" />
});

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const [shouldRender3D, setShouldRender3D] = useState(false);

    useEffect(() => {
        // Only enable 3D on capable devices
        if (!isLowPowerDevice()) {
            setShouldRender3D(true);
        }
    }, []);

    useGSAP(() => {
        animateHeroEntrance(sectionRef.current, headlineRef.current, subtextRef.current);
        setupHeroScroll(sectionRef.current, contentRef.current);
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cream text-espresso"
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-cream to-beige opacity-50" />

            {/* 3D Scene Container */}
            {shouldRender3D && <Scene />}

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-30 text-center flex flex-col items-center max-w-5xl px-4 pointer-events-none"
            >
                <div className="pointer-events-auto">
                    <span className="block text-gold text-lg md:text-xl font-medium tracking-[0.2em] mb-4 uppercase">
                        Est. 2024
                    </span>
                    <h1
                        ref={headlineRef}
                        className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-display font-light tracking-tighter mb-8"
                    >
                        CRUMBELLE
                    </h1>
                    <p
                        ref={subtextRef}
                        className="text-lg md:text-2xl text-cocoa max-w-md font-body font-light mb-8"
                    >
                        Handcrafted cinematic cookies & brownies for the modern palate.
                    </p>

                    <button
                        onClick={() => openWhatsApp()}
                        className="px-8 py-4 bg-gold text-cream font-display text-xl uppercase tracking-widest hover:bg-espresso transition-colors duration-300"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </section>
    );
}
