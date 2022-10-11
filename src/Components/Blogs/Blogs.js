import React from 'react';
import ContextImg from './Assests/how-does-context-api-work.jpg';
import RouterImg from './Assests/purpose-of-react-router.jpg';
import userefImg from './Assests/useref-hook-in-react.jpg';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto grid md:grid-cols-2 gap-10 py-10'>
            {/* Blog -1  */}
            <div className='rounded-lg bg-[#D3EAF2] p-5'>
                <article>
                    <img src={RouterImg} alt='Purpose of React Router' className='rounded-lg' />
                    <h1 className='text-2xl font-semibold my-3'>What is the Purpose of React Router?</h1>
                    <p>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.<br />
                        React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications.<br /><br />
                        React Router allow us to navigate between URLS and prevent reloading.
                        It reduce the server response time and reduce server load time... React Router mostly used for building Single Page Application(SPA).<br /><br />
                        <code>
                            <p>Route, Link, BrowserRouter and Router</p>
                        </code>
                        are the common components for using react router. They should import from
                        <code>'react-router-dom'</code>
                    </p>
                </article>
            </div>

            {/* Blog -2 */}
            <div className='rounded-lg bg-[#D3EAF2] p-5'>
                <article>
                    <img src={ContextImg} alt='How Does Context API Work?' className='rounded-lg' />
                    <h1 className='text-2xl font-semibold my-3'>How Does Context API Work?</h1>
                    <p>
                        Context provides a way to pass data through the component tree without having to pass props down manually at every level.<br /><br />
                        In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.<br /><br />
                        Context is primarily used when some data needs to be accessible by many components at different nesting levels. We should Apply it sparingly because it makes component reuse more difficult.<br />
                        Creating a Context
                        <code>
                            const ContextName = createContext(value);
                        </code>
                        while using a context we use <code> const dataName = useContext(ContextName);</code>
                    </p>
                </article>
            </div>
            {/* Blog -3 */}
            <div className='rounded-lg bg-[#D3EAF2] p-5'>
                <article>
                    <img src={userefImg} alt='Details about useRef() Hook in React' className='rounded-lg' />
                    <h1 className='text-2xl font-semibold my-3'>Details about useRef() Hook in React</h1>
                    <p>
                        <code>useRef</code> returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument <code>(initialValue)</code>. The returned object will persist for the full lifetime of the component.<br /><br />

                        Example: <code>const refContainer = useRef(initialValue)</code><br /><br />

                        Essentially, <code>useRef</code> is like a “box” that can hold a mutable value in its .current property.

                        You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <code>ref=myRef</code>, React will set its .current property to the corresponding DOM node whenever that node changes.

                        However, <code>useRef()</code> is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.<br/><br/>

                        This works because <code>useRef()</code> creates a plain JavaScript object. The only difference between <code>useRef() </code> and creating a <code>current...</code> object yourself is that useRef will give you the same ref object on every render. <br/><br/>

                        Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current <code>property</code> doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a <code>DOM</code> node, you may want to use a <code>callback</code> ref instead.


                    </p>
                </article>
            </div>
        </div>
    );
};

export default Blogs;