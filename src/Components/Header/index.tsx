import { Brand } from "../Brand";
import { Search } from "../Search";
import classes from './Header.module.css';

export function Header() {
    return (
        <header className={classes.header}>
            <Brand brandName={'DaniloFlix'}/>
            <Search/>
        </header>
    );
}