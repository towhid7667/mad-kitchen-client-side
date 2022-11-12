import React from 'react';

const Banner = ({slide}) => {
    const {id, image, prev,next} = slide;
   
    return (
        
        <div id={`slide${id}`} className="carousel-item relative w-full bg-gradient-to-r from-orange-700 to-blue-500">
          <img alt='' src={image} className="w-full opacity-70  " />

          <div className="absolute flex justify-between transform -translate-x-1/2 -translate-y-1/2  left-1/2  top-1/4">
            <h1 className='text-[30px] lg:text-[100px] md:text-[70px] font-extrabold text-white text-center leading-tight tracking-widest'>MAD KITCHEN</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2">
            <p className='text-[10px] lg:text-xl md:text-1xl text-center text-white'>A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services.</p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 -translate-x-1/2 left-1/2 top-3/4 my-3 lg:my-0 md:my-0 pb-0 lg:pb-40 md:pb-28">
            <button className='btn'>Explore Foods</button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
          </div>
        </div> 
        
    );
};

export default Banner;