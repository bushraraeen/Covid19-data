import React from 'react';
import ReactDOM from 'react-dom/client';
import './Covid.css';

import Covid19 from './Covid19.jsx';

import App from './App';
import reportWebVitals from './reportWebVitals';






//import {BrowserRouter} from "react-router-dom";










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   
      <>
      <Covid19 />
      <App/>
      </>
   
  
);

reportWebVitals();