'use client';

// import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ArrowUpRight = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function InstagramFeed() {
    return (
        <section className="py-24 bg-beige border-t border-espresso/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="text-cocoa uppercase tracking-widest text-sm font-medium mb-4 block">Follow Us</span>
                <a
                    href="https://www.instagram.com/_crumb.elle_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-3xl md:text-5xl font-display text-espresso hover:text-gold transition-colors"
                >
                    @_crumb.elle_ <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
                </a>

                <div className="mt-16 flex justify-center gap-4 md:gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
                    {/* decorative visual strip of existing products pretending to be insta posts */}
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <div key={i} className="w-32 h-32 md:w-48 md:h-48 relative rounded-xl overflow-hidden shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src={`/images/products/${i % 2 === 0 ? 'cookie-double-choco' : 'brownie-fudge'}.png`}
                                alt="Instagram post"
                                fill
                                className="object-cover bg-cream"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
