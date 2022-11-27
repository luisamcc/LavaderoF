const SobreNosotros = () => {
    return(
        <>
        <img src="nosotros.jpg" className="d-block w-100 pb-5" alt="encabezado nosotros" />
        <section class="p-5 pt-0 text-sm-start" id="sobre-nosotros">
        <div class="container" className="sobre-nosotros">
            <div class="align-items-center justify-content-between">
                <h1 class="text-center tp-5" >Sobre Nosotros</h1>
                <p class="p-5 pt-0 pb-2">
                    Somos una empresa colombiana fundada en el año 2010 por 5 amantes de los autos. Nuestro objetivo
                    es llevar el servicio de limpieza al siguiente nivel y hacer que nuestros clientes sientan que
                    sus vehiculos están en las mejores manos y serán tratados con todo el cariño del mundo, como debe
                    ser. En este momento contamos con las certificaciones ISO 19651 y 205687, además del reconocimiento
                    de la asociación internacional de lavaderos de autos.
                </p>
                    
                <p class="p-5 pt-0">
                    Este negocio comenzó como una propuesta de un foro y terminó uniendo a 5 desconocidos frustrados
                    por el mal servicio y la manera en la que sus preciados carros eran tratados. Inició en un pequeño 
                    lote con una manguera de agua subterranea y productos recomendados para el cuidado del metal. Hoy en 
                    día tenemos más de 200 empleados, varias sedes en la ciudad, proyectos de expansión a lo largo del 
                    país y somos reconocidos como el mejor lavadero de Colombia por los respectivos entes calificadores.
                </p>
            </div>
        </div>

        <div class="row">
            <div class="col text-center img-center pt-3">
                <center>
                <img src="Bureau_Veritas.png" className="d-block" height="235.8" width="180.76" alt="logo bureau veritas"/>
                </center>
            </div>
            <div class="col text-center img-center pt-3">
                <center>
                <img src="ISO.png" className="d-block" height="235.8" width="235.76" alt="logo ISO"/>
                </center>
            </div>
            <div class="col text-center img-center pt-3">
                <center>
                <img src="gptw.jpg" className="d-block" height="235.8" width="320.76" alt="logo great place to work"/>
                </center>
            </div>
        </div>
        </section>
        </>
    )
}
export default SobreNosotros;