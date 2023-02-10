import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Coral(props) {
  const { nodes, materials } = useGLTF(
    import.meta.env.BASE_URL + `assets/coral/Coral${props.index}.glb`
  );
  const keys = Object.keys(nodes);

  materials.Coral.color = {
    isColor: true,
    r: props.color[0],
    g: props.color[1],
    b: props.color[2],
  };
  return (
    <group {...props} color={props.color} dispose={null}>
      <mesh geometry={nodes[keys[0]].geometry} material={materials.Coral} />
      <meshStandardMaterial color={props.color} depthWrite={false} />
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral0.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral1.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral2.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral3.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral4.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral5.glb");
useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral6.glb");
