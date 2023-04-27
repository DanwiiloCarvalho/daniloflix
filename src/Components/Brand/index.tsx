import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import classes from './Brand.module.css';

export function Brand() {
    return (
        <Link to={'/'} className={classes.brand}><BiCameraMovie/><span>DaniloFlix</span></Link>
    );
}