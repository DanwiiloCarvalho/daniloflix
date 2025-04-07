import { createBrowserRouter } from "react-router-dom";
import { App } from "../Components/App";
import { ErrorPage } from "../Pages/ErrorPage";
import { Homepage } from "../Pages/Homepage";
import { MovieDetails } from "../Pages/MovieDetails";
import { NoResults } from "../Pages/NoResults";
import { SearchResults } from "../Pages/SearchResults";

export const router = createBrowserRouter([
    {
        path: '/daniloflix/',
        element: <App/>,
        children: [
            {
                path: '/daniloflix/',
                element: <Homepage/>
            },
            {
                path: '/daniloflix/movie/:id',
                element: <MovieDetails/>
            },
            {
                path: '/daniloflix/search',
                element: <SearchResults/>,
                /* children: [
                    {
                        path: '/daniloflix/search',
                        element: <NoResults/>
                    }
                ] */
            },
            {
                path: '/daniloflix/notfound',
                element: <NoResults/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);