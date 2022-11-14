import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import AllFOODITEMS from './AllFOODITEMS';
import AddItem from './../../Components/AddItem/AddItem';


const Allfoods = () => {
    const listfoods = useLoaderData(); 
    const [allfoods, setAllfoods] = useState(listfoods);
    const  navigation = useNavigate();


    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to cancel this order');
      if (proceed) {
          fetch(`https://mad-kitchen-server-towhid7667.vercel.app/allfoods/${id}`, {
              method: 'DELETE',
              headers: {
                  authorization: `Bearer ${localStorage.getItem('genius-token')}`
              }
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      navigation('/allfoods')
                      const remaining = allfoods.filter(foods => foods._id !== id);
                      setAllfoods(remaining);
                  }
              })
      }
    }
    return (
        <div>
             
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:w-10/12 md:w-10/12 w-11/12 gap-4  my-10 lg:mx-auto md:mx-auto mx-3'>
            
          {
            allfoods.map(foods => <AllFOODITEMS key ={foods._id} foods ={foods} handleDelete = {handleDelete}></AllFOODITEMS>)
          }
          </div>
         <AddItem></AddItem>
         
        </div>
    );
};

export default Allfoods;