import React from 'react'

const Demo = (props) => {
  let foodOrderHandler = () => {
    console.log(props.title);
    if (props.price >= 299) {
      console.log('Congratulations! you have unlocked FREE delivery');
    }
    else {
      console.log('+ ₹40 delivery charge');
      console.log('Final price : ₹', props.price + 40);
    }
  }
  return (
    <div className='border-2 border-solid border-gray-300 p-3 mt-3 ms-2 w-80 rounded-md w-90'>

        <div className='relative'>
          <img className='w-80 rounded-md h-48' src={`https://dummyimage.com/1600x900/000/fff&text=${props.title}`} alt={props.title} /> 

          <div className={props.ratings >= 4.5 ? "bestSeller" : "none" }> Best seller</div> {/* conditional rendering */}
        </div>

        <div className='flex place-content-between mb-2'>
          <h3 className='font-bold mt-3'>{props.title}</h3>
          <h3 className='bg-red-600 h-6 mt-3 ps-2 pe-2 text-white rounded-md' > {"₹ "+props.price} </h3>
        </div>
        <p> {props.desc} </p>
        
        <div className='flex place-content-between'>
          <button className='bg-red-600 text-xl h-10 w-60 mt-3 ps-8 pe-8 text-white rounded-md' onClick={foodOrderHandler}>Buy now</button>
          <button className='bg-yellow-400 text-xl mt-3 ps-3 pe-3 rounded-md'> <img src="/images/add-to-cart.svg" alt="add to cart" /></button>
        </div>

    </div>
  )
}

export default Demo;