import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export const QuizContext = createContext([]);
const Root = () => {
    const quizCategory = useLoaderData([])
    return (
        <QuizContext.Provider value={quizCategory}>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </QuizContext.Provider>
    );
};

export default Root;