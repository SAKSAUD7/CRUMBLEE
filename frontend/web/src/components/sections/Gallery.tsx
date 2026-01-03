'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: "/images/gallery/stack.png", alt: "Stack of cookies", span: "row-span-2" },
    { src: "/images/gallery/hands.png", alt: "Breaking a cookie", span: "col-span-1" },
    { src: "/images/gallery/plate.png", alt: "Plated brownie", span: "row-span-2 col-span-2" },
    { src: "/images/gallery/milk.png", alt: "Brownie with milk", span: "col-span-1" },
];

export default function Gallery() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const imgs = gsap.utils.toArray('.gallery-img');

        imgs.forEach((img: any) => {
            gsap.fromTo(img,
                { opacity: 0, y: 50, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="text-gold uppercase tracking-widest text-sm font-medium">Lifestyle</span>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-espresso mt-4">The Crumb Life</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 sm:gap-4 h-auto md:h-[800px]">
                    {images.map((img, i) => (
                        <div key={i} className={`relative overflow-hidden rounded-2xl h-64 sm:h-auto ${img.span} gallery-img group`}>
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
