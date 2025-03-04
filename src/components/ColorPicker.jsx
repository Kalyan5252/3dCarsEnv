'use client';
import React, { useContext } from 'react';
import { SketchPicker } from 'react-color';
import { StateContext } from '../../contexts/ContextProvider';

const ColorPicker = () => {
  const { utilities, setUtilities } = useContext(StateContext);
  // console.log('from picker', utilities);
  return (
    <div>
      <SketchPicker
        disableAlpha
        color={utilities.carColor}
        onChange={(col) => setUtilities({ ...utilities, carColor: col.hex })}
      />
    </div>
  );
};

export default ColorPicker;
