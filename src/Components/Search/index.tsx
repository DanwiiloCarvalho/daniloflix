import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './Search.module.css';

export function Search() {
    return (
        <div className={classes.search}>
            <input type="text" placeholder="Busque um filme" />
            <button><BiSearchAlt2/></button>
        </div>
    );
}