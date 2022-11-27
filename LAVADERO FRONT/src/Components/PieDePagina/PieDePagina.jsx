import React from 'react'
import { Link } from 'react-router-dom'

const PieDePagina = () => {
  return (
    <>
  {/* <!-- Footer --> */}
  <footer className="text-center text-lg-start text-white bg-primary">
    {/* <!-- Grid container --> */}
    <div className="container p-5 pb-0">
      {/* <!-- Section: Links --> */}
      <section className="">
        {/* <!--Grid row--> */}
        <div className="row">
          {/* <!--Grid column--> */}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">EGDA Solutions</h5>

            <p>
              Creados para cuidar de su auto. Somos cars 
              loverls con más de 10 años de experiencia. 
              Contamos con los más altos estandares en 
              limpieza, conservación y atención a su 
              vehículo del mercado. Nos orgullesemos
              de nuestro trabajo.
            </p>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase"> </h5>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase pb-2">contenido</h5>

            <ul className="list-unstyled mb-0">
              <li className='pb-3'>
                <Link to={'/nosotros'} className="text-white bi bi-house"> Nosotros</Link>
              </li>
              <li className='pb-3'>
                <Link to={'/servicios'} className="text-white bi bi-car-front-fill"> Servicios</Link>
              </li>
              <li className='pb-3'>
                <Link to={'/agendar-cita'} className="text-white bi bi-calendar4-week"> Agendar cita</Link>
              </li>
              <li className='pb-3'>
                <Link to={'/login'} className="text-white bi bi-people-fill"> Login</Link>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase pb-2">Contactanos</h5>

            <ul className="list-unstyled mb-0">
            <p><i className="bi bi-geo-alt"></i> Colombia</p>
            <p><i className="bi bi-envelope"></i> info@egda.com</p>
            <p><i className="bi bi-whatsapp"></i> + 57 234 567 89</p>
            <p><i className="bi bi-instagram"></i> @EGDA_Solutions</p>
            </ul>
          </div>
          {/* <!--Grid column--> */}

        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}

      <hr className="mb-4" />


      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Ingresa gratis: </span>
          <Link className="button" to={ '/registrarse' }>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Registrate!
          </button>
          </Link>
        </p>
      </section>


      <hr className="mb-4" />
    </div>
    <div className="text-center p-3">
      © Mision TIC 2022:
      <p className="text-white">
          U.Caldas - G32 - E2
      </p>
    </div>
  </footer>
    </>
  )
}

export default PieDePagina
