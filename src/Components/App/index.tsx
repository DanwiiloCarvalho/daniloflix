import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function App() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}