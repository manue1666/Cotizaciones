import { Button, Container } from "react-bootstrap";
import Carrusel from "../components/Carrusel";





function Home() {
    return (
        <>
            <div style={{ marginTop: "30px" }}>
                <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", textAlign: "center" }}>
                    <h1>Bienvenido a teteocan tecnologies</h1>
                    <h3>¿Necesitas un servicio personalizado? Obtén una cotización rápida y sin compromiso.
                        <br /> Selecciona el tipo de servicio, la complejidad y el plazo, y recibe un estimado en segundos.
                        <br /> ¡Haz tu solicitud ahora y lleva tu proyecto al siguiente nivel!</h3>

                    <div style={{ marginTop: "30px" }}>
                        <Button variant="info" size="lg">Generar Cotizacion</Button>
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