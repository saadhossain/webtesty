import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root";
import Topics from "./Components/Topics";
import Statistics from "./Components/Topics";
import Blogs from "./Components/Blogs";
import About from "./Components/About"
import ErrorPage from "./Components/ErrorPage";

export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {path:'/', element:<Topics></Topics>},
            {path:'topics', element:<Topics></Topics>},
            {path:'/statistics', element:<Statistics></Statistics>},
            {path:'/blogs', element:<Blogs></Blogs>},
            {path:'/about', element:<About></About>},
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])