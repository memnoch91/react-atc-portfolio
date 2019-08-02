import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import PrimaryLayout from './app-structure/primary-shared-structures/PrimaryLayout';


export default function App() {
  return (
    <Router>
      <PrimaryLayout />
    </Router>
  )
}

