import React from 'react';

const FoodsHome = ({food}) => {
    const {_id, img, title, body, price} = food;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[500px]">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{body.slice(0,150)}...</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">See Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodsHome;