import React, { useState } from 'react';
import Alert from './Alert';

const Demo = (props) => {
    let [showAlert, setAlert] = useState(false);

    function handleClick() {
        setAlert(true);
    }

    function removeAlert() {
        setAlert(false);
    }

    return (
        <div>
            {showAlert && (
                <div className="fixed top-0 left-0 right-0 flex justify-center z-50 p-4">
                    <Alert dismissAlert={removeAlert} />
                </div>
            )}
            <div className='border-2 border-solid border-gray-300 p-3 mt-3 ms-2 w-80 rounded-md'>
                <div className='relative'>
                    <img className='w-80 rounded-md h-48' src={`https://dummyimage.com/1600x900/000/fff&text=${props.title}`} alt={props.title} />
                    <div className={props.ratings >= 4.5 ? "bestSeller" : "none"}>Best seller</div> 
                </div>

                <div className='flex place-content-between mb-2'>
                    <h3 className='font-bold mt-3'>{props.title}</h3>
                    <h3 className='bg-red-600 h-6 mt-3 ps-2 pe-2 text-white rounded-md'>{"₹ " + props.price}</h3>
                </div>
                <p>{props.desc}</p>
                
                <div className='flex place-content-between'>
                    <button className='bg-red-600 text-xl h-10 w-60 mt-3 ps-8 pe-8 text-white rounded-md' onClick={handleClick}>Buy now</button>
                    <button className='bg-yellow-400 text-xl mt-3 ps-3 pe-3 rounded-md'>
                        <img src="/images/add-to-cart.svg" alt="add to cart" onClick={handleClick} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Demo;
