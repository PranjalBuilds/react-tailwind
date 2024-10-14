import React from 'react'
import { useState } from 'react';
import './index.css';

const App = () => {
  let [counter, setCounter] = useState(0);

  let [visibility, setVisibility] = useState(false);

  function boxHandler () {
    setVisibility(!visibility);
  }

  return (
    <>
      <h1 className='text-center my-4 font-bold text-3xl'> React useState hook </h1>
          
      <div className='text-center'>
        <button className='py-3 px-8 my-4 text-3xl bg-blue-600 active:bg-blue-500 text-white rounded-lg' onClick={boxHandler}> toggle the box </button>
      </div>

      <div className='flex justify-center place-content-center'>
        <div className={visibility == true ? "demo" : "none"}>
      </div>
        
      </div>
    </>
  )
}

export default App;