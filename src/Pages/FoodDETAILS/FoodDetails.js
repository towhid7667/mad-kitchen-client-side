import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateItem from '../../Components/UpdateItem/UpdateItem';
import DetailsHere from './DetailsHere';
import {Helmet} from "react-helmet";
const FoodDetails = () => {
    const details = useLoaderData();
   
    console.log(details);
    return (
        <div>
           <Helmet>
            <title>Mad-kitchen-FoodDetails</title>
        </Helmet>
          {
            details.map(detail => <DetailsHere key={detail._id} detail={detail}></DetailsHere>)
          }
           <UpdateItem></UpdateItem>
        </div>
       
    );
};

export default FoodDetails;