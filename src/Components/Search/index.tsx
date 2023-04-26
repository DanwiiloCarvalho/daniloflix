import { BiSearchAlt2 } from 'react-icons/bi';

export function Search() {
    return (
        <div>
            <input type="text" placeholder="Busque um filme" />
            <button><BiSearchAlt2/></button>
        </div>
    );
}