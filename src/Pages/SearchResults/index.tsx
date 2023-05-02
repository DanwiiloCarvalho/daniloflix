import { useSearchParams } from 'react-router-dom';
import classes from './SearchResults.module.css';

export function SearchResults() {
    const [searchParams] = useSearchParams();

    return (
        <main className={classes.main_container}>
            <h1>Resultados para: {searchParams.get('q')}</h1>
            <ul className={classes.results_search}>
                {<li></li>}
            </ul>
        </main>
    );
}