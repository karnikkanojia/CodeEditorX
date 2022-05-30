import React, { useState, useEffect } from 'react'
import CodeEditorWindow from './index';
import axios from 'axios';
import { classnames } from '../utils/general';
import { languageOptions } from '../constants/languageOptions';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from '../lib/defineTheme';
import useKeyPress from '../hooks/useKeyPress';

const Landing = () => {
  return (
    <div>Landing</div>
  )
}

export default Landing