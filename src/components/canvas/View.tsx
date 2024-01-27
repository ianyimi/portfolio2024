"use client";

import {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  type ReactNode,
  type HTMLAttributes,
  type MutableRefObject,
} from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  View as ViewImpl,
} from "@react-three/drei";
import Three from "./Three";
import { type ColorRepresentation } from "three";

export const Common = ({ color }: { color?: ColorRepresentation }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight />
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
    <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
);

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  orbit?: boolean;
}

const View = forwardRef(({ children, orbit, ...restProps }: ViewProps, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...restProps} />
      <Three>
        <ViewImpl track={localRef as MutableRefObject<HTMLElement>}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export default View;
