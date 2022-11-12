import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-full bg-teal-600 max-w-screen-xl  lg:w-full md:w-10/12 w-96  mx-auto p-10 rounded-3xl my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-white">MAD KITCHEN!</h1>
            <p className="py-6 text-justify text-white">A restaurant is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.</p>
            <button className="btn btn-primary text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Hero;