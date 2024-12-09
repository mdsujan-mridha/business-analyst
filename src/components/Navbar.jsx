import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 px-12 shadow-lg">
                <div className="flex-1">
                    <Link className="btn btn-ghost text-xl" to="/home"> <img src={logo} alt="logo" className='w-12 h-12 rounded-md'/> InsightEdge</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link>About us</Link></li>
                        <li><Link>Contact</Link></li>
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;