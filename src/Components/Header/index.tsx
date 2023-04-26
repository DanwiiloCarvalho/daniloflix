import { Brand } from "../Brand";
import { Search } from "../Search";

export function Header() {
    return (
        <header>
            <Brand/>
            <Search/>
        </header>
    );
}