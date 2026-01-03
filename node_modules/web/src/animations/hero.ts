import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHeroEntrance = (
    container: HTMLDivElement | null,
    headline: HTMLHeadingElement | null,
    subtext: HTMLParagraphElement | null
) => {
    if (!container || !headline) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
        container,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 }
    )
        .fromTo(
            headline,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.8"
        )
        .fromTo(
            subtext,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            "-=0.6"
        );

    return tl;
};

export const setupHeroScroll = (
    section: HTMLDivElement | null,
    content: HTMLDivElement | null
) => {
    if (!section || !content) return;

    // Pin the hero section
    ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%", // Pin for 1.5 screen heights
        pin: true,
        scrub: 1,
    });

    // Parallax / scale effect on scroll
    gsap.to(content, {
        y: -100,
        scale: 0.9,
        opacity: 0.5,
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
        },
    });
};
