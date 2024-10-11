import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo from './components/Demo'
import App from './App';


let name = 'Pranjal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
      <h1 className='text-4xl mt-2 ms-3 font-semibold text-center'>Components</h1>

      <div className='flex gap-5 mt-5 justify-center'>
        <Demo />
        <Demo />
        <Demo />
      </div>

      {/* These are the static compontents, can be used when we have to display same data or sections */}
  
    </>
);

