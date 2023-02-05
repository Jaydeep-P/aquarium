import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";

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
  f;
}

function App() {
  return (
    <div className="main">
      <Canvas camera={{ position: [0, 17, 55], fov: 75 }}>
        <pointLight position={[30, 60, 50]} color={[1, 1, 1]} />
        <ambientLight color={[0.1, 0.1, 0.1]} />

        {new Array(10).fill(0).map((el, ind) => (
          <Sphere
            key={ind}
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 30,
            ]}
            opacity={0.7}
          />
        ))}
      </Canvas>
    </div>
  );
}

export default App;
