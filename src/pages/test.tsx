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
  const gltf = useLoader(GLTFLoader, "/models/150625.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={40} position={[0, -2, 0]} />
    </>
  );
}

export default function Cardiac() {
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
