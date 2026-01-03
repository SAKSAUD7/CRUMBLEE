'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface ModelViewProps {
    type: 'cookie' | 'brownie';
    position: [number, number, number];
    delay?: number;
}

export default function ModelView({ type, position, delay = 0 }: ModelViewProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [cookieTex, brownieTex] = useTexture(['/images/products/hero-cookie.png', '/images/products/brownie-fudge.png']);

    // Random rotation offset
    const rotationOffset = useMemo(() => [Math.random() * Math.PI, Math.random() * Math.PI, 0], []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();

        // Subtle additional floating/rotation based on time
        meshRef.current.rotation.y += 0.005;
        meshRef.current.rotation.x = rotationOffset[0] + Math.sin(t * 0.5 + delay) * 0.1;
    });

    return (
        <Float
            speed={2}
            rotationIntensity={1}
            floatIntensity={2}
            floatingRange={[-0.2, 0.2]}
        >
            <mesh ref={meshRef} position={position}>
                {type === 'cookie' ? (
                    <cylinderGeometry args={[1, 1, 0.2, 32]} />
                ) : (
                    <boxGeometry args={[1.5, 1.5, 0.5]} />
                )}
                <meshStandardMaterial
                    map={type === 'cookie' ? cookieTex : brownieTex}
                    color={"white"}
                    roughness={0.4}
                    metalness={0.2}
                />
            </mesh>
        </Float>
    );
}
