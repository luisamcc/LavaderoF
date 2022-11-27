import { 
    createBrowserRouter,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import Servicios from "../Components/Servicios/Servicios"
import Nosotros from "../Components/Nosotros/Nosotros";
import Login from "../Components/Login/Login";
import IndexApp from "../IndexApp";
import AgendarCita from "../Components/AgendarCita/AgendarCita";
import Registrarse from "../Components/Registrarse/Registrarse";
import Carousel from "../Components/Caorusel/Carousel"

export const router = createBrowserRouter(
    createRoutesFromElements( [
        <Route path="/" element={<IndexApp />}>
            <Route index element={<Carousel />} />,
            <Route path="/" element={<Carousel />} />,
            <Route path="/nosotros" element={<Nosotros />} />,
            <Route path="/servicios" element={<Servicios />} />,
            <Route path="/agendar-cita" element={<AgendarCita />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/login" element={<Login />} />
        </Route>]
    )
)