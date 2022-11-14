import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const FoodsHome = ({food}) => {
    const {_id, img, title, body, price} = food;
    return (
        <div>
            <div className="card w-96 lg:w-96 md:w-72 bg-base-100 shadow-xl h-[500px]">
            <figure><PhotoProvider><PhotoView src={img}><img src={img} alt="" /></PhotoView></PhotoProvider></figure>
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

export default FoodsHome;