import React, { useState } from 'react';
import Alert from './Alert';

const Demo = (props) => {


    function handleClick() {
        setAlert(true);
    }

    function removeAlert() {
        setAlert(false);
    }

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
