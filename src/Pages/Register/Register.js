import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { AuthContext } from './../../UserContext/ContextProvider';
import { useLocation } from 'react-router-dom';


const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
  
 

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, { replace: true });
           
           
            
        })
        .catch(error => setError(error.message))


    }




    return (
        <div>
            <form onSubmit={ handleSubmit} className="bg-base-200 ">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className=" w-5/12 -my-10  rounded-xl h-34 mx-auto shadow-2xl hidden lg:block">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper rounded-2xl"
            >
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://images.pexels.com/photos/6660071/pexels-photo-6660071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="slide 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://images.pexels.com/photos/5083915/pexels-photo-5083915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="slide 2"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="object-fill w-full h-96"
                  src="https://images.pexels.com/photos/5718062/pexels-photo-5718062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="slide 3"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto lg:mb-0 mb-60 lg:mt-0 mt-20">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phot URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="your photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
                  
                  <p className="text-red-500 my-5">{error}</p>
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
        </div>
    );
};

export default Register;