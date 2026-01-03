'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            contentRef.current,
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }
        );
    }, { scope: footerRef });

    return (
        <footer
            ref={footerRef}
            className="relative w-full h-[60vh] bg-espresso text-cream flex flex-col items-center justify-center overflow-hidden"
        >
            <div
                ref={contentRef}
                className="text-center z-10"
            >
                <span className="text-gold uppercase tracking-widest text-sm mb-4 block">
                    Ready to Indulge?
                </span>
                <h2 className="text-5xl md:text-7xl font-display mb-8">
                    Order via WhatsApp
                </h2>
                <a
                    href="https://wa.me/917411091256"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gold text-espresso font-medium rounded-full hover:scale-105 transition-transform duration-300"
                >
                    Book Your Box
                </a>
            </div>

            {/* Texture or Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </footer>
    );
}
