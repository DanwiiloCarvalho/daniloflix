import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './Search.module.css';
import { useRef } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

export function Search() {
    const refWordKey = useRef<HTMLInputElement | null>(null);
    //const [searchParams, setSearchParams] = useSearchParams();

    /* function search() {
        if (refWordKey.current) {
            const params = {
                q: refWordKey.current.value
            }
            setSearchParams(q);
        } 
    }*/
    const navigate = useNavigate();

    function search() {  
        //navigate('/search?q=' + refWordKey.current?.value);
        if (refWordKey.current?.value) {
            const searchParams = createSearchParams({
                q: refWordKey.current.value
            });

            navigate({
                pathname: '/search',
                search: `?${searchParams}`
            });
            refWordKey.current.value = "";
        }
    }

    return (
        <div className={classes.search}>
            <input ref={refWordKey} type="text" placeholder="Busque um filme" onKeyDown={e => e.key === 'Enter' ? search() : null}/>
            <button onClick={search}><BiSearchAlt2/></button>
        </div>
    );
}