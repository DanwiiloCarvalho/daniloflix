import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export function Brand() {
    return (
        <Link to={'/'}><BiCameraMovie/><span>Daniloflix</span></Link>
    );
}