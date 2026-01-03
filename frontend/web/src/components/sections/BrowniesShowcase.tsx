'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateSectionIn, animateCardHover } from "@/animations/sections";
import { brownies } from "@/data/products";
import Image from "next/image";

export default function BrowniesShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        const validCards = cardsRef.current.filter((el): el is HTMLDivElement => el !== null);
        animateSectionIn(containerRef.current, validCards);
    }, { scope: containerRef });

    const dummyProducts = [1, 2];

    return (
        <section
            id="brownies"
            ref={containerRef}
            className="relative w-full min-h-screen bg-chocolate text-cream py-16 sm:py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <h2 className="relative z-10 text-3xl sm:text-5xl md:text-7xl font-display mb-12 sm:mb-16 md:mb-24 text-center text-cream drop-shadow-sm">
                    Rich Brownies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
                    {brownies.map((brownie, i) => (
                        <div
                            key={brownie.id}
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="group aspect-[3/4] bg-[#4A2F20] rounded-2xl relative p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-[#5C3A28] transition-transform duration-100 ease-linear transform-gpu overflow-hidden"
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;

                                gsap.to(e.currentTarget, {
                                    rotationY: x * 8, // Slower rotation for heavier feel
                                    rotationX: -y * 8,
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
                            <div className="w-full h-1/2 bg-black/20 rounded-full blur-2xl absolute top-1/4 left-0 right-0 mx-auto" />

                            <div className="relative z-10 w-full h-3/5 mb-4 flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={brownie.imagePath}
                                        alt={brownie.title}
                                        fill
                                        className="object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            <div className="relative z-20 text-center mt-auto pb-4">
                                <h3 className="text-2xl font-display text-cream">{brownie.title}</h3>
                                <p className="text-cream/80 mt-2 text-sm">{brownie.description}</p>
                                <p className="text-gold mt-4 font-medium tracking-widest text-lg">₹{brownie.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
