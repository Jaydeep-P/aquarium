import React, { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export function ClownFishModel(props) {
  const group = useRef();
  const { scene, materials, animations } = useGLTF(
    import.meta.env.BASE_URL + "assets/clownFish.glb"
  );

  const clone1 = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(clone1);

  const { actions, names } = useAnimations(animations, group);

  // useEffect(() => {
  //   // names = "idle", "swim", "turningR", "turningL", "bite"
  //   let ind = 1;
  //   actions[names[ind]].reset().fadeIn(1).play();
  //   // return () => actions[names[ind]].fadeOut(1);
  // }, [actions, names]);

  useEffect(() => {
    // names = "idle", "swim", "turningR", "turningL", "bite"
    let ind = 0;
    actions[names[ind]].reset().fadeIn(0.5).play();
    return () => actions[names[ind]].fadeOut(0.5);
  }, [actions, names]);

  // useFrame((state, delta) => {

  //   props.setPos((prev) => {
  //     return [
  //       prev[0] + delta * props.dir[0],
  //       prev[1] + delta * props.dir[1],
  //       prev[2] + delta * props.dir[2],
  //     ];
  //   });
  // });

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

useGLTF.preload(import.meta.env.BASE_URL + "assets/clownFish.glb");
