import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { MovieDetails } from "../Pages/MovieDetails";
import { SearchResults } from "../Pages/SearchResults";
import { App } from "../Components/App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/movie/:id',
                element: <MovieDetails/>
            },
            {
                path: '/search',
                element: <SearchResults/>
            }
        ]
    }
]);