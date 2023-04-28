import { AiFillStar } from 'react-icons/ai';
import { BsFileEarmarkTextFill, BsWallet2 } from 'react-icons/bs';
import { GiChart } from 'react-icons/gi';
import { BsHourglassSplit } from 'react-icons/bs';
import classes from './MovieDetails.module.css';

export function MovieDetails() {
    return (
        <main className={classes.movie_info}>
            <article className={classes.container}>
                <img className={classes.poster} src="https://image.tmdb.org/t/p/original/9Baumh5J9N1nJUYzNkm0xsgjpwY.jpg" alt="" />
                <h1>The Godfather</h1>
                <div className={classes.score}>
                    <span className={classes.star}><AiFillStar/></span>
                    <span className={classes.grade}>8.7</span>
                </div>
                <p className={classes.tagline}>An offer you can't refuse</p>
                <section className={classes.movie_attributes}>
                    <div>
                        <div className={classes.info}>
                            <BsWallet2/>
                            <span>Orçamento:</span>
                        </div>
                        <p>$6,000,000.00</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <GiChart className={classes.chart}/>
                            <span>Receita:</span>
                        </div>
                        <p>$245,066,411.00</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <BsHourglassSplit/>
                            <span>Duração:</span>
                        </div>
                        <p>175 minutos</p>
                    </div>
                    <div>
                        <div className={classes.info}>
                            <BsFileEarmarkTextFill/>
                            <span>Descrição:</span>
                        </div>
                        <p>Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.</p>
                    </div>
                </section>
            </article>
        </main>
    );
}