import { MovieCard } from '../../Components/MovieCard';
import classes from './Homepage.module.css';

export function Homepage() {
    return (
        <main className={classes.main}>
            <h1>Melhores filmes:</h1>
            <ul className="movie-list">
                <li><MovieCard/></li>
                <li><MovieCard/></li>
                <li><MovieCard/></li>
            </ul>
        </main>
    );
}