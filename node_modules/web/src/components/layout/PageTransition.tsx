'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
            >
                {children}
            </motion.div>

            {/* Cinematic Wipe Overlay (Optional - currently using Fade) */}
            {/* 
            <motion.div 
                className="fixed inset-0 bg-espresso z-[9990] pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ originY: 0 }}
            />
            */}
        </AnimatePresence>
    );
}
