import { Coral } from "./Coral";

const Corals = ({ dimensions }) => {
  const [x, y, z] = dimensions;
  return (
    <>
      <Coral
        scale={0.2}
        position={[0.1, -0.5 * y, 0.2]}
        index={1}
        color={[0, 0.5, 0.1]}
      />

      <Coral
        scale={0.1}
        position={[0.08 * x, -0.5 * y, 0.1 * z]}
        index={1}
        color={[0, 0.5, 0.1]}
      />
      <Coral
        scale={0.12}
        position={[-0.08 * x, -0.5 * y, 0.1 * z]}
        index={1}
        color={[0, 0.5, 0.1]}
      />

      {new Array(50).fill(0).map((el, ind) => {
        return (
          <Coral
            scale={Math.random() * 0.03 + 0.05}
            position={[
              (Math.random() - 0.5) * 0.8 * x,
              -0.5 * y,
              (Math.random() - 0.5) * 0.8 * z,
            ]}
            index={1}
            key={ind}
            color={[0, 0.4, 0.05]}
          />
        );
      })}
    </>
  );
};

export default Corals;
