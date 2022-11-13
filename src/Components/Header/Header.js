import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { GiCampCookingPot } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../UserContext/ContextProvider';



const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="navbar bg-base-100 drop-shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold w-52"
          >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/allfoods'>All Foods</Link></li>
          <li><Link to='/orders'>Orders</Link></li>
          <li><Link to='/login'>Log in</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl font-bold">MAD KITCHEN<GiCampCookingPot></GiCampCookingPot></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold">
        <li><Link to='/'>Home</Link></li>
          <li><Link to='/allfoods'>All Foods</Link></li>
          <li><Link to='/orders'>Orders</Link></li>
          <li><Link to='/blogs'>Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      {user?.uid ? (
            <>
            <div className="flex flex-col lg:flex-row md:flex-row">
            <div className="flex flex-col items-center lg:flex-row md:flex-row">
            {user?.photoURL? (<img className="h-10 mx-2" src={user.photoUrl} alt="" />) :(<FaUser className="mx-2"></FaUser>)}
              
              <span className="text-black font-semibold text-[15px] ">{user.email}</span></div>
              <button onClick={handleSignOut}  className="btn px-8 mx-3">
                Log Out
              </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn px-8 mx-3"
              >
                LOGIN
              </Link>
              
            </>
     )}
     </div>
    </div>
  
  );
};

export default Header;
