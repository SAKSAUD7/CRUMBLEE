'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { openWhatsApp } from "@/utils/whatsapp";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Cookies", href: "#cookies" },
        { name: "Brownies", href: "#brownies" },
        { name: "Our Story", href: "#story" },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-4 md:py-6",
                scrolled ? "bg-cream/80 backdrop-blur-md py-3 md:py-4 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-espresso">
                    CRUMBELLE
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="text-cocoa hover:text-gold transition-colors font-medium text-sm tracking-wide uppercase"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={() => openWhatsApp()}
                        className="px-6 py-2 bg-espresso text-cream rounded-full font-medium text-sm tracking-wide hover:bg-gold transition-colors"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </nav>
    );
}
