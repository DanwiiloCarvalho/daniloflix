import { useEffect, useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import classes from './Homepage.module.css';

type Movie = {
    poster_path: string,
    title: string,
    vote_average: number
}

export function Homepage() {

    const [moviesTopRated, setmoviesTopRated] = useState<Movie[] | null>(null);

    useEffect(() => {
        
    },[])

    return (
        <main className={classes.main}>
            <h1>Melhores filmes:</h1>
            <ul className="movie-list">
                {/* <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li> */}

            </ul>
        </main>
    );
}