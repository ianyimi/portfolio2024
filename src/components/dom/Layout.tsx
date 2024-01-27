"use client";

import { useRef, type PropsWithChildren } from "react";
import dynamic from "next/dynamic";
const TopNav = dynamic(() => import("./TopNav"), { ssr: false });
const Scene = dynamic(() => import("~/components/canvas/Scene"), {
  ssr: false,
});

export default function Layout({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <main id="main" className="antialiased">
      <TopNav />
      <div
        id="content"
        ref={ref}
        className="fixed top-0 z-0 min-h-[100dvh] min-w-full"
      >
        {children}
      </div>
      <div className="fixed left-0 top-0 -z-[1] min-h-[100dvh] w-[100vw]">
        <Scene eventSource={ref.current} />
      </div>
    </main>
  );
}
