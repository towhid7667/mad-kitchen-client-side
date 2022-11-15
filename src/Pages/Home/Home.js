import React from 'react';
import FoodItemsHome from '../../Components/FoodItemsHome/FoodItemsHome';
import BannerItem from './BannerItem';
import Hero from './../../Components/Hero/Hero';
import Herotwo from '../../Components/Hero/Herotwo';





const Home = () => {
  
    return (
        <div>
          <BannerItem></BannerItem>
          <FoodItemsHome></FoodItemsHome>
          <Hero/>
          <Herotwo></Herotwo>

        </div>
    );
};

export default Home;