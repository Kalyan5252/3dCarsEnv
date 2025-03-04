import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

const Building = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + 'models/untitled1.gltf'
  );
  useEffect(() => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(0, 1.035, 1);
    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;

        // obj.receiveShadow = true;
        obj.material.envMapIntensity = 10;
      }
    });
  }, [gltf]);
  return <primitive object={gltf.scene} />;
};

export default Building;
