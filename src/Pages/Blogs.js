import React from 'react';
import {Helmet} from "react-helmet";
const Blogs = () => {
    return (
      <div>
          <Helmet>
            <title>Mad-kitchen-blogs</title>
        </Helmet>
        <div className='w-11/12 lg:w-10/12 md:w-10/12 mx-auto'>
            <div className="hero min-h-screen bg-base-200 my-5 p-10 rounded-lg ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://images.pexels.com/photos/5203849/pexels-photo-5203849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Difference between SQL and NoSQL</h1>
      <p className="py-6">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
    </div>
  </div>
</div>
            <div className="hero min-h-screen bg-base-200 my-5 p-10 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">What is JWT, and how does it work?</h1>
      <p className="py-6">
What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
    </div>
  </div>
</div>
            <div className="hero min-h-screen bg-base-200 my-5 p-10 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">What is the difference between javascript and NodeJS?</h1>
      <p className="py-6">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
    </div>
  </div>
</div>
            <div className="hero min-h-screen bg-base-200 my-5 p-10 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">How does NodeJS handle multiple requests at the same time?</h1>
      <p className="py-6">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Blogs;