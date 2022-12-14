import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../webtesty.png';
const Header = () => {
    const [expand, setExpand] = useState(false);
    return (
        <div className='bg-[#D3EAF2] shadow-md'>
            <div className='flex justify-between items-center w-10/12 mx-auto py-2'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <img src={logo} alt='WebTesty Logo' className='w-10 h-10' />
                        <h2 className='text-3xl font-bold text-[#FE9200]'>WebTesty</h2>
                    </div>
                </Link>
                <div className='flex gap-4 items-center'>
                    <ul className={`md:flex gap-5 px-20 py-3 rounded-b-lg bg-[#D3EAF2] font-semibold absolute md:static duration-500 ease-in-out ${expand ? 'top-10 right-0' : 'top-[-200px] right-0'}`}>
                        <li><NavLink to="/topics" className={({ isActive }) => isActive ? 'text-[#FE9200]' : 'text-black'}>Topics</NavLink></li>
                        <li><NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-[#FE9200]' : 'text-black'}>Statistics</NavLink></li>
                        <li><NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-[#FE9200]' : 'text-black'}>Blogs</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#FE9200]' : 'text-black'}>About</NavLink></li>
                    </ul>
                    <div className='h-6 w-6 text-black md:hidden' onClick={() => setExpand(!expand)}>
                        {
                            expand ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;