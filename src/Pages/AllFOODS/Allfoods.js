import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddItem from '../../Components/AddItem/AddItem';
import AllFOODITEMS from './AllFOODITEMS';

const Allfoods = () => {
    const allfoods = useLoaderData(); 
    return (
        <div>
             
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-10/12 md:w-10/12 w-11/12 gap-4  my-10 lg:mx-auto md:mx-auto mx-3'>
            
          {
            allfoods.map(foods => <AllFOODITEMS key ={foods._id} foods ={foods}></AllFOODITEMS>)
          }
          </div>
          <AddItem></AddItem>
        </div>
    );
};

export default Allfoods;