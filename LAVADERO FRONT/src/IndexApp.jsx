import "./IndexApp.css"
import NavBar from "./Components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import PieDePagina from "./Components/PieDePagina/PieDePagina"

function IndexApp () {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>
                <PieDePagina />
            </footer>
        </>
    );
}

export default IndexApp;