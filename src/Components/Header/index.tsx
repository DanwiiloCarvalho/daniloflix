import { useNavigate } from "react-router-dom";
import { Brand } from "../Brand";
import { Search } from "../Search";
import { ThemeToggle } from "../ThemeToggle";
import classes from './Header.module.css';

export function Header() {
    const navigate = useNavigate();

    return (
        <header className={classes.header}>
            <Brand brandName={'DaniloFlix'}/>
            <div className={classes.controls}>
                <Search navigate={navigate} />
                <ThemeToggle />
            </div>
        </header>
    );
}
