import React from 'react';
import { StateContext } from '../../contexts/ContextProvider';
import { useEffect, useContext, useState } from 'react';

import Slide from '@mui/material/Slide';
import Image from 'next/image';
import Box from '@mui/material/Box';

const ModelPicker = () => {
  const { utilities, setUtilities, modelSelector } = useContext(StateContext);
  return (
    <div className="">
      <Box
        sx={{
          height: '100%',
          width: 300,
          position: 'absolute',
          right: 0,
          top: 0,
          // zIndex: 10,
        }}
      >
        <Slide direction="left" in={modelSelector} mountOnEnter unmountOnExit>
          <div className="h-full p-4 bg-gray-800">
            <h1 className="p-4 text-white text-2xl font-bold">
              Select the Car
            </h1>
            <div className="p-4 grid grid-cols-2 gap-8 text-gray-100">
              <button
                className="z-10 cursor-pointer hover:drop-shadow-lg transition-all"
                onClick={() =>
                  setUtilities({
                    ...utilities,
                    Model: 'rrModel',
                  })
                }
              >
                <Image
                  src="/images/rangeRover.webp"
                  alt="rangeRover"
                  height={350}
                  width={350}
                  className="rounded-lg"
                />
                <p className="mt-2">Range Rover</p>
              </button>
              <button
                className="z-10 cursor-pointer hover:drop-shadow-lg transition-all"
                onClick={() =>
                  setUtilities({ ...utilities, Model: 'audiCoupe' })
                }
              >
                <Image
                  src="/images/audiCoupe.webp"
                  alt="audiCoupe"
                  height={350}
                  width={350}
                  className="rounded-lg"
                />
                <p className="mt-2">Audi</p>
              </button>
              <button
                className="z-10 cursor-pointer hover:drop-shadow-lg transition-all"
                onClick={() => setUtilities({ ...utilities, Model: 'hyundai' })}
              >
                <Image
                  src="/images/hyundai.webp"
                  alt="hyundai"
                  height={350}
                  width={350}
                  className="rounded-lg"
                />
                <p className="mt-2">Hyundai</p>
              </button>
              <button
                className="z-10 cursor-pointer hover:drop-shadow-lg transition-all"
                onClick={() =>
                  setUtilities({ ...utilities, Model: 'corvette' })
                }
              >
                <Image
                  src="/images/corvette.webp"
                  alt="corvette"
                  height={350}
                  width={350}
                  className="rounded-lg"
                />
                <p className="mt-2">Corvette</p>
              </button>
            </div>
          </div>
        </Slide>
      </Box>
    </div>
  );
};

export default ModelPicker;
