import { observable } from "@legendapp/state";
import { type CameraControls } from "@react-three/drei";

interface CanvasState {
  cameraControls?: CameraControls;
}

export const $canvasState = observable<CanvasState>({
  cameraControls: undefined,
});
