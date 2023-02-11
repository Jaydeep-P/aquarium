import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export function ClownFishModel(props) {
  let time = 0;
  const group = useRef();
  const [dirSwitch, setDirSwitch] = useState(false);
  const [radiusFac, setRadiusFac] = useState(0.01);
  const { scene, materials, animations } = useGLTF(
    import.meta.env.BASE_URL + "assets/clownFish.glb"
  );
  const clone1 = useMemo(() => clone(scene), [scene]);
  const { nodes } = useGraph(clone1);

  const { actions, names } = useAnimations(animations, group);

  const [pos, setPos] = useState([0, 0, 0]);

  const [rotY, setRotY] = useState(0);

  useEffect(() => {
    setRadiusFac(Math.random() * 0.005 + 0.005);
    setPos([
      20 * (Math.random() - 0.5),
      props.index * 10 - 5,
      10 * (Math.random() - 0.5),
    ]);
    let angle = Math.random() * 2 * 3.141;
    setRotY(angle);
  }, []);

  useEffect(() => {
    group.current.rotation.y = rotY;
  }, [rotY]);

  useEffect(() => {
    // names = "idle", "swim", "turningR", "turningL", "bite"
    let ind = 0;
    actions[names[ind]].reset().fadeIn(0.5).play();
    return () => actions[names[ind]].fadeOut(0.5);
  }, [actions, names]);

  useFrame((state, delta) => {
    if (rotY >= 2 * 3.141 || rotY < -2 * 3.141) {
      setDirSwitch((prev) => !prev);
      setRotY(0);
      return;
    }
    setRotY((prev) => {
      if (dirSwitch) return prev + radiusFac;
      return prev - radiusFac;
    });
    setPos((prev) => {
      return [
        prev[0] + 0.01 * Math.sin(rotY),
        prev[1],
        prev[2] + 0.01 * Math.cos(rotY),
      ];
    });

    // direction = [Math.sin(rotY),0,Math.cos(rotY)]
  });

  return (
    <group ref={group} {...props} position={pos} dispose={null}>
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
