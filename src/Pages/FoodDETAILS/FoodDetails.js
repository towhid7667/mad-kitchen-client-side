import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdateItem from '../../Components/UpdateItem/UpdateItem';
import DetailsHere from './DetailsHere';

const FoodDetails = () => {
    const details = useLoaderData();
   
    console.log(details);
    return (
        <div>
          {
            details.map(detail => <DetailsHere key={detail._id} detail={detail}></DetailsHere>)
          }
           <UpdateItem></UpdateItem>
        </div>
       
    );
};

export default FoodDetails;