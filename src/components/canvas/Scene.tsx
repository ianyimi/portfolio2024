"use client";

import { r3f } from "~/helpers/global";
import { AdaptiveDpr, Bvh, Preload } from "@react-three/drei";
import { AgXToneMapping } from "three";
import { Canvas } from "@react-three/fiber";
import Menu from "./Menu";
import CameraControls from "./CameraControls";

interface SceneProps extends Record<string, unknown> {
  domElement: HTMLElement;
}

export default function Scene({ domElement, ...props }: SceneProps) {
  // Everything defined in here will persist between route changes, only children are swapped
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
      onCreated={(state) => (state.gl.toneMapping = AgXToneMapping)}
      eventPrefix="client"
      flat
      {...props}
    >
      <Bvh>
        <AdaptiveDpr />
        <CameraControls />
        <r3f.Out />
        <Menu />
      </Bvh>
      <Preload all />
    </Canvas>
  );
}
