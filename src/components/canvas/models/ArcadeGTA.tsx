/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/staging/gta-arcade/gta-arcade.glb --types --keepnames --simplify --weld --transform  
Files: public/staging/gta-arcade/gta-arcade.glb [1.99MB] > C:\Users\anyim\Desktop\Projects\Zay\portfolio2024\gta-arcade-transformed.glb [185.94KB] (91%)
Author: Antonio722 (https://sketchfab.com/Antonio722)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arcade-grand-theft-auto-san-andreas-fan-art-8057caf3045e44c3852d8158c0a493cf
Title: Arcade Grand Theft Auto: San Andreas (Fan Art)
*/

import { Mesh, MeshStandardMaterial } from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ArcadeGTASA_Arcade_mtl_0: Mesh
  }
  materials: {
    Arcade_mtl: MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const FILE_URL  = "https://d1zhlm2vwhu5x.cloudfront.net/models/gta-arcade-1705648011/gta-arcade-transformed.glb.gz"

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="ArcadeGTASA_Arcade_mtl_0" geometry={nodes.ArcadeGTASA_Arcade_mtl_0.geometry} material={materials.Arcade_mtl} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload(FILE_URL)
