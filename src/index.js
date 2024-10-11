import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let name = 'Pranjal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
      <h1 className='font-body text-4xl mt-2 ms-3 font-semibold text-center'>Hello World!</h1>
      
      <p className='font-body font-light bg-red-100 text-center '>calculation: {Math.floor(Math.random()*10)} </p>
      
      <p className='font-body font-light mt-2 bg-red-100 text-center '>variable check: {name} </p>

    </>
);

