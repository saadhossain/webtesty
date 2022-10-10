import { createBrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import ErrorPage from "./Components/ErrorPage";
import Quizes from "./Components/Quizes";
import Statistics from "./Components/Statistics";
import Topics from "./Components/Topics/Topics";
import Root from "./Layout/Root";
import { quizDataLoader } from "./Loader/quizDataLoader";

export const Routes = createBrowserRouter([
    {
        path: '/',
        loader: quizDataLoader,
        element: <Root></Root>,
        children: [
            { path: '/', element: <Topics></Topics> },
            { path: 'topics', element: <Topics></Topics> },
            { path: '/statistics', element: <Statistics></Statistics> },
            { path: '/blogs', element: <Blogs></Blogs> },
            { path: '/about', element: <About></About> },
            {path:'/quize/:id', loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`), element:<Quizes></Quizes>}
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])