import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/assets/clownFish.glb");
  const { actions, names } = useAnimations(animations, group);

  // useEffect(() => {
  //   // names = "idle", "swim", "turningR", "turningL", "bite"
  //   let ind = 1;
  //   actions[names[ind]].reset().fadeIn(1).play();
  //   return () => actions[names[ind]].fadeOut(1);
  // }, [actions, names]);

  useEffect(() => {
    // names = "idle", "swim", "turningR", "turningL", "bite"
    let ind = 0;
    actions[names[ind]].reset().play();
    return () => actions[names[ind]];
  }, [actions, names]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3a338159af63455cbb591f306837a4cefbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group
                    name="Object_6"
                    position={[0, 0.14, -2.21]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <group
                    name="fishClown"
                    position={[0, 0.14, -2.21]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.fishclown}
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

useGLTF.preload("/assets/clownFish.glb");
