import React from 'react';
import FoodItemsHome from '../../Components/FoodItemsHome/FoodItemsHome';
import BannerItem from './BannerItem';





const Home = () => {
  
    return (
        <div>
          <BannerItem></BannerItem>
          <FoodItemsHome></FoodItemsHome>

        </div>
    );
};

export default Home;