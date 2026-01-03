'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import ModelView from './ModelView';

export default function Scene() {
    return (
        <div className="w-full h-full absolute inset-0 z-10 pointer-events-none">
            <Canvas
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <Suspense fallback={null}>
                    {/* Floating Composition */}
                    <ModelView type="cookie" position={[-2, 1, 0]} delay={0} />
                    <ModelView type="cookie" position={[2, -1.5, -1]} delay={1} />
                    <ModelView type="brownie" position={[0, 0, -2]} delay={0.5} />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
}
