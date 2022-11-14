import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const navigate = useNavigate();

    const handleAddItem = event => {
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

        fetch('https://mad-kitchen-server-towhid7667.vercel.app/allfoods', {
            method : "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Item Added successfully')
                navigate('/allfoods')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));
    }
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h1 className='uppercase text-3xl font-bold text-center my-5'>Add New Item</h1>
            <form onSubmit={handleAddItem} className='flex flex-col items-center bg-teal-800 p-10 rounded-lg lg:w-full md:w-full w-11/12 mx-auto'>
                <input type="text" name='imageurl' className='w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Image URL'/>
                <input type="text" name='giventitle' className='uppercase w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Title'/>
                <input type="text" name='givenprice' className='w-3/4 lg:w-1/2 md:w-1/2 my-2 px-2 py-3 rounded-lg text-center' placeholder='Price with $Sign'/>
                <input name='description' className="textarea textarea-bordered w-3/4  lg:w-1/2 md:w-1/2 my-2 px-2 py-10 rounded-lg text-center" placeholder="Description"></input >
                <input type="submit" value="Submit" className='btn my-5 px-8' />
            </form>
        </div>
    );
};

export default AddItem;