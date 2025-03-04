'use client';
import React from 'react';
import ContextProvider from '../../../contexts/ContextProvider';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import UI from '@/components/UI';
import Main from '@/components/Main';

const page = () => {
  return (
    <ContextProvider>
      <UI />
      <Main />
    </ContextProvider>
  );
};

export default page;
