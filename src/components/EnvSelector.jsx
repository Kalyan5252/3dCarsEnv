import React from 'react';
import { StateContext } from '../contexts/ContextProvider';
import { useEffect, useContext, useState } from 'react';

const EnvSelector = () => {
  const { utilities, setUtilities } = useContext(StateContext);
  return (
    <div className="w-max p-6 bg-gray-700 text-white font-medium grid grid-cols-2 gap-4 transition-all outline outline-black hover:outline-offset-4">
      <button
        className=""
        onClick={() =>
          setUtilities({
            ...utilities,
            environment: 'kloppenheim_06_puresky_4k.exr',
          })
        }
      >
        Sky
      </button>
      <button
        onClick={() => {
          setUtilities({ ...utilities, environment: 'stage' });
        }}
      >
        Stage
      </button>
      <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, environment: 'wide_street_01_4k.exr' })
        }
      >
        Street
      </button>
      {/* <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, environment: 'wide_street_02_4k.exr' })
        }
      >
        Env 3
      </button> */}
      {/* <button
        className=""
        onClick={() =>
          setUtilities({ ...utilities, environment: 'victoria_sunset_4k.exr' })
        }
      >
        Env 4
      </button> */}
    </div>
  );
};

export default EnvSelector;
