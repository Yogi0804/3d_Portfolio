/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

import planceScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animation } = useGLTF(planceScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
