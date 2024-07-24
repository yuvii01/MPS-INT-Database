import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainContext, { Context } from './Context/MainContext.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <MainContext>
    <App />
    </MainContext>
  </React.StrictMode>

);
