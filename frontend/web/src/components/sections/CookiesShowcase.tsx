'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateSectionIn, animateCardHover } from "@/animations/sections";
import { cookies } from "@/data/products";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function CookiesShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Filter out nulls
        const validCards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
        animateSectionIn(containerRef.current, validCards);
    }, { scope: containerRef });

    const dummyProducts = [1, 2, 3];

    return (
        <section
            id="cookies"
            ref={containerRef}
            className="relative w-full min-h-screen bg-cream text-espresso py-32"
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="relative z-10 text-5xl md:text-7xl font-display mb-24 text-center text-espresso drop-shadow-sm">
                    The Cookie Collection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {cookies.map((cookie, i) => (
                        <div
                            key={cookie.id}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="group aspect-[3/4] bg-white rounded-2xl relative p-8 flex flex-col justify-between cursor-pointer transition-transform duration-100 ease-linear transform-gpu overflow-hidden"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;

                                gsap.to(e.currentTarget, {
                                    rotationY: x * 10,
                                    rotationX: -y * 10,
                                    duration: 0.5,
                                    ease: "power2.out",
                                    transformPerspective: 1000,
                                    transformOrigin: "center"
                                });
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, {
                                    rotationY: 0,
                                    rotationX: 0,
                                    duration: 0.5,
                                    ease: "power2.out"
                                });
                                animateCardHover(e.currentTarget, false);
                            }}
                            onMouseEnter={(e) => animateCardHover(e.currentTarget, true)}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="w-full h-1/2 bg-beige/30 rounded-full blur-2xl absolute top-1/4 left-0 right-0 mx-auto" />

                            <div className="relative z-10 w-full aspect-square mb-4">
                                <Image
                                    src={cookie.imagePath}
                                    alt={cookie.title}
                                    fill
                                    className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="relative z-10 text-center mt-auto">
                                <h3 className="text-2xl font-display">{cookie.title}</h3>
                                <p className="text-cocoa mt-2 text-sm">{cookie.description}</p>
                                <p className="text-gold mt-4 font-medium tracking-widest">₹{cookie.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
