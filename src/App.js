import React from 'react'

let counter = 0;

const App = () => {

  let incrementHandler = () => {
    console.log(counter+=1);
  }
  return (
    <>
      <h1 className='text-center my-4 font-bold text-3xl'> React useState hook </h1>
      <h1 className='counter text-4xl text-center '>{counter}</h1>
      
      <div className='text-center'>
        <button className='py-3 px-8 my-4 text-3xl bg-blue-600 active:bg-blue-500 text-white rounded-lg' onClick={incrementHandler}>Increment + </button>
      </div>
    </>
  )
}

export default App