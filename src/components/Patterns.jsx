import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Image from 'next/image';

import { StateContext } from '../contexts/ContextProvider';

const PATTERN_DATA = [
  { path: 'texture_car.jpeg', label: 'Design 1' },
  { path: 'particles.jpeg', label: 'Particles' },
  { path: 'clean_pattern_black_and_white.jpeg', label: 'Kleidio' },
  { path: 'fire_pattern.jpeg', label: 'Fire' },
  { path: 'snow_flakes.jpeg', label: 'Snow Flakes' },
  { path: 'fur_design.jpeg', label: 'Smooth Fur' },
  { path: 'circles.jpeg', label: 'Circles' },
  { path: 'pattern 2.webp', label: 'Pattern 2' },
];

const Patterns = () => {
  const { patternPicker, setUtilities, utilities } =
    React.useContext(StateContext);
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="">
      <Box
        sx={{
          height: '100%',
          width: 300,
          position: 'absolute',
          right: 0,
          top: 0,
          zIndex: 1,
        }}
      >
        {/* <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        /> */}
        <Slide direction="left" in={patternPicker} mountOnEnter unmountOnExit>
          <div className="absolute top-0 right-0 h-full px-8 p-4 flex flex-col gap-4 bg-gray-800 text-gray-100">
            <h1 className="text-2xl font-medium">Try a Pattern</h1>
            <div className="grid grid-cols-2 gap-8 overflow-y-scroll">
              <div
                className="flex flex-col gap-1 items-center cursor-pointer hover:drop-shadow-2xl transition-all"
                onClick={() => {
                  setUtilities({
                    ...utilities,
                    isPattern: false,
                    pattern: '',
                  });
                }}
              >
                <Image
                  src={`/icons/block.png`}
                  alt="no_pattern"
                  height={100}
                  width={100}
                  className="rounded-lg"
                />
                <p>No Pattern</p>
              </div>
              {PATTERN_DATA.map((item, index) => (
                <div
                  className="flex flex-col gap-1 items-center cursor-pointer hover:drop-shadow-2xl transition-all"
                  onClick={() => {
                    setUtilities({
                      ...utilities,
                      isPattern: true,
                      pattern: '/textures/' + item.path,
                    });
                  }}
                >
                  <Image
                    src={`/textures/${item.path}`}
                    alt="pattern_img"
                    height={100}
                    width={100}
                    className="rounded-lg"
                  />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      </Box>
    </div>
  );
};

export default Patterns;
