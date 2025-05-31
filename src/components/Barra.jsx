import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//un componente de barra de navegacion
function Barra() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Cotizaciones</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/manue1666/Cotizaciones">Sobre el proyecto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Barra