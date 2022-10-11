import React from 'react';

const About = () => {
    return (
        <div className='w-10/12 md:w-2/4 mx-auto my-5'>
            <h1 className='text-2xl font-bold'> About WebTesy Quiz App</h1>
            This app is Created with React <a href='https://reactjs.org/'> https://reactjs.org/</a>.

            <h1 className='text-xl font-bold'>Feature of this App</h1>
                <li>You Can Participate in Programming Quiz</li>
                <li>Total 4 Quiz Topic</li>
                <li>When Click on any Topic it will show all the quiz under related topic</li>
                <li>App Shows Correct or Wrong Answer popup after clicking on Quiz option</li>
                <li>You can See Correct answer by clicking on the Eye Icon at the top-right corner of the Question</li>
                <li>You can See Total Correct and False Answer</li>

            <h1 className='text-xl font-bold'>Others Technology Used in this Project</h1>

            <h1 className='text-xl font-semi'>Tailwind CSS</h1>

            <p>Installed via Command <code>npm install -D tailwindcss postcss autoprefixer</code></p>
            <p><code>npx tailwindcss init -p</code></p>

            <h1 className='text-xl font-semi'>React Router DOM</h1>

            <p>Installed via Command <code>npm install react-router-dom</code></p>

            <h1 className='text-xl font-semi'>Hero Icons by Tailwindcss</h1>

            <p>Install using <code>npm install @heroicons/react</code></p>
             
            <h1 className='text-xl font-semi'>React Toastify</h1>
            
            <p>To show Popup message after action/interaction, Installed via <code>npm install --save react-toastify</code></p>
            
            <h1 className='text-xl font-semi'>Rechart</h1>
            
            <p>To show Data As a Chart, Installed using command <code>npm install recharts</code></p>
            

             
        </div>
    );
};

export default About;