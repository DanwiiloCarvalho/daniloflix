import { Movie } from '../../Pages/Homepage';
import classes from './MovieCard.module.css';
import { AiFillStar } from 'react-icons/ai';

export function MovieCard(props: Movie) {
    const poster_path = import.meta.env.VITE_IMAGE + props.poster_path;
    return (
        <article className={classes.moviecard}>
            <img className={classes.poster} src={poster_path} alt="" />
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.score}>
                <span className={classes.star}><AiFillStar/></span>
                <span className={classes.grade}>{props.vote_average}</span>
            </div>
            <button className={classes.details_button}>Detalhes</button>
        </article>
    );
}