import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { ChartLine, Clock8, House } from 'lucide-react'

const Navbar = () => {
    const navigate = useNavigate()
    const links = (
        <>
            <li>
                <NavLink to={'/'} onClick={() => navigate(`/`, scroll(0, 0))} className={({ isActive }) => `${isActive ? 'text-green-500 border-green-500' : ''} `} ><House /> Home</NavLink>
            </li>
            <li>
                <NavLink onClick={() => navigate(`/timeline`, scroll(0, 0))} className={({ isActive }) => `${isActive ? 'text-green-500 border-green-500' : ''} `} to={'/timeline'}> <Clock8 />Timeline</NavLink>
            </li>
            <li>
                <NavLink onClick={() => navigate(`/status`, scroll(0, 0))} className={({ isActive }) => `${isActive ? 'text-green-500 border-green-500' : ''} `} to={'/status'}> <ChartLine />status</NavLink>
            </li>

        </>
    )


    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                        {links}
                    </ul>
                </div>
                <Link href={'/'} className=' text-2xl cursor-pointer '><span className=' font-bold'>Keep</span>Keeper</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>
            {/* <div className='sm:flex md:hidden lg:hidden'>
                profile
            </div> */}
        </div>
    );
};

export default Navbar;