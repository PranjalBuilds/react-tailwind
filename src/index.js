import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FoodItem from './components/Demo'

const foodItems = [
  {
    title: "Paneer Tikka",
    desc: "Grilled marinated paneer cubes with spices.",
    ratings: 4.5,
    price: 250,
    image: "paneer-tikka",
    votes: 120
  },
  {
    title: "Palak Paneer",
    desc: "Creamy spinach curry with paneer cubes.",
    ratings: 4.8,
    price: 300,
    image: "palak-paneer",
    votes: 200
  },
  {
    title: "Chole Bhature",
    desc: "Spicy chickpeas served with deep-fried bread.",
    ratings: 4.3,
    price: 150,
    image: "chole-bhature",
    votes: 150
  },
  {
    title: "Aloo Gobi",
    desc: "Spiced potatoes and cauliflower curry with a delicious flavour.",
    ratings: 4.2,
    price: 180,
    image: "aloo-gobi",
    votes: 100
  },
  {
    title: "Dal Makhani",
    desc: "Rich lentil dish cooked with butter and cream.",
    ratings: 4.7,
    price: 220,
    image: "dal-makhani",
    votes: 180
  },
  {
    title: "Vegetable Biryani",
    desc: "Fragrant basmati rice cooked with mixed vegetables.",
    ratings: 4.6,
    price: 350,
    image: "vegetable-biryani",
    votes: 220
  },
  {
    title: "Masoor Dal",
    desc: "Red lentils cooked with spices and herbs.",
    ratings: 4.4,
    price: 160,
    image: "masoor-dal",
    votes: 90
  },
  {
    title: "Baingan Bharta",
    desc: "Smoky roasted eggplant mashed and spiced.",
    ratings: 4.5,
    price: 200,
    image: "baingan-bharta",
    votes: 110
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <>
      <div className='flex flex-wrap place-content-evenly'>

      {
        foodItems.map((item) => {
          return <FoodItem title={item.title} ratings={item.ratings} desc={item.desc} img={item.image} price={item.price} />
        })
      }
      </div>
    </>
);

