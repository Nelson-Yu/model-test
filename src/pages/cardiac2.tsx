import Head from "next/head";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Nav from "../components/Nav";

function Model() {
  const gltf = useLoader(GLTFLoader, "/models/Tet-Shell.glb");

  return (
    <>
      <primitive object={gltf.scene} scale={100} position={[5, 15, 12.5]} />
    </>
  );
}

export default function Cardiac2() {
  return (
    <>
      <Head>
        <title>Cardiac 2 gltf Demo</title>
        <meta name="description" content="Cardiac 2 gltf Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="model border-4 border-red-600">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls target={[6, 0, -12]} />
              <OrthographicCamera>
                <Model />
              </OrthographicCamera>
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
}
