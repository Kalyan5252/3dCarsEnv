import React, { useEffect, useContext } from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { SRGBToLinear, RepeatWrapping, TextureLoader } from 'three';
import {
  LinearEncoding,
  sRGBEncoding,
} from '@react-three/drei/helpers/deprecated';
import { StateContext } from '../../contexts/ContextProvider';

const Ground = () => {
  const { utilities } = useContext(StateContext);
  let grnd = utilities.Ground;
  const [roughness, normal] = useLoader(TextureLoader, [
    '/textures/terrain-roughness.jpg',
    // process.env.PUBLIC_URL + 'terrain-normal.jpg',
    '/textures/terrain-normal.jpg',
  ]);
  // const [roughness, normal] = useLoader(TextureLoader, [
  //   process.env.PUBLIC_URL + 'terrain-normal.jpg',
  //   process.env.PUBLIC_URL + 'terrain-roughness.jpg',
  // ]);
  useEffect(() => {
    [normal, roughness].forEach((t) => {
      t.wrapS = RepeatWrapping;
      t.wrapT = RepeatWrapping;
      t.repeat.set(5, 5);
    });
    normal.encoding = LinearEncoding;
    console.log(groundProperties[grnd]);
    grnd = utilities.Ground;
  }, [normal, roughness, grnd]);
  const groundProperties = {
    lRef: (
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        // color={[255.015, 255.015, 255.015]}
        // color={[0.015, 0.015, 0.015]}
        color={[0.015, 0.015, 0.015]}
        roughness={20}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.2}
      />
    ),
    blured: (
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        // color={[255.015, 255.015, 255.015]}
        // color={[0.015, 0.015, 0.015]}
        color={[0.015, 0.015, 0.015]}
        roughness={1200}
        blur={[10000, 10000]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={70} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.5}
      />
    ),
    clean: (
      <MeshReflectorMaterial
        envMapIntensity={0}
        // normalMap={normal}
        // normalScale={[0.15, 0.15]}
        // roughnessMap={roughness}
        dithering={true}
        // color={[255.015, 255.015, 255.015]}
        // color={[0.015, 0.015, 0.015]}
        color={[0.015, 0.015, 0.015]}
        // roughness={0}
        // blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.7}
      />
    ),
  };

  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[130, 130]} />
      {/* <MeshReflectorMaterial
        envMapIntensity={0}
        // normalMap={normal}
        // normalScale={[0.15, 0.15]}
        // roughnessMap={roughness}
        dithering={true}
        // color={[255.015, 255.015, 255.015]}
        // color={[0.015, 0.015, 0.015]}
        color={[0.015, 0.015, 0.015]}
        // roughness={0}
        // blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.7}
      /> */}
      {groundProperties[grnd]}
    </mesh>
  );
};

export default Ground;
