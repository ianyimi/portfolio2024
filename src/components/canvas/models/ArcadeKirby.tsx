/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/staging/arcade-kirby/arcade-kirby.glb --types --keepnames --simplify --weld --transform  
Files: public/staging/arcade-kirby/arcade-kirby.glb [2.49MB] > C:\Users\anyim\Desktop\Projects\Zay\portfolio2024\arcade-kirby-transformed.glb [387.4KB] (84%)
Author: Leon Da Kimchi (https://sketchfab.com/dakimchi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kirby-arcade-3dd08eb777bf402d9a8830f852694d0b
Title: Kirby Arcade
*/

import { Mesh, MeshStandardMaterial, Group } from 'three'
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: Mesh
    Object_3: Mesh
    Object_4: Mesh
    Object_5: Mesh
    Object_6: Mesh
    Object_7: Mesh
    Object_8: Mesh
    Object_9: Mesh
  }
  materials: {
    initialShadingGroup: MeshStandardMaterial
    lambert2SG: MeshStandardMaterial
    lambert4SG: MeshStandardMaterial
    lambert7SG: MeshStandardMaterial
    lambert8SG: MeshStandardMaterial
    lambert3SG: MeshStandardMaterial
    lambert5SG: MeshStandardMaterial
    lambert6SG: MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const FILE_URL = 'https://d1zhlm2vwhu5x.cloudfront.net/models/arcade-kirby-1705564907/arcade-kirby-transformed.glb.gz'

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult
  const { camera } = useThree()
  const arcadeGroup = useRef<Group>(null)
  console.log('camera in aboutPortalScene: ', camera.position)
  useEffect(() => {
    if (!arcadeGroup.current) return
    console.log('kirby arcade rendered in aboutPortalScene: ', arcadeGroup.current.position)
    camera.lookAt(arcadeGroup.current.position)
  }, [arcadeGroup])
  return (
    <group ref={arcadeGroup} position={camera.position} {...props} dispose={null}>
      <mesh
        name='Object_2'
        geometry={nodes.Object_2.geometry}
        material={materials.initialShadingGroup}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_3'
        geometry={nodes.Object_3.geometry}
        material={materials.lambert2SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_4'
        geometry={nodes.Object_4.geometry}
        material={materials.lambert4SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_5'
        geometry={nodes.Object_5.geometry}
        material={materials.lambert7SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_6'
        geometry={nodes.Object_6.geometry}
        material={materials.lambert8SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_7'
        geometry={nodes.Object_7.geometry}
        material={materials.lambert3SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_8'
        geometry={nodes.Object_8.geometry}
        material={materials.lambert5SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Object_9'
        geometry={nodes.Object_9.geometry}
        material={materials.lambert6SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload(FILE_URL)
