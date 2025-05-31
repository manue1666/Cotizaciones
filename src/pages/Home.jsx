import { Button, Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";

//pagina de HOME para dar la bienvenida y una pequeña descripcion del servicio de la misma
//al final un carrusel porque se sentia muy vacia :)
function Home() {
    return (
        <>
            <div style={{ marginTop: "30px" }}>
                <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", textAlign: "center" }}>
                    <h1>Bienvenido al generado de cotizaciones</h1>
                    <p>¿Necesitas un servicio personalizado? Obtén una cotización rápida y sin compromiso.
                        <br /> Selecciona el tipo de servicio, la complejidad y el plazo, y recibe un estimado en segundos.
                        <br /> ¡Haz tu solicitud ahora y lleva tu proyecto al siguiente nivel!</p>

                    <div style={{ marginTop: "30px" }}>
                        <Button variant="outline-dark" size="lg" href="/form">Generar Cotizacion</Button>
                    </div>
                </Container>
            </div>
            <div style={{ marginTop: "30px" }}>
                <Carrusel></Carrusel>
            </div>
        </>
    )
}

export default Home;