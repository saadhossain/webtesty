import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export const QuizContext = createContext([]);
export const CorrectAnsContext = createContext();
export const WrongAnsContext = createContext();
export const TotalAnsweredContext = createContext();
const Root = () => {
    const quizCategory = useLoaderData([])
    const [correctAns, setCorrectAns] = useState([]);
    const [wrongAns, setWrongAns] = useState([]);
    const [totalAnswered, setTotalAnswered] = useState([])
    return (
        <QuizContext.Provider value={quizCategory}>
            <CorrectAnsContext.Provider value={[correctAns, setCorrectAns]}>
                <WrongAnsContext.Provider value={[wrongAns, setWrongAns]}>
                    <TotalAnsweredContext.Provider value={[totalAnswered, setTotalAnswered]}>
                        <div>
                            <Header></Header>
                            <Outlet></Outlet>
                            <Footer></Footer>
                        </div>
                    </TotalAnsweredContext.Provider>
                </WrongAnsContext.Provider>
            </CorrectAnsContext.Provider>
        </QuizContext.Provider>
    );
};

export default Root;