'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { openWhatsApp } from "@/utils/whatsapp";

// Simple SVG icons to avoid lucide-react compatibility issues
const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            setMobileMenuOpen(false); // Close mobile menu after navigation
        }
    }

    return (
        <>
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

                    {/* Desktop Menu */}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-espresso p-2"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
                    mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={clsx(
                    "fixed top-0 right-0 h-full w-64 bg-cream z-50 shadow-xl transition-transform duration-300 md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-6 pt-20">
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-cocoa hover:text-gold transition-colors font-medium text-lg tracking-wide uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            openWhatsApp();
                            setMobileMenuOpen(false);
                        }}
                        className="mt-8 px-6 py-3 bg-espresso text-cream rounded-full font-medium text-sm tracking-wide hover:bg-gold transition-colors"
                    >
                        Order Now
                    </button>
                </div>
            </div>
        </>
    );
}
