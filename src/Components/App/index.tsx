import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import classes from './App.module.css';

export function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}