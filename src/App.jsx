import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { ClownFishModel } from "./components/ClownFishComponent";
import { DoubleSide } from "three";
import Corals from "./components/Corals";

function Box(props) {
  let boxRef = useRef();
  useFrame((state, delta) => {
    // boxRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={boxRef} position={props.position} scale={props.scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={props.color}
        opacity={props.opacity || 1}
        transparent={props.opacity ? true : false}
        // metalness={1}
        // roughness={1}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function Plane(props) {
  // let time = Math.random() * 100;
  let planeRef = useRef();
  useFrame((state, delta) => {
    // planeRef.current.rotation.z -= delta;
    planeRef.current.rotation.x = 3.141 / 2;
  });

  return (
    <mesh ref={planeRef} position={props.position} scale={props.scale}>
      <planeGeometry args={props.size} recieveShadow />
      <meshStandardMaterial
        color={props.color}
        opacity={props.opacity || 1}
        transparent={props.opacity ? true : false}
        metalness={1}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function App() {
  return (
    <div className="main">
      <Canvas camera={{ position: [0, 17, 55], fov: 75 }}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          maxDistance={100}
          minDistance={23}
          maxPolarAngle={(4 * 3.141) / 5}
          minPolarAngle={3.141 / 5}
        />
        <>
          <pointLight
            position={[30 / 2, 20 / 2, 20 / 2]}
            color={[1, 1, 1]}
            intensity={0.25}
          />
          <pointLight
            position={[-30 / 2, 20 / 2, 20 / 2]}
            color={[1, 1, 1]}
            intensity={0.25}
          />
          <pointLight
            position={[30 / 2, 20 / 2, -20 / 2]}
            color={[1, 1, 1]}
            intensity={0.25}
          />
          <pointLight
            position={[-30 / 2, 20 / 2, -20 / 2]}
            color={[1, 1, 1]}
            intensity={0.25}
          />
          <pointLight position={[0, 0, 0]} color={[1, 1, 1]} intensity={0.3} />
          <pointLight
            position={[50, 50, 30]}
            color={[1, 1, 1]}
            intensity={0.1}
          />
        </>

        <ambientLight color={[1, 1, 1]} intensity={0.15} />

        <Suspense>
          {new Array(20).fill(0).map((el, ind) => {
            return <ClownFishModel scale={0.1} index={ind / 20} key={ind} />;
          })}
        </Suspense>

        <Suspense>
          <Corals dimensions={[30, 19.8, 20]} num={100} />
        </Suspense>

        <Box
          scale={[30, 20, 20]}
          position={[0, 0, 0]}
          color={[0, 0.25, 0.5]}
          opacity={0.3}
        />

        <Plane
          color={[0, 0.2, 0.3]}
          size={[30, 20]}
          position={[0, -10, 0]}
          opacity={0.8}
          key={5}
          recieveShadow
        />
      </Canvas>
    </div>
  );
}

export default App;
