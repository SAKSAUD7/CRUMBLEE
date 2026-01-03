import gsap from "gsap";

export const animateCardHover = (
    card: HTMLDivElement,
    isHovering: boolean
) => {
    gsap.to(card, {
        y: isHovering ? -15 : 0,
        scale: isHovering ? 1.02 : 1,
        boxShadow: isHovering
            ? "0px 20px 40px -10px rgba(43, 30, 22, 0.2)"
            : "0px 10px 20px -10px rgba(43, 30, 22, 0.1)",
        duration: 0.4,
        ease: "power2.out",
    });
};

export const animateSectionIn = (
    container: HTMLDivElement | null,
    items: HTMLDivElement[]
) => {
    if (!container) return;

    gsap.fromTo(
        items,
        { y: 100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start: "top 70%",
                end: "top 30%",
                scrub: false,
            },
        }
    );
};
