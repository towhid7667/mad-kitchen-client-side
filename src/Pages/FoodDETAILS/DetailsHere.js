import React from 'react';

const DetailsHere = ({detail}) => {
    const {img,title,body,price} = detail;
    
    return (
        <div>
              <div className="hero min-h-screen bg-base-200 text-center">
  <div className="hero-content flex flex-col">
    <img alt='' src={img} className="lg:w-1/2 md:w-1/2 w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 lg:w-1/2 md:w-1/2 w-full mx-auto">{body}</p>
      <p className="py-6 font-extrabold text-2xl">{price}</p>
    </div>
  </div>
</div>
        </div>
    );
};
 
export default DetailsHere;