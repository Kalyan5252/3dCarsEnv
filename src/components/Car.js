import React, { useEffect, useContext, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import { StateContext } from '../../contexts/ContextProvider';
import { TextureLoader } from 'three';
const Car = () => {
  const { utilities, setUtilities } = useContext(StateContext);
  // let gltf = useLoader(
  //   GLTFLoader,
  //   process.env.PUBLIC_URL + 'models/car/trail.gltf'
  // );
  let gltf = useLoader(GLTFLoader, '/models/car/' + utilities.Model + '.gltf');
  const [key, setKey] = useState(0);
  useEffect(() => {
    // setKey((prevKey) => prevKey + 1); // Update key to force re-render
    console.log('chaned car model');
  }, [gltf]);

  // const texture = new TextureLoader().load('/textures/texture_car.jpeg');
  let texture;
  if (utilities.pattern != '')
    texture = new TextureLoader().load(utilities.pattern);
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // Check if the mesh name corresponds to car body parts
        // if (['CarBody 1_Car Paint_0.001'].includes(child.name)) {
        // }

        if (child.name === 'CarBody_1_Car_Paint_0') {
          child.material.color.set(utilities.carColor);
          child.material.map = texture;
        }

        if (child.name === 'Body_Mesh105') {
          child.material.color.set(utilities.carColor);
          child.material.map = texture;
        }
        if (child.name === 'body003') {
          child.material.color.set(utilities.carColor);
          child.material.map = texture;
        }
        if (child.name === '084-0-84001_2') {
          child.material.color.set(utilities.carColor);
          child.material.map = texture;
        }

        // console.log(child.name);
        // console.log(utilities.carColor);
      }
    });
  }, [gltf, utilities.carColor, utilities.pattern]);

  useEffect(() => {
    console.log('Model is', utilities.Model);
    // ROVER POSITION
    gltf.scene.scale.set(7, 7, 7);
    gltf.scene.position.set(0, 0.0, -10);
    if (utilities.Model === 'corvette') {
      // CORVETTE SCALE
      gltf.scene.scale.set(0.035, 0.035, 0.035);
      gltf.scene.position.set(0, -0.2, 0);
    }
    // CORVETTER POSITION
    // gltf.scene.position.set(0, -0.3, -10);

    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true;
        // obj.receiveShadow = true;
        obj.material.envMapIntensity = 10;
      }
    });
  }, [gltf]);
  return <primitive object={gltf.scene} castShadow={true} />;
};

export default Car;
