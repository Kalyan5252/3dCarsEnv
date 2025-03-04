import React from 'react';

const phaseLighting = () => {
  return (
    <>
      <pointLight
        // color={[1, 1, 1]}
        color={[1, 1, 1]}
        intensity={10000}
        castShadow
        position={[50, 10, 50]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[1, 1, 1]}
        intensity={10000}
        castShadow
        position={[-50, 10, 50]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[1, 1, 1]}
        intensity={10000}
        castShadow
        position={[50, 10, -50]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[1, 1, 1]}
        intensity={10000}
        castShadow
        position={[-50, 10, -50]}
      />{' '}
    </>
  );
};

export default phaseLighting;
