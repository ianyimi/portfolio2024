import { observable } from "@legendapp/state";
import { CameraControls } from "@react-three/drei";
import { MutableRefObject } from "react";

interface CanvasState {
  cameraControls?: CameraControls
}

export const $canvasState = observable<CanvasState>({
  cameraControls: undefined,
})