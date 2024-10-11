import React from 'react'

const Demo = (props) => {
  return (
    <div className='border-2 border-solid border-gray-300 p-3 mt-3 ms-2 rounded-md w-90'>

        <img className='w-80 rounded-md h-48' src={`https://dummyimage.com/1600x900/000/fff&text=${props.title}`} alt={props.title} /> 

        <div className='flex place-content-between mb-2'>
          <h3 className='font-bold mt-3'>{props.title}</h3>
          <h3 className='bg-red-600 h-6 mt-3 ps-2 pe-2 text-white rounded-md'> {props.price} </h3>
        </div>
        <p> {props.desc} </p>
        
        <div className='flex place-content-between'>
          <button className='bg-red-600 text-xl h-10 w-70 mt-3 ps-8 pe-8 text-white rounded-md'>Buy now</button>
          <button className='bg-yellow-400 text-xl mt-3 ps-3 pe-3 rounded-md'> <img src="/images/add-to-cart.svg" alt="add to cart" /></button>
        </div>

    </div>
  )
}

export default Demo;