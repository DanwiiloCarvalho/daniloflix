import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../../Components/MovieCard';
import { Movie } from '../Homepage';
import { NoResults } from '../NoResults';
import classes from './SearchResults.module.css';

type infoResults = {
    page: number,
    total_pages: number,
    total_results: number
}

export function SearchResults() {
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [infoResults, setInfoResults] = useState<infoResults>({} as infoResults);

    const [notFound, setNotFound] = useState<boolean>(false);

    //const mainElement = useRef<HTMLElement | null>(null);

    const api_key:string = import.meta.env.VITE_API_KEY;
    const language:string = import.meta.env.VITE_API_LANGUAGE;
    const urlResults = import.meta.env.VITE_API_SEARCH + '?query=' + searchParams.get('q') + '&' + api_key + '&' + language;

    useEffect(() => {
        setNotFound(false);
        async function fetchSearchResults() {
            try {
                const response = await fetch(urlResults);
                const data = await response.json();

                if (data.total_results === 0) {
                    setNotFound(true);
                }

                setSearchResults(data.results);

                const info: infoResults = {
                    page: data.page,
                    total_pages: data.total_pages,
                    total_results: data.total_results
                }

                setInfoResults(info);
            } catch (error: unknown) {
                console.log(error as Error);
            }     
        }
        
        fetchSearchResults();
    }, [searchParams]);

    function showMore() {
        async function fetchNextPage() {
            try {
                const urlNextPage:string = urlResults + '&page=' + ++infoResults.page;
                const response = await fetch(urlNextPage);
                const data = await response.json();
                setSearchResults(prev => [...prev, ...data.results]);
            } catch (error: unknown) {
                console.log(error as Error);
            }
            
        }
        fetchNextPage();
    }

    return (
        <main className={classes.main_container}>
            <h1>Resultados para: <span className={classes.search_term}>{searchParams.get('q')}</span></h1>
            <ul className={classes.results_search}>
                {searchResults && 
                    searchResults.map(movie => <li key={movie.id}><MovieCard {...movie}/></li>)}
            </ul>
            {(infoResults.page < infoResults.total_pages) && <button className={classes.show_more} onClick={showMore}>Ver mais</button>}
            {notFound && <div className={classes.no_results}><NoResults /></div>}
            {searchResults.length > 0 && <p className={classes.total_size}>{searchResults.length} de {infoResults.total_results}</p>}
        </main>
    );
}