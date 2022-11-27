import { Link } from 'react-scroll'

const BotonNosotros = () => {
    return(
        <>
        <Link to="sobre-nosotros" spy={true} smooth={true} offset={50} duration={500}>
        <button className="btn btn-1">Conoce más sobre nosotros</button>
        </Link>
        </>
    )
}

export default BotonNosotros;