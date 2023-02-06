import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/ClownFishComponent";
import { DoubleSide } from "three";

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

function Box(props) {
  // let time = Math.random() * 100;
  let boxRef = useRef();
  // useFrame((state, delta) => {
  //   time += delta;
  // });

  return (
    <mesh ref={boxRef} position={props.position} scale={props.scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={props.color}
        opacity={props.opacity || 1}
        transparent={props.opacity ? true : false}
        metalness={0.9}
        roughness={0.9}
        depthWrite={false}
      />
    </mesh>
  );
}

function Plane(props) {
  // let time = Math.random() * 100;
  let planeRef = useRef();
  useFrame((state, delta) => {
    if (!props.rotation) return;
    planeRef.current.rotation.y = props.rotation.y ? props.rotation.y : 0;
    planeRef.current.rotation.x = props.rotation.x ? props.rotation.x : 0;
    planeRef.current.rotation.z = props.rotation.z ? props.rotation.z : 0;
  });

  return (
    <mesh ref={planeRef} position={props.position} scale={props.scale}>
      <planeGeometry args={props.size} />
      <meshStandardMaterial
        color={props.color}
        opacity={props.opacity || 1}
        transparent={props.opacity ? true : false}
        metalness={0.9}
        roughness={0.9}
        side={DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function App() {
  const [pos, setPos] = useState([0, 0, 0]);

  return (
    <div className="main">
      <Canvas camera={{ position: [0, 17, 55], fov: 75 }}>
        <OrbitControls />
        <pointLight
          position={[90, 100, 50]}
          color={[1, 1, 1]}
          intensity={0.2}
        />
        <ambientLight color={[1, 1, 1]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model
            scale={0.2}
            position={pos}
            setPos={setPos}
            rotation={[0, 3.141 / 2, 0]}
            dir={[0.5, 0, 0.5]}
            // opacity={1}
          />
        </Suspense>
        <Box
          scale={[29, 19, 19]}
          position={[0, 0, 0]}
          color={[0, 0.6, 0.9]}
          opacity={0.2}
        />

        <Plane
          color={[1, 1, 1]}
          size={[30, 20]}
          position={[0, 0, 10]}
          opacity={0.3}
        />
        <Plane
          color={[1, 1, 1]}
          size={[30, 20]}
          position={[0, 0, -10]}
          opacity={0.3}
        />
        <Plane
          color={[1, 1, 1]}
          size={[20, 20]}
          rotation={{ y: 3.14 / 2 }}
          position={[15, 0, 0]}
          opacity={0.3}
        />
        <Plane
          color={[1, 1, 1]}
          size={[20, 20]}
          rotation={{ y: 3.14 / 2 }}
          position={[-15, 0, 0]}
          opacity={0.3}
        />
        <Plane
          color={[0.5, 0.5, 0.5]}
          size={[30, 20]}
          rotation={{ x: 3.14 / 2 }}
          position={[0, -10, 0]}
          opacity={1}
        />
      </Canvas>
    </div>
  );
}

export default App;
