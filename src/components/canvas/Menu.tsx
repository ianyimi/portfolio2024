import ArcadeKirby from "./models/ArcadeKirby";
import SpaceInvaders from "./models/SpaceInvadersArcade";
import Pacman from "./models/Pacman";
import RustyArcade from "./models/RustyArcade";
import ArcadeRoom from "./models/ArcadeRoom";
import { useLimitedFrame } from "~/hooks/canvas/useLimitedFrame";

export default function Menu() {
  // useLimitedFrame(0.1, ({ camera }) => {
  //   console.log('camera position: ', camera.position)
  //   console.log('camera quaternion: ', camera.quaternion)
  //   console.log('camera rotation: ', camera.rotation)
  // })
  return (
    <group>
      <ambientLight intensity={0.5} />
      <ArcadeRoom rotation-y={Math.PI} position={[-1.35, -0.25, 8.9]} />
    </group>
  );
}
