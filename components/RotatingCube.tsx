"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function RotatingCube() {
  const meshRef = useRef<Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Track mouse movement for interactive rotation
  if (typeof window !== "undefined") {
    window.addEventListener("mousemove", (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    });
  }

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Continuous rotation
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;

      // Interactive tilt based on mouse position
      meshRef.current.rotation.x += (mousePosition.current.y * 0.3 - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (mousePosition.current.x * 0.3 - meshRef.current.rotation.y) * 0.05;

      // Subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Box Geometry - 2x2x2 cube */}
      <boxGeometry args={[2, 2, 2]} />

      {/* Material with emerald color */}
      <meshStandardMaterial
        color="#10b981"
        metalness={0.7}
        roughness={0.2}
        wireframe={false}
      />

      {/* Wireframe overlay for modern look */}
      <mesh>
        <boxGeometry args={[2.01, 2.01, 2.01]} />
        <meshBasicMaterial color="#34d399" wireframe={true} transparent={true} opacity={0.3} />
      </mesh>
    </mesh>
  );
}
