import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { MovieDetails } from "../Pages/MovieDetails";
import { SearchResults } from "../Pages/SearchResults";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/movie/:movieid',
        element: <MovieDetails/>
    },
    {
        path: '/search',
        element: <SearchResults/>
    }
]);