import { useEffect, useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import classes from './Homepage.module.css';

export type Movie = {
    id: number,
    poster_path: string,
    title: string,
    vote_average: number
}

type DataResponse = {
    page:number,
    results: Movie[],
    total_pages: number,
    total_results: number
}

export function Homepage() {

    const [moviesTopRated, setMoviesTopRated] = useState<Movie[] | null>(null);
    const api:string = import.meta.env.VITE_API;
    const api_key:string = import.meta.env.VITE_API_KEY;
    const language:string = import.meta.env.VITE_API_LANGUAGE;

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(api + '?' + api_key + '&' + language);
                const data: DataResponse = await response.json();
                const dataMovies = data.results.map(value => {
                    return {
                        id: value.id,
                        poster_path: value.poster_path,
                        title: value.title,
                        vote_average: value.vote_average
                    }
                }); 
                setMoviesTopRated(dataMovies);   
            } catch (error: unknown) {
                console.log(error as Error)
            }
        }
        fetchMovies();
    },[])

    return (
        <main className={classes.main}>
            <h1>Melhores filmes:</h1>
            <ul className="movie-list">
                {moviesTopRated 
                    && moviesTopRated.map(movie => <li key={movie.id}><MovieCard {...movie}/></li>)}
            </ul>
        </main>
    );
}