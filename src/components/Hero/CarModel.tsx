"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { HERO_MORPH_COLORS } from "@/lib/colors";

const COLOR_DURATION = 3;

export function CarModel() {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const colorIndexRef = useRef(0);

  const colors = useMemo(
    () => HERO_MORPH_COLORS.map((c) => new THREE.Color(c.hex)),
    []
  );

  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: colors[0],
        metalness: 0.7,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        envMapIntensity: 1.5,
      }),
    [colors]
  );

  useFrame((_, delta) => {
    timeRef.current += delta;
    const t = (timeRef.current % COLOR_DURATION) / COLOR_DURATION;
    const idx = colorIndexRef.current;
    const nextIdx = (idx + 1) % colors.length;

    const currentColor = colors[idx].clone().lerp(colors[nextIdx], t);
    bodyMaterial.color.copy(currentColor);

    if (timeRef.current >= COLOR_DURATION) {
      timeRef.current = 0;
      colorIndexRef.current = nextIdx;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Main body */}
      <mesh castShadow position={[0, 0.4, 0]} material={bodyMaterial}>
        <boxGeometry args={[4.2, 0.8, 1.8]} />
      </mesh>
      {/* Cabin */}
      <mesh castShadow position={[-0.1, 1.05, 0]}>
        <boxGeometry args={[2.0, 0.7, 1.6]} />
        <meshPhysicalMaterial
          color="#111"
          metalness={0.9}
          roughness={0.1}
          opacity={0.7}
          transparent
        />
      </mesh>
      {/* Hood */}
      <mesh
        castShadow
        position={[1.3, 0.7, 0]}
        rotation={[0, 0, -0.15]}
        material={bodyMaterial}
      >
        <boxGeometry args={[1.4, 0.3, 1.7]} />
      </mesh>
      {/* Rear */}
      <mesh
        castShadow
        position={[-1.5, 0.65, 0]}
        rotation={[0, 0, 0.2]}
        material={bodyMaterial}
      >
        <boxGeometry args={[1.0, 0.4, 1.7]} />
      </mesh>
      {/* Front wheel L */}
      <mesh position={[1.3, 0.05, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Front wheel R */}
      <mesh position={[1.3, 0.05, -1.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Rear wheel L */}
      <mesh position={[-1.3, 0.05, 1.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Rear wheel R */}
      <mesh position={[-1.3, 0.05, -1.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Headlights */}
      <mesh position={[2.12, 0.5, 0.6]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[2.12, 0.5, -0.6]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Taillights */}
      <mesh position={[-2.12, 0.5, 0.6]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial
          color="#cc0000"
          emissive="#cc0000"
          emissiveIntensity={2}
        />
      </mesh>
      <mesh position={[-2.12, 0.5, -0.6]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial
          color="#cc0000"
          emissive="#cc0000"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}
