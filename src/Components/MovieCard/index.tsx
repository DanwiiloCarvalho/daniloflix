import classes from './MovieCard.module.css';
import { AiFillStar } from 'react-icons/ai';

export function MovieCard() {
    return (
        <article className={classes.moviecard}>
            <img className={classes.poster} src="https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" alt="" />
            <h1 className={classes.title}>The Godfather</h1>
            <div className={classes.score}>
                <span className={classes.star}><AiFillStar/></span>
                <span className={classes.grade}>8.7</span>
            </div>
            <button className={classes.details_button}>Detalhes</button>
        </article>
    );
}