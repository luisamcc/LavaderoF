import { Link } from "react-router-dom";
// import NavNosotros from "./NavNosotros";

const NavBar = () =>{
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-primary">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="navbar-brand" to="/" >
                    EGDA
                </Link>
              </li>  
              <li className="nav-item">  
                <Link className="nav-link active" to={ '/nosotros' }>
                    <i className="bi bi-house"></i>
                  Nosotros
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to={ '/servicios' }>
                    <i className="bi bi-car-front-fill"></i>
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={ '/agendar-cita' }>
                    <i className="bi bi-calendar4-week"></i>
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>
          <div className="container-fluid" style={{ justifyContent: 'end'}}>
            <ul className="navbar-nav">
            <li className="nav-item">  
                <Link className="nav-link active" to={ '/registrarse' }>
                    <i className="bi bi-box-arrow-in-right"></i>
                  Registrarse
                </Link>
              </li>
              <li className="nav-item">  
                <Link className="nav-link active" to={ '/login' }>
                    <i className="bi bi-people-fill"></i>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}


export default NavBar;