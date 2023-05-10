import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { MovieDetails } from "../Pages/MovieDetails";
import { SearchResults } from "../Pages/SearchResults";
import { App } from "../Components/App";
import { NoResults } from "../Pages/NoResults";
import { ErrorPage } from "../Pages/ErrorPage";

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
                element: <SearchResults/>,
                children: [
                    {
                        path: '/search',
                        element: <NoResults/>
                    }
                ]
            },
            {
                path: '/notfound',
                element: <NoResults/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);