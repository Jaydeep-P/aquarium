import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/ClownFishComponent";

function Sphere(props) {
  let time = Math.random() * 100;
  let sphereRef = useRef();
  useFrame((state, delta) => {
    time += delta;
    sphereRef.current.position.x += Math.cos(time) * 0.1;
    sphereRef.current.position.y += Math.sin(time) * 0.1;
    sphereRef.current.position.z += Math.sin(time) * 0.1;
  });

  return (
    <mesh ref={sphereRef} position={props.position}>
      <sphereGeometry args={[6, 10, 10]} />
      <meshStandardMaterial
        color={[0, 1, 0]}
        opacity={props.opacity || 1}
        transparent={props.opacity ? true : false}
      />
    </mesh>
  );
}

function App() {
  return (
    <div className="main">
      <Canvas camera={{ position: [0, 17, 55], fov: 75 }}>
        <OrbitControls />
        <pointLight position={[30, 60, 50]} color={[1, 1, 1]} />
        <ambientLight color={[1, 1, 1]} intensity={0.05} />
        <Suspense fallback={null}>
          <Model scale={1} position={[0, 0, 0]} rotation={[0, 3.14 / 4, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
