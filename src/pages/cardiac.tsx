import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Nav from "../components/Nav";

// @ts-ignore
export function Model(props) {
  const { nodes, materials } = useGLTF("/models/150625.gltf");
  const [hovered, setHovered] = useState(false);

  console.log(nodes);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {props.showMesh.a && (
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes["mesh_0"].geometry}
            material={materials.color_2d2dce}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            <meshStandardMaterial color={hovered ? "#F5F749" : "hotpink"} />
          </mesh>
        )}
        {props.showMesh.b && (
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes["mesh_1"].geometry}
            material={materials.color_d0aaff}
          />
        )}
        {props.showMesh.c && (
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes["mesh_2"].geometry}
            material={materials.color_ffcf80}
          />
        )}
        {props.showMesh.d && (
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes["mesh_3"].geometry}
            material={materials.color_e6e6e6}
          />
        )}
        {props.showMesh.e && (
          <mesh
            castShadow
            receiveShadow
            // @ts-ignore
            geometry={nodes["mesh_4"].geometry}
            material={materials.color_cef0ff}
          />
        )}
      </group>
    </group>
  );
}

export default function Cardiac() {
  const [showMesh, setShowMesh] = useState({
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
  });

  const toggleMesh = (key: string) => {
    setShowMesh((prev) => {
      return {
        ...prev,
        [key]: !showMesh[key as keyof typeof showMesh],
      };
    });
  };

  return (
    <>
      <Head>
        <title>Cardiac gltf Demo</title>
        <meta name="description" content="Cardiac gltf Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="model">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls />
              <OrthographicCamera>
                <Model
                  scale={40}
                  position={[0, -2, 0]}
                  showMesh={showMesh}
                  toggleMesh={toggleMesh}
                />
              </OrthographicCamera>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
        <div className="flex flex-col">
          <button onClick={() => toggleMesh("a")}>Toggle 1st Mesh</button>
          <button onClick={() => toggleMesh("b")}>Toggle 2nd Mesh</button>
          <button onClick={() => toggleMesh("c")}>Toggle 3rd Mesh</button>
          <button onClick={() => toggleMesh("d")}>Toggle 4th Mesh</button>
          <button onClick={() => toggleMesh("e")}>Toggle 5th Mesh</button>
        </div>
      </main>
    </>
  );
}

useGLTF.preload("/models/150625.gltf");
