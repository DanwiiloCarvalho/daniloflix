import { Link } from 'react-router-dom';
import { Movie } from '../../Pages/Homepage';
import classes from './MovieCard.module.css';
import { AiFillStar } from 'react-icons/ai';

export function MovieCard(props: Movie) {
    const poster_path = import.meta.env.VITE_IMAGE + props.poster_path;
    /* const api_key:string = import.meta.env.VITE_API_KEY;
    const language:string = import.meta.env.VITE_API_LANGUAGE;
    const details = import.meta.env.VITE_API_DETAILS + props.id + '?' + api_key + '&' + language; */

    return (
        <article className={classes.moviecard}>
            <img className={classes.poster} src={poster_path} alt="" />
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.score}>
                <span className={classes.star}><AiFillStar/></span>
                <span className={classes.grade}>{props.vote_average}</span>
            </div>
            <Link to={'/movie/' + props.id} className={classes.details_button}>Detalhes</Link>
        </article>
    );
}