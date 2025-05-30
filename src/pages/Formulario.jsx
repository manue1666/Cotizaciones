import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Datos mínimos esenciales:
// Cliente (Nombre, empresa si aplica).

// Proveedor (Teteocan Technologies en este caso).

// Fecha de emisión (Automáticamente se puede establecer con new Date().toLocaleDateString() en JavaScript).

// Tipo de servicio (Diseño Web, Análisis de Datos, Marketing Digital).

// Complejidad del servicio (Básico, Intermedio, Avanzado).

// Tiempo de entrega deseado (Urgente, Normal, Flexible).

// Costo total estimado (Puede calcularse según tipo y complejidad).

// 🛠 Extras que pueden mejorar la cotización:
// Descripción del servicio: Un pequeño resumen del alcance del proyecto.

// Condiciones: Términos de pago, plazos, garantías.

// Número de cotización: Para identificación y seguimiento.

// Firma o aprobación: Para hacerlo más formal.

// Generación de PDF: Usar jspdf o react-pdf para exportar.

function Formulario() {
    return (
        <>
            <div style={{ marginTop: "30px" }}>
                <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", textAlign: "center" }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control type="text" placeholder="tu nombre aqui" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo elctronico</Form.Label>
                            <Form.Control type="email" placeholder="tu correo aqui" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tipo de servicio</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Diseño Web</option>
                                <option value="2">Análisis de Datos</option>
                                <option value="3">Marketing Digital</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Complejidad del servicio</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Básico</option>
                                <option value="2">Intermedio</option>
                                <option value="3">Avanzado</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tiempo de entrega requerido</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">Urgente</option>
                                <option value="2">Normal</option>
                                <option value="3">Flexible</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Formulario