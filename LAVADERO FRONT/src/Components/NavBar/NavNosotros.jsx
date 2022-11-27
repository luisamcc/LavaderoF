import {Link} from 'react-scroll'

const NavNosotros = () => {
    return(
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={ '/nosotros' } id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nosotros
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link className="dropdown-item" to="mision">Misión</Link></li>
            <li><Link className="dropdown-item" to="vision">Visión</Link></li>
            <li><Link className="dropdown-item" to="lideres">Nuestros Lideres</Link></li>
          </ul>
        </li>
    )
}

export default NavNosotros;