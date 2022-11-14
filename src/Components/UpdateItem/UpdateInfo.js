import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateInfo = ({ItemData}) => {
    const[itemInfo, setItemInfo ] = useState(ItemData);
    // console.log(itemInfo)

    const navigate = useNavigate();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.imageurl.value;
        const givenTitle = form.giventitle.value;
        const givenPrice = form.givenprice.value;
        const description = form.description.value;

        const item = {
            img: `${image}`,
            title: givenTitle,
            body: description,
            price: givenPrice
        };
            setItemInfo(item);


        event.preventDefault();
        fetch(`https://mad-kitchen-server-towhid7667.vercel.app/allfoods/${ItemData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(itemInfo)

        })
        .then(res => res.json())
        .then(data => {
                if(data.modifiedCount > 0){
                    alert('Item Updated');
                    navigate('/allfoods')
                   
                }
        });
    }

       
    
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
        <h1 className='uppercase text-3xl font-bold text-center my-5'>Update Item</h1>
        <form onSubmit={handleUpdate} className='flex flex-col items-center bg-teal-800 p-10 rounded-lg lg:w-full md:w-full w-11/12 mx-auto'>
            <input  defaultValue={ItemData.img} type="text" name='imageurl' className='w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Image URL'/>
            <input  defaultValue={ItemData.title} type="text" name='giventitle' className='uppercase w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Title'/>
            <input  defaultValue={ItemData.price} type="text" name='givenprice' className='w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Price with $Sign'/>
            <input  defaultValue={ItemData.body} type="text" name='description' className="textarea textarea-bordered w-3/4  lg:w-1/2 md:w-1/2 my-2 px-2 py-10 rounded-lg text-center" placeholder="Description"></input >
            <button  type="submit"  className='btn my-5 px-8'>Submit</button>
        </form>
    </div>
    );
};

export default UpdateInfo;