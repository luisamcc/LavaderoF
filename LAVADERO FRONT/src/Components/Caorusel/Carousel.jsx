import { Link } from "react-router-dom";

const Carousel = () => {
    return(
        <>
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="carrusel4.jpg" className="d-block w-100" alt="Cars lovers" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Lo ciudamos como si fuera nuestro</h5>
                <p>
                    EGDA somos cars lovers
                </p>
                    <div className="slider-btn">
                        <Link className="slider-btn" to={'/Nosotros'}>
                            <button className="btn btn-1">Conoce más sobre nosotros</button>
                        </Link>
                        <Link className="slider-btn" to={'/agendar-cita'}>
                            <button className="btn btn-2" to={'/agendar-cita'}>Agenda tu cita</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="carrusel3.jpg" className="d-block w-100" alt="vanguardia en limpieza" />
                <div className="carousel-caption d-none d-md-block">
                <h5>A la vanguardia en cuidados</h5>
                <p>
                    Cariño + Tecnología
                </p>
                    <div className="slider-btn">
                        <Link className="slider-btn" to={'/servicios'}>
                            <button className="btn btn-1">Conoce nuestros servicios</button>
                        </Link>
                        <Link className="slider-btn" to={'/agendar-cita'}>
                            <button className="btn btn-2">Agenda tu cita</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="carrusel2.jpg" className="d-block w-100" alt="limpieza personalizada" />
                <div className="carousel-caption d-none d-md-block">
                <h5>Elige el horario que desées</h5>
                <p>
                    Recibe notificaciones
                </p>
                    <div className="slider-btn">
                        <Link className="slider-btn" to={'/registrarse'}>
                            <button className="btn btn-1">Registrate</button>
                        </Link>
                        <Link className="slider-btn" to={'/agendar-cita'}>
                            <button className="btn btn-2">Agenda tu cita</button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
            >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
    )
}

export default Carousel;