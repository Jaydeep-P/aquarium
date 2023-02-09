import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Coral(props) {
  const { nodes, materials } = useGLTF(
    import.meta.env.BASE_URL + `assets/coral/Coral.glb`
  );
  //   console.log(materials.Coral);
  materials.Coral.color = {
    isColor: true,
    r: props.color[0],
    g: props.color[1],
    b: props.color[2],
  };
  return (
    <group {...props} color={props.color} dispose={null}>
      <mesh geometry={nodes.Coral.geometry} material={materials.Coral} />
      <meshStandardMaterial color={props.color} depthWrite={false} />
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "assets/coral/Coral.glb");
