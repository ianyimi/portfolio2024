"use client";

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/staging/arcade_room/arcade_room.glb --types --keepnames --weld  
Author: nyu_grad_alley_2020 (https://sketchfab.com/nyu_grad_alley_2020)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arcade-room-6ad1c25e9df54343ab4cdd96c27c13eb
Title: Arcade Room
*/

import {
  type Mesh,
  type MeshStandardMaterial,
  type Group,
  Vector3,
  DoubleSide,
} from "three";
import { useRef, useEffect, useState } from "react";
import { observer } from "@legendapp/state/react";
import {
  useGLTF,
  MeshPortalMaterial,
  Box,
  type PortalMaterialType,
  useCursor,
  OrbitControls,
} from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { $menuState } from "~/state/menu";
import KirbyArcade from "./ArcadeKirby";
import { useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_6: Mesh;
    Object_8: Mesh;
    Object_10: Mesh;
    Object_12: Mesh;
    Object_14: Mesh;
    Object_16: Mesh;
    Object_19: Mesh;
    Object_21: Mesh;
    Object_23: Mesh;
    Object_27: Mesh;
    Object_29: Mesh;
    Object_25: Mesh;
    Object_33: Mesh;
    Object_31: Mesh;
    Object_39: Mesh;
    Object_41: Mesh;
    Object_37: Mesh;
    Object_35: Mesh;
    Object_45: Mesh;
    Object_43: Mesh;
    Object_49: Mesh;
    Object_47: Mesh;
    Object_53: Mesh;
    Object_51: Mesh;
    Object_57: Mesh;
    Object_59: Mesh;
    Object_61: Mesh;
    Object_55: Mesh;
    Object_63: Mesh;
    Object_65: Mesh;
    Object_67: Mesh;
    Object_69: Mesh;
    Object_71: Mesh;
    Object_73: Mesh;
    Object_75: Mesh;
    Object_79: Mesh;
    Object_81: Mesh;
    Object_83: Mesh;
    Object_77: Mesh;
    Object_86: Mesh;
    Object_88: Mesh;
    Object_90: Mesh;
    Object_92: Mesh;
    Object_94: Mesh;
    Object_96: Mesh;
    Object_98: Mesh;
    Object_100: Mesh;
    Object_102: Mesh;
    Object_104: Mesh;
    Object_107: Mesh;
    Object_109: Mesh;
    Object_112: Mesh;
    Object_114: Mesh;
    Object_117: Mesh;
    Object_119: Mesh;
    Object_122: Mesh;
    Object_124: Mesh;
    Object_127: Mesh;
    Object_129: Mesh;
    Object_132: Mesh;
    Object_134: Mesh;
    Object_137: Mesh;
    Object_139: Mesh;
    Object_142: Mesh;
    Object_144: Mesh;
    Object_146: Mesh;
    Object_148: Mesh;
    Object_150: Mesh;
    Object_152: Mesh;
    Object_154: Mesh;
    Object_156: Mesh;
    Object_158: Mesh;
    Object_160: Mesh;
    Object_166: Mesh;
    Object_168: Mesh;
    Object_164: Mesh;
    Object_162: Mesh;
    Object_170: Mesh;
    Object_172: Mesh;
    Object_174: Mesh;
    Object_176: Mesh;
    Object_178: Mesh;
    Object_180: Mesh;
    Object_182: Mesh;
    Object_184: Mesh;
    Object_186: Mesh;
    Object_188: Mesh;
    Object_190: Mesh;
    Object_194: Mesh;
    Object_196: Mesh;
    Object_198: Mesh;
    Object_192: Mesh;
    Object_201: Mesh;
    Object_203: Mesh;
    Object_206: Mesh;
    Object_208: Mesh;
    Object_211: Mesh;
    Object_213: Mesh;
    Object_216: Mesh;
    Object_218: Mesh;
    Object_221: Mesh;
    Object_223: Mesh;
    Object_227: Mesh;
    Object_225: Mesh;
    Object_231: Mesh;
    Object_229: Mesh;
    Object_234: Mesh;
    Object_236: Mesh;
    Object_240: Mesh;
    Object_238: Mesh;
    Object_244: Mesh;
    Object_242: Mesh;
    Object_246: Mesh;
    Object_248: Mesh;
  };
  materials: {
    DarkMetal: MeshStandardMaterial;
    LightBlue: MeshStandardMaterial;
    LightRed: MeshStandardMaterial;
    Stool_texture: MeshStandardMaterial;
    LightWhite: MeshStandardMaterial;
    Exit: MeshStandardMaterial;
    LampMetal: MeshStandardMaterial;
    Trashlid_Base_Color: MeshStandardMaterial;
    ThrashcCan_Body_texture: MeshStandardMaterial;
    DoorHandle: MeshStandardMaterial;
    BrownWood: MeshStandardMaterial;
    DarkWood: MeshStandardMaterial;
    ArcadeMachine_3_COL_ED: MeshStandardMaterial;
    ArcadeMachine_2_COL_ED: MeshStandardMaterial;
    ArcadeMachine_1_COL_ED: MeshStandardMaterial;
    Balls_COL: MeshStandardMaterial;
    Glass: MeshStandardMaterial;
    ClawMachineMech_ClawMachineMech_COL: MeshStandardMaterial;
    ClawMachine_COL_ED2: MeshStandardMaterial;
    Carpet: MeshStandardMaterial;
    Bricks: MeshStandardMaterial;
    RedPlastic: MeshStandardMaterial;
    AirHockey_texture: MeshStandardMaterial;
    Beam_Texture: MeshStandardMaterial;
    Roof_texture_1: MeshStandardMaterial;
    Poster_BaitedSpace: MeshStandardMaterial;
    ["Poster_NEX-N8R"]: MeshStandardMaterial;
    Poster_NACTOO: MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

const FILE_URL =
  "https://d1zhlm2vwhu5x.cloudfront.net/models/arcade_room-1705729142/arcade_room-transformed.glb.gz";

const Model = observer((props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(FILE_URL) as GLTFResult;
  const aboutPortalGroup = useRef<Group>();
  const workPortalGroup = useRef<Group>();
  const aboutPortalMaterial = useRef<PortalMaterialType>();
  const workPortalMaterial = useRef<PortalMaterialType>();
  const aboutPortalGroupPosition = useRef<Vector3>(new Vector3());
  const workPortalGroupPosition = useRef<Vector3>(new Vector3());
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  useCursor(hovered);

  console.log("camera in arcade room: ", camera.position);

  useEffect(() => {
    if (!aboutPortalGroup.current) return;
    aboutPortalGroup.current.getWorldPosition(aboutPortalGroupPosition.current);
  }, [aboutPortalGroup.current]);

  useEffect(() => {
    if (!workPortalGroup.current) return;
    workPortalGroup.current.getWorldPosition(workPortalGroupPosition.current);
  }, [workPortalGroup.current]);

  console.log("aboutPortalGroupPosition: ", aboutPortalGroupPosition.current);

  return (
    <group {...props} dispose={null}>
      <group
        name="NeonSign_(1)_1"
        position={[4.426, 0.476, 2.479]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Object_6"
          geometry={nodes.Object_6.geometry}
          material={materials.DarkMetal}
          position={[-0.037, -0.003, 0.035]}
        />
        <mesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.LightBlue}
          position={[0, -0.332, 0]}
        />
        <mesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.LightBlue}
          position={[0, -0.406, 0]}
        />
        <mesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials.LightBlue}
          position={[0, 0.397, 0]}
        />
        <mesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials.LightBlue}
          position={[0, 0.324, 0]}
        />
        <mesh
          name="Object_16"
          geometry={nodes.Object_16.geometry}
          material={materials.LightRed}
        />
      </group>
      <group
        name="Stool_8"
        position={[-0.13, -0.559, -0.33]}
        rotation={[0, 0.294, 0]}
      >
        <mesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="FireExit_Sign_12"
        position={[3.756, 1.358, 0.034]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <mesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_27"
          geometry={nodes.Object_27.geometry}
          material={materials.LightWhite}
          position={[-0.007, -0.011, 0.001]}
        />
        <mesh
          name="Object_29"
          geometry={nodes.Object_29.geometry}
          material={materials.Exit}
          position={[0, -0.087, 0]}
          scale={[93.244, 1.371, 0.044]}
        />
      </group>
      <group name="TrashCan_18" position={[2.634, -0.543, -0.277]}>
        <mesh
          name="Object_31"
          geometry={nodes.Object_31.geometry}
          material={materials.ThrashcCan_Body_texture}
        />
        <mesh
          name="Object_33"
          geometry={nodes.Object_33.geometry}
          material={materials.Trashlid_Base_Color}
          position={[0, 0.374, 0]}
        />
      </group>
      <group name="Door_20" position={[3.753, 0.086, 0.064]}>
        <group name="Door_21" position={[-2.946, -1.023, 0.726]}>
          <mesh
            name="Object_37"
            geometry={nodes.Object_37.geometry}
            material={materials.BrownWood}
          />
          <mesh
            name="Object_39"
            geometry={nodes.Object_39.geometry}
            material={materials.DoorHandle}
          />
          <mesh
            name="Object_41"
            geometry={nodes.Object_41.geometry}
            material={materials.DoorHandle}
          />
        </group>
        <mesh
          name="Object_35"
          geometry={nodes.Object_35.geometry}
          material={materials.DarkWood}
        />
      </group>
      <group name="ArcadeMachine03_24" position={[-1.3, -0.029, -1.188]}>
        <mesh
          name="Object_43"
          geometry={nodes.Object_43.geometry}
          material={materials.ArcadeMachine_3_COL_ED}
        />
        <mesh
          name="Object_45"
          geometry={nodes.Object_45.geometry}
          position={[-1.117, -0.9, 1.917]}
        >
          <meshBasicMaterial color="red" />
        </mesh>
      </group>
      <group name="ArcadeMachine02_26" position={[0.606, -0.037, -1.164]}>
        <mesh
          name="Object_47"
          geometry={nodes.Object_47.geometry}
          material={materials.ArcadeMachine_2_COL_ED}
        />
        <mesh
          name="Object_49"
          geometry={nodes.Object_49.geometry}
          position={[-0.395, -0.907, 1.94]}
        >
          <meshBasicMaterial color="green" />
        </mesh>
      </group>
      <group name="ArcadeMachine01_28" position={[-0.391, -0.037, -1.14]}>
        <mesh
          name="Object_51"
          geometry={nodes.Object_51.geometry}
          material={materials.ArcadeMachine_1_COL_ED}
        />
        <mesh
          name="Object_53"
          geometry={nodes.Object_53.geometry}
          position={[0.412, -0.907, 1.942]}
        >
          <meshBasicMaterial color="blue" />
        </mesh>
      </group>
      <group name="ClawMachine_30" position={[1.682, 0, -1]}>
        <mesh
          name="Object_55"
          geometry={nodes.Object_55.geometry}
          material={materials.ClawMachine_COL_ED2}
        />
        <mesh
          name="Object_57"
          geometry={nodes.Object_57.geometry}
          material={materials.Balls_COL}
          position={[-2.12, -0.964, 1.936]}
        />
        <mesh
          name="Object_59"
          geometry={nodes.Object_59.geometry}
          material={materials.Glass}
          position={[-2.107, -0.964, 1.936]}
        />
        <mesh
          name="Object_61"
          geometry={nodes.Object_61.geometry}
          material={materials.ClawMachineMech_ClawMachineMech_COL}
          position={[-2.126, -0.964, 1.936]}
        />
      </group>
      <group name="AirHockey_41" position={[1.266, -0.53, 3.232]}>
        <mesh
          name="Object_77"
          geometry={nodes.Object_77.geometry}
          material={materials.AirHockey_texture}
        />
        <mesh
          name="Object_79"
          geometry={nodes.Object_79.geometry}
          material={materials.RedPlastic}
          position={[-0.284, 0.334, -0.073]}
        />
        <mesh
          name="Object_81"
          geometry={nodes.Object_81.geometry}
          material={materials.RedPlastic}
          position={[-0.645, 0.343, 0.135]}
        />
        <mesh
          name="Object_83"
          geometry={nodes.Object_83.geometry}
          material={materials.RedPlastic}
          position={[0.689, 0.343, -0.11]}
        />
      </group>
      <group name="Beams_45" position={[-4.09, 1.71, 1.24]}>
        <mesh
          name="Object_86"
          geometry={nodes.Object_86.geometry}
          material={materials.Beam_Texture}
          position={[3, 0, 0]}
        />
        <mesh
          name="Object_88"
          geometry={nodes.Object_88.geometry}
          material={materials.Beam_Texture}
          position={[2, 0, 0]}
        />
        <mesh
          name="Object_90"
          geometry={nodes.Object_90.geometry}
          material={materials.Beam_Texture}
          position={[1, 0, 0]}
        />
        <mesh
          name="Object_92"
          geometry={nodes.Object_92.geometry}
          material={materials.Beam_Texture}
        />
        <mesh
          name="Object_94"
          geometry={nodes.Object_94.geometry}
          material={materials.Beam_Texture}
          position={[-1, 0, 0]}
        />
        <mesh
          name="Object_96"
          geometry={nodes.Object_96.geometry}
          material={materials.Beam_Texture}
          position={[5, 0, 0]}
        />
        <mesh
          name="Object_98"
          geometry={nodes.Object_98.geometry}
          material={materials.Beam_Texture}
          position={[6, 0, 0]}
        />
        <mesh
          name="Object_100"
          geometry={nodes.Object_100.geometry}
          material={materials.Beam_Texture}
          position={[7, 0, 0]}
        />
        <mesh
          name="Object_102"
          geometry={nodes.Object_102.geometry}
          material={materials.Beam_Texture}
          position={[8, 0, 0]}
        />
        <mesh
          name="Object_104"
          geometry={nodes.Object_104.geometry}
          material={materials.Beam_Texture}
          position={[4.09, 0, 0]}
        />
      </group>
      <group name="Lamp_56" position={[-3.294, 1.335, 3.747]}>
        <mesh
          name="Object_107"
          geometry={nodes.Object_107.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_109"
          geometry={nodes.Object_109.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(1)_60" position={[-1.331, 1.335, 3.747]}>
        <mesh
          name="Object_112"
          geometry={nodes.Object_112.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_114"
          geometry={nodes.Object_114.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(2)_64" position={[2.553, 1.335, 3.747]}>
        <mesh
          name="Object_117"
          geometry={nodes.Object_117.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_119"
          geometry={nodes.Object_119.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(3)_68" position={[0.59, 1.335, 3.747]}>
        <mesh
          name="Object_122"
          geometry={nodes.Object_122.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_124"
          geometry={nodes.Object_124.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(4)_72" position={[-1.331, 1.335, 1.28]}>
        <mesh
          name="Object_127"
          geometry={nodes.Object_127.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_129"
          geometry={nodes.Object_129.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(5)_76" position={[-3.294, 1.335, 1.28]}>
        <mesh
          name="Object_132"
          geometry={nodes.Object_132.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_134"
          geometry={nodes.Object_134.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(6)_80" position={[0.632, 1.335, 1.28]}>
        <mesh
          name="Object_137"
          geometry={nodes.Object_137.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_139"
          geometry={nodes.Object_139.geometry}
          material={materials.LightRed}
        />
      </group>
      <group name="Lamp_(7)_84" position={[2.595, 1.335, 1.28]}>
        <mesh
          name="Object_142"
          geometry={nodes.Object_142.geometry}
          material={materials.LampMetal}
        />
        <mesh
          name="Object_144"
          geometry={nodes.Object_144.geometry}
          material={materials.LightRed}
        />
      </group>
      <group
        name="Door_(1)_99"
        position={[-5.42, 0.086, 3.55]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <group name="Door_100" position={[-2.946, -1.023, 0.726]}>
          <mesh
            name="Object_164"
            geometry={nodes.Object_164.geometry}
            material={materials.BrownWood}
          />
          <mesh
            name="Object_166"
            geometry={nodes.Object_166.geometry}
            material={materials.DoorHandle}
          />
          <mesh
            name="Object_168"
            geometry={nodes.Object_168.geometry}
            material={materials.DoorHandle}
          />
        </group>
        <mesh
          name="Object_162"
          geometry={nodes.Object_162.geometry}
          material={materials.DarkWood}
        />
      </group>
      <group name="AirHockey_(1)_116" position={[1.266, -0.53, 1.57]}>
        <mesh
          name="Object_192"
          geometry={nodes.Object_192.geometry}
          material={materials.AirHockey_texture}
        />
        <mesh
          name="Object_194"
          geometry={nodes.Object_194.geometry}
          material={materials.RedPlastic}
          position={[-0.284, 0.334, -0.073]}
        />
        <mesh
          name="Object_196"
          geometry={nodes.Object_196.geometry}
          material={materials.RedPlastic}
          position={[-0.645, 0.343, 0.135]}
        />
        <mesh
          name="Object_198"
          geometry={nodes.Object_198.geometry}
          material={materials.RedPlastic}
          position={[0.689, 0.343, -0.11]}
        />
      </group>
      <group
        name="Stool_(1)_120"
        position={[-4.959, -0.559, -1.502]}
        rotation={[0, 0.294, 0]}
      >
        <mesh
          name="Object_201"
          geometry={nodes.Object_201.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_203"
          geometry={nodes.Object_203.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="Stool_(2)_123"
        position={[-4.453, -0.559, -1.502]}
        rotation={[0, 0.294, 0]}
      >
        <mesh
          name="Object_206"
          geometry={nodes.Object_206.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_208"
          geometry={nodes.Object_208.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="Stool_(3)_126"
        position={[-3.957, -0.559, -1.819]}
        rotation={[0, -0.328, 0]}
      >
        <mesh
          name="Object_211"
          geometry={nodes.Object_211.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_213"
          geometry={nodes.Object_213.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="Stool_(4)_129"
        position={[-4.642, -0.559, -1.042]}
        rotation={[0, 0.048, 0]}
      >
        <mesh
          name="Object_216"
          geometry={nodes.Object_216.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_218"
          geometry={nodes.Object_218.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="Stool_(5)_132"
        position={[-3.981, -0.559, -1.401]}
        rotation={[0, 0.348, 0]}
      >
        <mesh
          name="Object_221"
          geometry={nodes.Object_221.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_223"
          geometry={nodes.Object_223.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="TrashCan_(2)_135"
        position={[-2.088, -0.543, -1.461]}
        rotation={[Math.PI, -1.487, Math.PI]}
      >
        <mesh
          name="Object_225"
          geometry={nodes.Object_225.geometry}
          material={materials.ThrashcCan_Body_texture}
        />
        <mesh
          name="Object_227"
          geometry={nodes.Object_227.geometry}
          material={materials.Trashlid_Base_Color}
          position={[0, 0.374, 0]}
        />
      </group>
      <group
        name="TrashCan_(3)_137"
        position={[-4.92, -0.543, 4.369]}
        rotation={[-Math.PI, -0.188, -Math.PI]}
      >
        <mesh
          name="Object_229"
          geometry={nodes.Object_229.geometry}
          material={materials.ThrashcCan_Body_texture}
        />
        <mesh
          name="Object_231"
          geometry={nodes.Object_231.geometry}
          material={materials.Trashlid_Base_Color}
          position={[0, 0.374, 0]}
        />
      </group>
      <group
        name="Stool_(6)_139"
        position={[-0.383, -0.559, 4.316]}
        rotation={[0, 0.048, 0]}
      >
        <mesh
          name="Object_234"
          geometry={nodes.Object_234.geometry}
          material={materials.DarkMetal}
          position={[0.004, -0.04, 0]}
        />
        <mesh
          name="Object_236"
          geometry={nodes.Object_236.geometry}
          material={materials.Stool_texture}
          position={[0, 0.288, 0]}
        />
      </group>
      <group
        name="ArcadeMachine02_(1)_142"
        position={[-1.353, -0.037, 4.375]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Object_43"
          geometry={nodes.Object_43.geometry}
          material={materials.ArcadeMachine_3_COL_ED}
        />
        <group position={[-1.117, -0.9, 1.917]} ref={aboutPortalGroup}>
          <mesh
            name="Object_45"
            geometry={nodes.Object_45.geometry}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => $menuState.selectedPage.set("about")}
          >
            <MeshPortalMaterial
              side={DoubleSide}
              blend={$menuState.selectedPage.get() === "about" ? 1 : 0}
              ref={aboutPortalMaterial}
            >
              <color attach="background" args={["yellow"]} />
              <ambientLight />
              <KirbyArcade scale={0.2} position={[1.05, -0.25, -7.9]} />
              <OrbitControls />
            </MeshPortalMaterial>
          </mesh>
        </group>
      </group>
      <group
        name="ArcadeMachine01_(1)_144"
        position={[-2.35, -0.037, 4.399]}
        rotation={[-Math.PI, 0, -Math.PI]}
      >
        <mesh
          name="Object_242"
          geometry={nodes.Object_242.geometry}
          material={materials.ArcadeMachine_1_COL_ED}
        />
        <group position={[0.412, -0.907, 1.942]} ref={workPortalGroup}>
          <mesh
            name="Object_244"
            geometry={nodes.Object_244.geometry}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => $menuState.selectedPage.set("work")}
          >
            <MeshPortalMaterial
              side={DoubleSide}
              blend={$menuState.selectedPage.get() === "work" ? 1 : 0}
              ref={workPortalMaterial}
            >
              <color attach="background" args={["red"]} />
              <group position={workPortalGroupPosition.current}>
                <ambientLight />
                <KirbyArcade scale={0.2} position={[-1.35, -0.25, 3.9]} />
                <OrbitControls />
              </group>
            </MeshPortalMaterial>
          </mesh>
        </group>
      </group>
      <mesh
        name="Object_23"
        geometry={nodes.Object_23.geometry}
        material={materials.DarkMetal}
        position={[-5.374, 0.644, -0.253]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        name="Object_63"
        geometry={nodes.Object_63.geometry}
        material={materials.Carpet}
        position={[-0.53, -0.94, 0]}
      />
      <mesh
        name="Object_65"
        geometry={nodes.Object_65.geometry}
        material={materials.Bricks}
        position={[0.916, 0.45, -2.1]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_67"
        geometry={nodes.Object_67.geometry}
        material={materials.Bricks}
        position={[-3.346, 0.45, -2.1]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_69"
        geometry={nodes.Object_69.geometry}
        material={materials.Bricks}
        position={[4.54, 0.45, -2.1]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 2.767, 3.184]}
      />
      <mesh
        name="Object_71"
        geometry={nodes.Object_71.geometry}
        material={materials.Bricks}
        position={[4.63, 0.443, 2.13]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_73"
        geometry={nodes.Object_73.geometry}
        material={materials.Bricks}
        position={[-5.62, 0.45, -0.139]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_75"
        geometry={nodes.Object_75.geometry}
        material={materials.Bricks}
        position={[-5.62, 0.45, 4.122]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_146"
        geometry={nodes.Object_146.geometry}
        material={materials.Roof_texture_1}
        position={[-0.53, 1.86, 0]}
        rotation={[-Math.PI, 0, 0]}
      />
      <mesh
        name="Object_148"
        geometry={nodes.Object_148.geometry}
        material={materials.DarkWood}
        position={[0.916, -0.904, -1.951]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_150"
        geometry={nodes.Object_150.geometry}
        material={materials.DarkWood}
        position={[-3.346, -0.904, -1.951]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_152"
        geometry={nodes.Object_152.geometry}
        material={materials.DarkWood}
        position={[-5.436, -0.904, 0.221]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_154"
        geometry={nodes.Object_154.geometry}
        material={materials.DarkWood}
        position={[-5.436, -0.904, 4.483]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_156"
        geometry={nodes.Object_156.geometry}
        material={materials.DarkWood}
        position={[4.43, -0.904, 2.125]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_158"
        geometry={nodes.Object_158.geometry}
        material={materials.DarkWood}
        position={[3.104, -0.904, -2.081]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 0.062, 0.354]}
      />
      <mesh
        name="Object_160"
        geometry={nodes.Object_160.geometry}
        material={materials.DarkWood}
        position={[4.44, -0.904, -0.014]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.127, 0.062, 0.354]}
      />
      <mesh
        name="Object_170"
        geometry={nodes.Object_170.geometry}
        material={materials.Poster_BaitedSpace}
        position={[-2.44, 0.714, -1.927]}
        rotation={[-Math.PI / 2, -0.015, Math.PI]}
        scale={[0.059, 1.627, 0.099]}
      />
      <mesh
        name="Object_172"
        geometry={nodes.Object_172.geometry}
        material={materials["Poster_NEX-N8R"]}
        position={[-3.403, 0.542, 4.886]}
        rotation={[-1.571, -0.012, 0.01]}
        scale={[0.059, 1.627, 0.099]}
      />
      <mesh
        name="Object_174"
        geometry={nodes.Object_174.geometry}
        material={materials.Poster_NACTOO}
        position={[-4.263, 0.542, 4.882]}
        rotation={[-1.581, -0.01, -0.012]}
        scale={[0.059, 1.627, 0.099]}
      />
      <mesh
        name="Object_176"
        geometry={nodes.Object_176.geometry}
        material={materials.Bricks}
        position={[0.916, 0.45, 5.061]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_178"
        geometry={nodes.Object_178.geometry}
        material={materials.Bricks}
        position={[-3.346, 0.45, 5.061]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_180"
        geometry={nodes.Object_180.geometry}
        material={materials.DarkWood}
        position={[0.916, -0.904, 4.919]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_182"
        geometry={nodes.Object_182.geometry}
        material={materials.DarkWood}
        position={[-3.346, -0.904, 4.919]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_184"
        geometry={nodes.Object_184.geometry}
        material={materials.Bricks}
        position={[5.178, 0.45, 5.061]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_186"
        geometry={nodes.Object_186.geometry}
        material={materials.DarkWood}
        position={[5.178, -0.904, 4.919]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_188"
        geometry={nodes.Object_188.geometry}
        material={materials.Bricks}
        position={[4.63, 0.443, 6.392]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 2.767, 0.341]}
      />
      <mesh
        name="Object_190"
        geometry={nodes.Object_190.geometry}
        material={materials.DarkWood}
        position={[4.43, -0.904, 6.387]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[4.262, 0.062, 0.082]}
      />
      <mesh
        name="Object_246"
        geometry={nodes.Object_246.geometry}
        material={materials["Poster_NEX-N8R"]}
        position={[-5.449, 0.542, 1.399]}
        rotation={[-Math.PI / 2, 0, -1.571]}
        scale={[0.059, 1.627, 0.099]}
      />
      <mesh
        name="Object_248"
        geometry={nodes.Object_248.geometry}
        material={materials.Poster_BaitedSpace}
        position={[-5.449, 0.542, 2.316]}
        rotation={[-1.556, 0, -1.571]}
        scale={[0.059, 1.627, 0.099]}
      />
    </group>
  );
});

useGLTF.preload(FILE_URL);

export default Model;
