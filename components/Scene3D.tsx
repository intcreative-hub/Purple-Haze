"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import RotatingCube from "./RotatingCube";

export default function Scene3D() {
  return (
    <div className="h-full w-full">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />

        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

        {/* 3D Content */}
        <Suspense fallback={null}>
          <RotatingCube />
        </Suspense>

        {/* Controls (disabled for auto-rotation) */}
        <OrbitControls
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}
