import React from 'react';
import Footer from './Footer';
import Header from './Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='container w-10/12 mx-auto'>
                <div className='flex flex-col items-center justify-center h-[85vh]'>
                    <h1 className='text-8xl font-bold text-amber-600'>404</h1>
                    <h3 className='text-5xl font-semibold'>NOT FOUND!!</h3>
                    <h4 className='text-2xl font-semibold'>Sorry! Something went Wrong...</h4>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;