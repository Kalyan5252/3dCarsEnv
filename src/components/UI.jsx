'use client';
import React from 'react';
import ColorPicker from './ColorPicker';
import EnvSelector from './EnvSelector';
import ModelPicker from './ModelPicker';
import Patterns from './Patterns';
import GroundSelector from './GroundSelector';
import { StateContext } from '../contexts/ContextProvider';
import { useEffect, useContext, useState } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

// import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
// import Slide from '@mui/material/Slide';
// import FormControlLabel from '@mui/material/FormControlLabel';

const UI = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientName: document.getElementById('client').value,
        carModel: utilities.Model,
        color: utilities.carColor,
        material: document.getElementById('material').value,
        texture: utilities.isPattern ? utilities.pattern : null,
      }),
    });

    if (res.ok) {
      setOpen(false);
      setLoading(false);
      return toast('Design Saved Successfully!!!', {
        position: 'top-center',
        autoClose: 2000,
        pauseOnHover: false,
        type: 'success',
      });
    } else {
      setOpen(false);
      setLoading(false);
      return toast('Cannot Save the Design!!!', {
        position: 'top-center',
        autoClose: 2000,
        pauseOnHover: false,
        type: 'error',
      });
    }
  };

  const {
    utilities,
    setUtilities,
    patternPicker,
    setpatternPicker,
    modelSelector,
    setModelSelector,
  } = useContext(StateContext);
  const [activeColorPicker, setActiveColorPicker] = useState(false);
  // const [activePatternPicker, setActivePatternPicker] = useState(false);
  const [activeEnvPicker, setActiveEnvPicker] = useState(false);
  const [activeModelSelector, setActiveModelSelector] = useState(false);
  const [activeGroundSelector, setActiveGroundSelector] = useState(false);

  const handlePickers = () => {
    setActiveColorPicker(false);
    setActiveEnvPicker(false);
    setActiveModelSelector(false);
    setActiveGroundSelector(false);
    setpatternPicker(false);
    setModelSelector(false);
    // utilities.patternPanel = false;
  };
  return (
    <div className="">
      <ToastContainer />
      <div
        className={`${
          open ? 'block' : 'hidden'
        } z-50 absolute top-[50%] left-[50%]`}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="model detailer"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center  w-full min-h-[100vh] "
        >
          <Box
            sx={{}}
            className="bg-gray-800 text-gray-50 rounded-lg p-4 flex flex-col gap-8 w-[25rem]"
          >
            <h1 className="text-center font-medium text-xl">Model Details</h1>
            <form action={handleSubmit} className="flex flex-col gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Client Name</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Enter the Client Name"
                  required
                  id="client"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Car Model</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Car Model"
                  id="model"
                  required
                  value={utilities.Model}
                  readOnly
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Car Color</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Car Color"
                  required
                  id="colorInput"
                  value={utilities.carColor}
                  readOnly
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Car Material</label>
                {/* <input
                  type="text"
                  className="form_input"
                  placeholder="Material Type"
                  required
                /> */}
                <select name="" id="material" className="form_input">
                  <option>Select Body Material</option>
                  <option value="matte">Matte</option>
                  <option value="metallic">Metallic</option>
                  <option value="carbon">Carbon</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label>Body Texture</label>
                <input
                  type="text"
                  // className="form_input opacity-45"
                  className="form_input"
                  placeholder="Body Texture"
                  // required
                  value={utilities.isPattern ? utilities.pattern : 'No Pattern'}
                  readOnly
                  // disabled
                />
              </div>
              {!loading ? (
                <button
                  id="saveBtn"
                  className="font-medium transition-all text-center bg-gray-700 text-white rounded-lg py-3 hover:bg-gray-600"
                >
                  Save the Model
                </button>
              ) : (
                <CircularProgress />
              )}
            </form>
          </Box>
        </Modal>
      </div>
      <div
        className={`z-40 ${
          utilities.editMode ? 'block' : 'hidden'
        }  transition-all flex flex-col gap-4 items-start p-4 shdaow-lg backdrop-blur-sm w-fit bg-gray-800 h-screen`}
      >
        <Link href="/dashboard" className="w-full">
          <div className="px-5 self-center w-full">
            <button className="px-4 py-3 mb-10 w-full bg-gray-700 text-white outline outline-black hover:outline-offset-4 transition-all">
              Admin Dashboard
            </button>
          </div>
        </Link>
        <div className="relative grid grid-cols-2 gap-4 p-4">
          <button
            className="p-6 bg-gray-700 flex items-center justify-center outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handlePickers();
              setActiveColorPicker(!activeColorPicker);
            }}
          >
            <h2 className="text-white max-w-[7ch]">Color Picker</h2>
          </button>
          <button
            className="p-6 bg-gray-700 flex items-center justify-center outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handlePickers();
              // utilities.patternPanel = !utilities.patternPanel;
              setpatternPicker(!patternPicker);
            }}
          >
            <h2 className="text-white max-w-[7ch]">Pattern Picker</h2>
          </button>
          <button
            className="p-6 bg-gray-700 outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handlePickers();
              setActiveEnvPicker(!activeEnvPicker);
            }}
          >
            <h2 className="text-white max-w-[8ch]">Environment Selector</h2>
          </button>
          <button
            className="p-6 bg-gray-700 outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handlePickers();
              setActiveGroundSelector(!activeGroundSelector);
            }}
          >
            <h2 className="text-white max-w-[8ch]">Ground Selector</h2>
          </button>
          <button
            className="p-6 bg-gray-700 outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handlePickers();
              // setActiveModelSelector(!activeModelSelector);
              setModelSelector(!modelSelector);
            }}
          >
            <h2 className="text-white max-w-[8ch]">Car Model Selector</h2>
          </button>

          <div
            className={`absolute top-4 left-full ${
              activeColorPicker ? 'block' : 'hidden'
            }`}
          >
            <ColorPicker />
          </div>
          <div
            className={`absolute top-4 left-full backdrop-blur-sm ${
              activeEnvPicker ? 'block' : 'hidden'
            }`}
          >
            <EnvSelector />
          </div>
          <div
            className={`absolute top-4 left-full backdrop-blur-sm ${
              activeGroundSelector ? 'block' : 'hidden'
            }`}
          >
            <GroundSelector />
          </div>
        </div>

        <div className=" px-5 self-center w-full">
          <button
            className="px-4 py-3 w-full bg-gray-700 text-white outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              setUtilities({ ...utilities, editMode: !utilities.editMode });
            }}
          >
            Switch to 3D
          </button>
        </div>

        <div className="px-5 self-center w-full">
          <button
            className="px-4 py-3 w-full bg-gray-700 text-white outline outline-black hover:outline-offset-4 transition-all"
            onClick={() => {
              handleOpen();
            }}
          >
            Save the Model
          </button>
        </div>
      </div>

      <div className={`${utilities.editMode ? 'block' : 'hidden'}`}>
        <ModelPicker />
      </div>

      <div className={`${utilities.editMode ? 'block' : 'hidden'}`}>
        {/* <Box
          sx={{
            height: 180,
            width: 130,
            position: 'relative',
            // top: 0,
            // right: 0,
            zIndex: 1,
          }}
        >
          <FormControlLabel
            control={
              <Switch
                checked={activePatternPicker}
                onChange={() => setActivePatternPicker(!activePatternPicker)}
              />
            }
            label="Show"
          />
          <Slide
            direction="left"
            in={activePatternPicker}
            mountOnEnter
            unmountOnExit
          >
            
          </Slide>
        </Box> */}
        <Patterns />
      </div>

      <button
        className={`outline outline-black hover:outline-offset-4 absolute bottom-5 right-5 px-4 py-3 bg-gray-700 text-white z-40 ${
          !utilities.editMode ? 'block' : 'hidden'
        } transition-all`}
        onClick={() => {
          setUtilities({ ...utilities, editMode: !utilities.editMode });
        }}
      >
        Customization Mode
      </button>
    </div>
  );
};

export default UI;
