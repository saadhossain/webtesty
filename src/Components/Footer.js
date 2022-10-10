import React from 'react';
import logo from '../webtesty.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-[#D3EAF2] shadow-md'>
            <div className='w-10/12 mx-auto py-2'>
                <div className='flex items-center justify-center'>
                    <img src={logo} alt='WebTesty Logo' className='w-8 h-8' />
                    <p className='md:text-lg'>WebTesty is Programming Quize WebApp ! Made with 🧡 </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;