"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import { CarModel } from "./CarModel";
import { Particles } from "./Particles";

export function CarScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [5, 2.5, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            color="#ffffff"
          />
          <directionalLight
            position={[-5, 5, -5]}
            intensity={0.5}
            color="#1E90FF"
          />
          <spotLight
            position={[0, 10, 0]}
            intensity={0.8}
            angle={0.5}
            penumbra={1}
            color="#00D4FF"
          />

          <CarModel />

          <ContactShadows
            position={[0, -0.7, 0]}
            opacity={0.5}
            scale={12}
            blur={2.5}
            far={4}
            color="#1E90FF"
          />

          <Particles />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
