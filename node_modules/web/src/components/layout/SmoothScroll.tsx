'use client';
import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

const Lenis = ReactLenis as any;

export function SmoothScroll({ children }: { children: any }) {
    return (
        <Lenis root>
            {children}
        </Lenis>
    );
}
