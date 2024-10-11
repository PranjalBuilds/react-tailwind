import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Demo from './components/Demo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
      <h1 className='text-4xl mt-3 ms-3 font-semibold text-center'>Components</h1>

      <div className='flex gap-5 mt-5 justify-center'>
        <Demo title="Burger" desc="Juicy, big, loaded with toppings of your choice" price="₹ 200"/>
        <Demo title="Pizza" desc="Cheesy pizza with pepperoni toppings." price="₹ 450"/>
        <Demo title="Sushi" desc="Fresh sushi rolls with salmon and avocado." price="₹ 600"/>
        <Demo title="Pasta" desc="Creamy Alfredo pasta with juice." price="₹ 350"/>
        <Demo title="Ice-Cream" desc="Vanilla ice cream with chocolate syrup." price="₹ 120"/>
        <Demo title="Salad" desc="Healthy green salad with a variety of veggies." price="₹ 180"/>
      </div>


      {/* These are the static compontents, can be used when we have to display same data or sections */}
  
    </>
);

