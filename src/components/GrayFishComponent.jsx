import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function GrayFishModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    import.meta.env.BASE_URL + "assets/grayFish.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    let ind = 0;
    console.log(names);
    actions[names[ind]].reset().play();
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[0.16, 0.05, 0]}
          rotation={[-Math.PI / 2, 0, -0.9]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Armature_7"
                position={[0, 0.06, 0.26]}
                rotation={[1.62, 0, 0]}
                scale={0.56}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Plane040_6" />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Material.006"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "assets/grayFish.glb");
