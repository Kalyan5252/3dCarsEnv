import React from 'react';
import { StateContext } from '../contexts/ContextProvider';
import { useEffect, useContext, useState } from 'react';

const GroundSelector = () => {
  const { utilities, setUtilities } = useContext(StateContext);
  return (
    <div className="w-max p-6 bg-gray-700 text-white font-medium grid grid-cols-2 gap-4 transition-all outline outline-black hover:outline-offset-4">
      <button
        className=""
        onClick={() =>
          setUtilities({
            ...utilities,
            Ground: '',
          })
        }
      >
        No Ground
      </button>
      <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, Ground: 'blured', texture: true })
        }
      >
        Unclear
      </button>
      <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, Ground: 'lRef', texture: true })
        }
      >
        low
      </button>
      <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, Ground: 'clean', texture: false })
        }
      >
        clean
      </button>
    </div>
  );
};

export default GroundSelector;
