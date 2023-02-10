import { Coral } from "./Coral";

const Corals = ({ dimensions, num }) => {
  const [x, y, z] = dimensions;
  const colors = [
    [0, 0.2, 0.15],
    [0, 0.2, 0.05],
    [0.5, 0.1, 0.05],
    [0, 0.1, 0.03],
    [0.2, 0.5, 0],
    [0, 0.5, 0.1],
    [0.7, 0, 0.1],
  ];
  return (
    <>
      {new Array(num).fill(0).map((el, ind) => {
        let curr = ind % 7;
        return (
          <Coral
            scale={Math.random() * 0.02 + 0.06}
            position={[
              (Math.random() - 0.5) * 0.8 * x,
              -0.5 * y,
              (Math.random() - 0.5) * 0.8 * z,
            ]}
            rotation={[0, 3.141 * Math.random(), 0]}
            index={curr}
            key={ind}
            color={colors[curr]}
          />
        );
      })}
    </>
  );
};

export default Corals;
