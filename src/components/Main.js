'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from '@react-three/drei';
import Ground from './Ground';
import Car from './Car';
import Building from './Building';
import StageLights from './StageLights';
import PhaseLighting from './phaseLighting';

import { StateContext } from '../../contexts/ContextProvider';
import { useEffect, useContext } from 'react';
import Stage from './Stage';

function CarContainer() {
  const { utilities } = useContext(StateContext);

  return (
    <Suspense fallback={null}>
      <Car key={utilities.Model} />
    </Suspense>
  );
}

function CarShow() {
  const { utilities, setUtilities } = useContext(StateContext);
  return (
    <>
      {utilities.environment &&
        utilities.environment !== 'stage' &&
        utilities.environment !== 'showcase' && (
          <Environment
            // files="/environments/kloppenheim_06_puresky_4k.exr"
            files={`/environments/${utilities.environment}`}
            background
          />
        )}
      <color args={[0, 0, 0]} attach="background" />
      {/* <Building /> */}
      <CarContainer />
      {/* <spotLight
          color={[1, 0.25, 0.7]}
          intensity={100}
          angle={0.6}
          penumbra={0.5}
          position={[5, 5, 0]}
          castShadow
          shadow-bias={-0.0001}
        /> */}
      <ambientLight intensity={1} />
      {/* <pointLight
          color={[1, 1, 1]}
          intensity={100}
          castShadow
          position={[0, 200, 5]}
        /> */}
      {/* 4 direction plane lights */}
      <spotLight
        // color={[1, 1, 1]}
        color={[1, 1, 1]}
        intensity={300}
        castShadow
        position={[0, 5, 5]}
      />
      {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={'red'} />
        </mesh> */}
      {/* {![
        'victoria_sunset_4k.exr',
        'wide_street_01_4k.exr',
        'wide_street_02_4k.exr',
      ].includes(utilities.environment) && <Ground />} */}
      {utilities.environment === 'stage' ? <StageLights /> : <PhaseLighting />}/
      {/* {utilities.Ground === 'ground' && <Ground />} */}
      {['blured', 'lRef', 'clean'].includes(utilities.Ground) &&
        utilities.environment !== 'stage' && <Ground />}
      {utilities.environment === 'stage' && <Stage />}
      {/* {utilities.Ground === 'ground' ? } */}
    </>
  );
}

const loading = () => {
  return (
    <div className="min-h-[100vh] min-w-full flex items-center justify-center text-center text-blue-300 text-2xl font-light">
      Rendering the Scene...
    </div>
  );
};

const Main = () => {
  const { utilities, setUtilities } = useContext(StateContext);
  return (
    <div
      className={`absolute w-full h-screen top-0 bg-black ${
        !utilities.editMode ? 'z-10' : 'z-[-10]'
      } min-h-[100vh]`}
    >
      <Suspense fallback={loading()}>
        <Canvas shadows>
          <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
          <PerspectiveCamera makeDefault fov={50} position={[120, 20, -125]} />
          <CarShow key={utilities.Model} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Main;
