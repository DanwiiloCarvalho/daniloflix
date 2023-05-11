import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { MovieDetails } from "../Pages/MovieDetails";
import { SearchResults } from "../Pages/SearchResults";
import { App } from "../Components/App";
import { NoResults } from "../Pages/NoResults";
import { ErrorPage } from "../Pages/ErrorPage";

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
                children: [
                    {
                        path: '/daniloflix/search',
                        element: <NoResults/>
                    }
                ]
            },
            {
                path: '/daniloflix/notfound',
                element: <NoResults/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);