"use client"
import { ChartLine, Clock8, House, List } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const currentPath = usePathname()
    console.log(currentPath)

    const link = <>
        <li><Link href={`/`} className={currentPath == '/' ? 'bg-[#244D3F] text-white' : ''}><House /> Home</Link></li>
        <li><Link href={`/timeline`} className={currentPath == '/timeline' ? 'bg-[#244D3F] text-white' : ''}><Clock8 /> TimeLines</Link></li>
        <li><Link href={`/status`} className={currentPath == '/status' ? 'bg-[#244D3F] text-white' : ''}> <ChartLine />Status</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={`/`} className={currentPath == '/' ? 'bg-[#244D3F] text-white' : ''}><House /> Home</Link></li>
                        <li><Link href={`/timeline`} className={currentPath == '/timeline' ? 'bg-[#244D3F] text-white' : ''}><Clock8 /> TimeLines</Link></li>
                        <li><Link href={`/status`} className={currentPath == '/status' ? 'bg-[#244D3F] text-white' : ''}> <ChartLine />Status</Link></li>
                    </ul>
                </div>
                <Link href={'/'} className=' text-2xl cursor-pointer '><span className=' font-bold'>Keep</span>Keeper</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={`/`} className={currentPath == '/' ? 'bg-[#244D3F] text-white' : ''}><House /> Home</Link></li>
                    <li><Link href={`/timeline`} className={currentPath == '/timeline' ? 'bg-[#244D3F] text-white' : ''}><Clock8 /> TimeLines</Link></li>
                    <li><Link href={`/status`} className={currentPath == '/status' ? 'bg-[#244D3F] text-white' : ''}> <ChartLine />Status</Link></li>
                </ul>
            </div>
            {/* <div className='sm:flex md:hidden lg:hidden'>
                profile
            </div> */}
        </div>
    );
};

export default Navbar;