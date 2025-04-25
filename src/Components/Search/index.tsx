import { useRef, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { createSearchParams, NavigateFunction } from 'react-router-dom';
import classes from './Search.module.css';

interface SearchProps {
    navigate: NavigateFunction
}

export function Search({ navigate }: SearchProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const refWordKey = useRef<HTMLInputElement | null>(null);

    function search() {  
        if (refWordKey.current?.value) {
            const searchParams = createSearchParams({
                q: refWordKey.current.value
            });

            navigate({
                pathname: '/daniloflix/search',
                search: `?${searchParams}`
            });
            refWordKey.current.value = "";
        }
    }

    return (
        <div className={classes.search}>
            <input
                ref={refWordKey} 
                type="text"
                placeholder="Busque um filme"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={e => e.key === 'Enter' ? search() : null}
            />
            <button aria-label={`Buscar pelo filme${inputValue && ` ${inputValue}`}`} onClick={search}><BiSearchAlt2/></button>
        </div>
    );
}