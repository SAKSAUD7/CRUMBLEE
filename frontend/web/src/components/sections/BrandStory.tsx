'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        // Split text or just animate lines for now
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "top 20%",
                    scrub: true,
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section
            id="story"
            ref={containerRef}
            className="relative w-full min-h-[80vh] bg-beige flex items-center justify-center p-6"
        >
            <div className="max-w-4xl text-center">
                <span className="block text-gold uppercase tracking-widest mb-6 font-medium">
                    Our Philosophy
                </span>
                <p
                    ref={textRef}
                    className="text-3xl md:text-5xl md:leading-tight font-display text-espresso"
                >
                    We believe in the art of the crumb. <br />
                    Every batch is a cinematic expression of flavor, <br />
                    baked with obsession and served with elegance.
                </p>
            </div>
        </section>
    );
}
