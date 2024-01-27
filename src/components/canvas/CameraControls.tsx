"use client";

import { useRef, useEffect } from "react";
import { $canvasState } from "~/state/canvas";
import { CameraControls } from "@react-three/drei";
import { opaqueObject } from "@legendapp/state";

export default function CameraControlsWrapper() {
  const content = document.getElementById("content");
  const cameraControlsRef = useRef<CameraControls>(null);
  useEffect(() => {
    if (cameraControlsRef.current) {
      $canvasState.cameraControls.set(opaqueObject(cameraControlsRef.current));
    }
  }, [cameraControlsRef]);
  if (!content) return;
  return (
    <group>
      <CameraControls
        makeDefault
        domElement={content}
        ref={cameraControlsRef}
      />
    </group>
  );
}
