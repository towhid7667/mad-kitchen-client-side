import React from 'react';
import FoodItemsHome from '../../Components/FoodItemsHome/FoodItemsHome';
import BannerItem from './BannerItem';
import Hero from './../../Components/Hero/Hero';





const Home = () => {
  
    return (
        <div>
          <BannerItem></BannerItem>
          <FoodItemsHome></FoodItemsHome>
          <Hero/>

        </div>
    );
};

export default Home;