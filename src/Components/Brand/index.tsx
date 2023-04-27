import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import classes from './Brand.module.css';

type Brand = {
    brandName: string
}

export function Brand({brandName}:Brand) {
    return (
        <Link to={'/'} className={classes.brand}><BiCameraMovie/><span>{brandName}</span></Link>
    );
}