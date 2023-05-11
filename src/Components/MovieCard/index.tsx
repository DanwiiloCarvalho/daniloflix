import { Link } from 'react-router-dom';
import { Movie } from '../../Pages/Homepage';
import classes from './MovieCard.module.css';
import { AiFillStar } from 'react-icons/ai';

export function MovieCard(props: Movie) {
    const poster_path = import.meta.env.VITE_IMAGE + props.poster_path;
    
    return (
        <article className={classes.moviecard}>
            {/* {props.poster_path && <img className={classes.poster} src={poster_path} alt="" />} */}
            {props.poster_path && <div style={{background: `url(${poster_path})`, width: '100%', height: '350px', backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}} className={classes.capa}></div>}
            {!props.poster_path && <div className={classes.placeholder}></div>}
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.score}>
                <span className={classes.star}><AiFillStar/></span>
                <span className={classes.grade}>{props.vote_average.toFixed(1)}</span>
            </div>
            <Link to={'/movie/' + props.id} className={classes.details_button}>Detalhes</Link>
        </article>
    );
}