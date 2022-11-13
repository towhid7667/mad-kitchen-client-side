import React from 'react';
import { Link } from 'react-router-dom';

const AllFOODITEMS = ({foods}) => {

    const {_id, img, title, body, price} = foods;
    
    return (
        <div>
        <div className="card w-96 lg:w-96 md:w-72 bg-base-100 shadow-xl h-[500px]">
<figure><img src={img} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{title}</h2>
<p>{body.slice(0,150)}...</p>
<p>{price}</p>
<div className="card-actions justify-end">
<Link to={`/allfoods/${_id}`} className="btn btn-primary text-white font-bold">See Details</Link>
<Link to={`/orders/${_id}`} className="btn btn-primary text-white font-bold">Order Now</Link>
</div>
</div>
</div>
    </div>
    );
};

export default AllFOODITEMS;