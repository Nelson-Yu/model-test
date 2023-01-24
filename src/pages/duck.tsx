import Head from "next/head";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Nav from "../components/Nav";

function Model() {
  const gltf = useLoader(GLTFLoader, "/models/Duck.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
}

export default function Duck() {
  return (
    <>
      <Head>
        <title>Duck gltf Demo</title>
        <meta name="description" content="Duck gltf Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav />
        <div className="model">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls />
              <Model />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
}
