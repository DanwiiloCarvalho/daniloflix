import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import classes from './NoResults.module.css';

export function NoResults() {
    return (
        <div className={classes.no_results}>
            <BsFillExclamationTriangleFill/>
            <p>Nenhum resultado encontrado</p>
        </div>
    );
}