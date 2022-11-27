const Servicios = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="fondo1.1.jpg" alt="" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {" "}
                <b> BOXES DE LAVADO </b>
              </h5>
              <p>
                Centros de lavado autoservicio 24 H sin personal. Mas de 8
                modelos distintos entre 3 gamas disponibles
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="fondo2.1.jpg" alt="" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {" "}
                <b> LAVADO SIN CONTACTO </b>
              </h5>
              <p>
                Descubre el unico sistema de lavado sin contacto automatico
                capaz de lavar bien sin tocar los vehiculos
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="fondo3.1.png" alt="" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>
                {" "}
                <b> LAVADO INDUSTRIAL </b>
              </h5>
              <p>
                Maquinaria especifica para camiones y autobuses. Lavado manual,
                al paso o automatico con o sin cepillos
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <br />
      <div className="container">
        <h4>
          Con la experiencia de casi 40 años en el sector del lavado de
          vehículos pero siempre adaptándonos a las nuevas tendencias del
          mercado y aportando soluciones a medida para cada situación y cliente
          en EDGA podemos ofrecerte:
        </h4>
        <br />
      </div>
      <br />

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img1.1.jpg" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                <b>Lavado de Motos y Bicis</b>
              </h5>
              <p class="card-text">
                Cabina de 6m que lava de forma automatica motos y bicis...
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img2.jpg" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                <b>Lavado sin contacto para camiones</b>
              </h5>
              <p class="card-text">
                Novedoso sistema de lavado automatico sin contacto para
                vehiculos industriales
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img3.png" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                <b>Complementos</b>
              </h5>
              <p class="card-text">
                Los complementos autoservicio de EGDA estan disponbiles en
                diferentes formatos y diseños
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img4.png" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <b> Recuperador de Agua </b>
              </h5>
              <p class="card-text">
                {" "}
                Permite reutilizar el agua utilizada en el lavado consiguiendo
                bajar drasticamente los...
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img5.jpg" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <b> Desinfeccion para Vehiculos </b>
              </h5>
              <p class="card-text">
                {" "}
                Maquinaria especifica para desinfectar toda clase de vehiculos
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card text-white bg-dark mb-3">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <img src="img6.jpg" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <b> Lavado sin Contacto </b>
              </h5>
              <p class="card-text">
                {" "}
                Descubre la maquina automatica que lava como una de cepillos
                pero sin...
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="card" id="tarjeta">
              <div class="card-body">
                <b>
                  <h1 class="card-title">
                    <b>Nuestro compromiso con tu seguridad</b>
                  </h1>
                </b>
                <p class="card-text">
                  Con cada función de seguridad que incorporamos y con cada
                  norma que defendemos en nuestras Guías comunitarias, nos
                  comprometemos a trabajar para crear un ambiente seguro para
                  nuestros usuarios.
                </p>
                <br />
                <u>
                  <a href=" #">
                    <b>Conoce mas sobre nuestras Guias comunitarias</b>
                  </a>
                </u>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" id="tarjeta">
              <div class="card-body">
                <br />
                <img src="icono4 .1.png" alt="" class="card-img-top" />
                {/* <img src="" class="card-img-top" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h1>
        {" "}
        <b>TRABAJAMOS PARA GENERAR ÉXITO </b>{" "}
      </h1>
      <br />
      <br />

      <div class="container">
        <div class="card-group">
          <div class="card" id="tarjeta">
            <div class="card-body">
              <img src="icono5.png" alt="" />
              <br />
              <br />
              <h5 class="card-title">
                <b>Quienes Somos</b>
              </h5>
              <p class="card-text">
                Descubre cómo comenzamos, qué nos motiva y cómo fomentamos las
                oportunidades.
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>

          <div class="card" id="tarjeta">
            <div class="card-body">
              <img src="icono6.png" alt="" />
              <br />
              <br />
              <h5 class="card-title">
                <b>Sala de prensa</b>
              </h5>
              <p class="card-text">
                Accede a los anuncios sobre nuestros últimos lanzamientos,
                iniciativas y asociaciones.
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>

          <div class="card" id="tarjeta">
            <div class="card-body">
              <img src="icono7.svg" alt="" />
              <br />
              <br />
              <h5 class="card-title">
                <b>Ciudadania global</b>
              </h5>
              <p class="card-text">
                Lee sobre nuestro compromiso para tener un impacto positivo en
                las ciudades donde operamos.
              </p>
              <button type="button" class="btn btn-warning">
                <b>Conoce mas...</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default Servicios;
