import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import './NavBar.css';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const NavBar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const navOptions =
    <>
      <li className='rounded-md hover:bg-yellow-300 font-bold text-white'><Link to="/home">Home</Link></li>
      <li className='hover:bg-yellow-400 rounded-md font-bold'><Link to="/destination">Destination Details</Link></li>
      <li className='hover:bg-yellow-400 rounded-md font-bold'><Link to="/about">About</Link></li>
    </>



  return (
    <>
      <div className="navbar max-w-screen-2xl fixed z-10 bg-black bg-opacity-20 text-white  mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={logo} alt="" /><span className='text-white font-bold'>Wanderlust</span></a>
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

          {
            
            user?.photoURL ?<img src={user.photoURL} className=" user-img rounded-full me-2 " alt="" title={user.displayName} />:<FaUser className='user-img rounded-full me-2 text-3xl'></FaUser>
           }
          {user?
            
          <button onClick={handleLogOut} className="btn btn-warning">Logout</button>
          
             :
            <Link to="/login">
              <button className="btn bg-sky-400">Login</button>
            </Link>
          }


        </div>
      </div>
    </>
  );
};

export default NavBar;
