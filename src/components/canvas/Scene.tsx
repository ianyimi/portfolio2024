"use client";

import { r3f } from "~/helpers/global";
import {
  AdaptiveDpr,
  Bvh,
  Preload,
  Box,
  CameraControls,
  OrbitControls,
} from "@react-three/drei";
import { Quaternion, AgXToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
// import { isMobile } from 'react-device-detect'
import Menu from "./Menu";
import { useEffect, useRef } from "react";
import { $canvasState } from "~/state/canvas";

export default function Scene({ ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  const content = document.getElementById("content");
  const cameraControlsRef = useRef<CameraControls>(null);
  useEffect(() => {
    if (cameraControlsRef.current) {
      $canvasState.cameraControls.set(cameraControlsRef.current);
    }
  }, [cameraControlsRef]);
  return (
    <Canvas
      id="canvas"
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        depth: true,
        alpha: false,
        stencil: false,
      }}
      resize={{ polyfill: ResizeObserver }}
      dpr={window.devicePixelRatio}
      style={{
        position: "absolute",
        zIndex: 1,
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
      // eventSource={content!}
      eventPrefix="client"
      onCreated={(state) => (state.gl.toneMapping = AgXToneMapping)}
      flat
      {...props}
    >
      <Bvh>
        <AdaptiveDpr />
        <CameraControls makeDefault ref={cameraControlsRef} />
        <Preload all />
        <r3f.Out />
        <Menu />
      </Bvh>
      <Preload all />
    </Canvas>
  );
}
