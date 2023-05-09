import classes from './ErrorPage.module.css';
import { TbError404 } from 'react-icons/tb';

export function ErrorPage() {
    return (
        <main className={classes.main_error}>
            <TbError404/>
            <p>Página não encontrada!</p>
        </main>
    );
}