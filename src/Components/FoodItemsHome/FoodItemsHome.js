import React , { useEffect, useState } from 'react';
import FoodsHome from './../../Pages/Home/Foods/FoodsHome';

const FoodItemsHome = () => {
    const  [foods, setFoods] = useState([]);
  console.log(foods)


  useEffect(()=>{
    fetch('https://mad-kitchen-server.vercel.app/foods')
    .then(res => res.json())
    .then(data => setFoods(data))
  },[])
    return (
        <div>
             <h1 className='text-center text-3xl font-extrabold my-10'>FOOD ITEMS</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-10/12 md:w-9/12 w-11/12 gap-4  my-10 mx-auto'>
            
          {
            foods.map(food => <FoodsHome key ={food.id} food ={food}></FoodsHome>)
          }
          </div>
          <div className='flex justify-center my-10'>
          <button className='btn px-10'>See ALL</button>
          </div>
        </div>
    );
};

export default FoodItemsHome;