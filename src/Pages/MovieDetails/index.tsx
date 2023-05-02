import { AiFillStar } from 'react-icons/ai';
import { BsFileEarmarkTextFill, BsWallet2 } from 'react-icons/bs';
import { GiChart } from 'react-icons/gi';
import { BsHourglassSplit } from 'react-icons/bs';
import classes from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Details = {
    poster_path: string,
    title: string,
    vote_average: number,
    tagline: string,
    budget: number,
    revenue: number,
    runtime: number,
    overview: string
}

export function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState<Details | null>(null);
    const {id} = useParams();

    const api_key:string = import.meta.env.VITE_API_KEY;
    const language:string = import.meta.env.VITE_API_LANGUAGE;
    const urlDetails = import.meta.env.VITE_API_DETAILS + id + '?' + api_key + '&' + language;
    
    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                const response = await fetch(urlDetails);
                const data = await response.json();
                const details: Details = {
                    poster_path: data.poster_path,
                    title: data.title,
                    vote_average: data.vote_average,
                    tagline: data.tagline,
                    budget: data.budget,
                    revenue: data.revenue,
                    runtime: data.runtime,
                    overview: data.overview         
                }  
                setMovieDetails(details);
            } catch (error: unknown) {
                console.log(error);
            }
        }
        fetchMovieDetails();
    },[]);

    //console.log(id)

    return (
        <>
        {movieDetails && <main className={classes.movie_info}>
            <article className={classes.container}>
                <img className={classes.poster} src={import.meta.env.VITE_IMAGE + '/' + movieDetails?.poster_path} alt="" />
                <h1>{movieDetails?.title}</h1>
                <div className={classes.score}>
                    <span className={classes.star}><AiFillStar/></span>
                    <span className={classes.grade}>{movieDetails?.vote_average}</span>
                </div>
                <p className={classes.tagline}>{movieDetails?.tagline}</p>
                <section className={classes.movie_attributes}>
                    <div>
                        <div className={classes.info}>
                            <BsWallet2/>
                            <span>Orçamento:</span>
                        </div>
                        <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movieDetails?.budget)}</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <GiChart className={classes.chart}/>
                            <span>Receita:</span>
                        </div>
                        <p>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movieDetails?.revenue)
                        }</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <BsHourglassSplit/>
                            <span>Duração:</span>
                        </div>
                        <p>{movieDetails?.runtime} minutos</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <BsFileEarmarkTextFill/>
                            <span>Descrição:</span>
                        </div>
                        <p>{movieDetails?.overview}</p>
                    </div>
                </section>
            </article>
        </main>}
        </>
    );
}