'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { isLowPowerDevice } from '@/utils/performance';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Disable on touch devices or low power mode
        if (typeof window !== 'undefined' &&
            (isLowPowerDevice() || window.matchMedia('(pointer: coarse)').matches)) {
            return;
        }

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(follower, { xPercent: -50, yPercent: -50 });

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.3 });
        };

        const onHoverStart = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.2 });
            gsap.to(follower, { scale: 2, backgroundColor: 'transparent', borderColor: '#D4AF37', borderWidth: 1, duration: 0.2 });
        };

        const onHoverEnd = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, backgroundColor: '#3E2723', borderColor: 'transparent', borderWidth: 0, duration: 0.2 });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Add hover listeners to clickable elements
        const clickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', onHoverStart);
            el.addEventListener('mouseleave', onHoverEnd);
        });

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            const newClickables = document.querySelectorAll('a, button, input, textarea, [role="button"]');
            newClickables.forEach(el => {
                // Remove before adding to avoid duplicates (though listeners are unique by ref, anonymous funcs are new)
                // Simplest is just re-adding or checking specific classes. 
                // For now, let's keep it simple and just re-attach to everything newly found
                el.removeEventListener('mouseenter', onHoverStart);
                el.removeEventListener('mouseleave', onHoverEnd);
                el.addEventListener('mouseenter', onHoverStart);
                el.addEventListener('mouseleave', onHoverEnd);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.body.style.cursor = 'auto';
            observer.disconnect();
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', onHoverStart);
                el.removeEventListener('mouseleave', onHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference" />
            <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 bg-espresso opacity-20 rounded-full pointer-events-none z-[9998] mix-blend-difference" />
        </>
    );
}
