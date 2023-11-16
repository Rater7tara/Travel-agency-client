import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {

  const navOptions =
    <>
      <li className='hover:bg-sky-400 rounded-md font-bold'><Link to="/home">Home</Link></li>
      <li className='hover:bg-sky-400 rounded-md font-bold'><Link to="/destination">Destination Details</Link></li>
      <li className='hover:bg-sky-400 rounded-md font-bold'><Link to="/about">About</Link></li>
    </>



  return (
    <>
      <div className="navbar max-w-screen-2xl fixed z-10 bg-opacity-30 bg-black text-white mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={logo} alt="" /><span className='text-green-900 font-bold'>Wanderlust Ventures</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">

          <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>

          <button className="btn btn-info">Logout</button>


        </div>
      </div>
    </>
  );
};

export default NavBar;