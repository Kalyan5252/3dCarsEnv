import React from 'react';

const StageLights = () => {
  return (
    <>
      <pointLight
        // color={[1, 1, 1]}
        color={[0.7, 0.2, 0.1]}
        intensity={10000}
        castShadow
        position={[20, 10, 20]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[0.1, 0.8, 0.6]}
        intensity={10000}
        castShadow
        position={[-20, 10, 20]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[0.4, 0.8, 0.6]}
        intensity={10000}
        castShadow
        position={[20, 10, -20]}
      />
      <pointLight
        // color={[1, 1, 1]}
        color={[0.8, 0.8, 0.2]}
        intensity={10000}
        castShadow
        position={[-20, 10, -20]}
      />
    </>
  );
};

export default StageLights;
