import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MainContainer from './components/MainContainer';

import './global.sass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
