import { useState } from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';
import { jsPDF } from "jspdf";
import emailjs from 'emailjs-com';

//componente de formulario para obtener la cotizacion
function Formulario() {
    //activadores de los modales
    const [modalTipoServicio, setModalTipoServicio] = useState(false);
    const [modalComplejidad, setModalComplejidad] = useState(false);
    const [modalTiempoEntrega, setModalTiempoEntrega] = useState(false);
    const [mostrarCotizacion, setMostrarCotizacion] = useState(false);

    //recolector de datos de usuario:
    const [cliente, setCliente] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipoServicio, setTipoServicio] = useState("");
    const [complejidad, setComplejidad] = useState("");
    const [tiempoEntrega, setTiempoEntrega] = useState("");
    const [costoTotal, setCostoTotal] = useState(0);

    //VALORES base para cada servicio
    const preciosBase = {
        diseño: 1000,
        analisis: 1500,
        marketing: 1200
    }

    //FACTORES de ajuste según complejidad
    const ajusteComplejidad = {
        basico: 1.0,
        intermedio: 1.5,
        avanzado: 2.0
    }

    //FACTORES de ajuste según tiempo de entrega
    const ajusteTiempo = {
        urgente: 1.5,
        normal: 1.0,
        flexible: 0.8
    }

    //calcular el costo total
    const calcularCotizacion = () => {
        if (!tipoServicio || !complejidad || !tiempoEntrega) return

        //asigno el valor seleccionado a las constantes
        const precioBase = preciosBase[tipoServicio] || 0
        const ajusteComp = ajusteComplejidad[complejidad] || 1
        const ajusteTemp = ajusteTiempo[tiempoEntrega] || 1

        //multiplica el VALOR * FACTOR * FACTOR seleccionados
        const costoFinal = precioBase * ajusteComp * ajusteTemp
        //seteo costo final
        setCostoTotal(costoFinal)

        //se muestra el modal
        setMostrarCotizacion(true)
    };

    //funcion para generar PDF
    const generarPDF = () => {
        const doc = new jsPDF()
        doc.setFont("helvetica", "bold")
        doc.text("Cotización de Servicio", 20, 20)
        doc.setFont("helvetica", "normal")
        doc.text(`Cliente: ${cliente || "No especificado"}`, 20, 40)
        doc.text(`Proveedor: Teteocan Technologies`, 20, 50)
        doc.text(`Fecha de emisión: ${new Date().toLocaleDateString()}`, 20, 60)
        doc.text(`Servicio: ${tipoServicio || "No especificado"}`, 20, 70)
        doc.text(`Complejidad del servicio: ${complejidad || "No especificado"}`, 20, 80)
        doc.text(`Tiempo de entrega: ${tiempoEntrega || "No especificado"}`, 20, 90)
        doc.text(`Costo total estimado: $${costoTotal.toFixed(2)}`, 20, 100)

        doc.save("Cotizacion.pdf"); //descarga PDF
    };

    //funcion de enviar correo con los parametros de la cotizacion
    const enviarCorreo = (e) => {
        e.preventDefault();
        const templateParams = {
            cliente: cliente || "no especificado",
            fecha: new Date().toLocaleDateString(),
            servicio: tipoServicio || "no especificado",
            complejidad: complejidad || "no especificado",
            tiempo: tiempoEntrega || "no especificado",
            costo: `$${costoTotal}`,
            email: correo
        };

        emailjs.send(
            //mis variables de entorno para el servicio de emailJS
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
            //alertas
            .then(() => {
                alert("Enviado con exito :D");
            })
            .catch(error => {
                alert("Error al enviar correo :(");
                console.error(error);
            });



    };


    //formulario y modals

    //los onChange setean los datos ingresados
    // los onClick={() => setModal... son para abrir los modals
    return (
        <>
            <div style={{ marginTop: "100px" }}>
                <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", textAlign: "center" }}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control type="text" placeholder="Nombre o Empresa" onChange={(e) => setCliente(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Correo aquí" onChange={(e) => setCorreo(e.target.value)} />
                        </Form.Group>

                        {/* tipo de servicio */}
                        <Container style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Tipo de servicio</Form.Label>
                                <div style={{ display: "flex", gap: "10px", width: "500px" }}>
                                    <Form.Select style={{ flex: 1 }} aria-label="Default select example" onChange={(e) => setTipoServicio(e.target.value)}>
                                        <option>Seleccionar</option>
                                        <option value="diseño">Diseño Web</option>
                                        <option value="analisis">Análisis de Datos</option>
                                        <option value="marketing">Marketing Digital</option>
                                    </Form.Select>
                                    <Button onClick={() => setModalTipoServicio(true)} variant="info">Info</Button>
                                </div>
                            </Form.Group>
                        </Container>
                        {/* complejidad de servicio */}
                        <Container style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Complejidad del servicio</Form.Label>
                                <div style={{ display: "flex", gap: "10px", width: "500px" }}>
                                    <Form.Select style={{ flex: 1 }} aria-label="Default select example" onChange={(e) => setComplejidad(e.target.value)}>
                                        <option>Seleccionar</option>
                                        <option value="basico">Básico</option>
                                        <option value="intermedio">Intermedio</option>
                                        <option value="avanzado">Avanzado</option>
                                    </Form.Select>
                                    <Button onClick={() => setModalComplejidad(true)} variant="info">Info</Button>
                                </div>
                            </Form.Group>
                        </Container>

                        {/* tiempo de entrega */}
                        <Container style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Form.Group className="mb-3">
                                <Form.Label >Tiempo de entrega deseado</Form.Label>
                                <div style={{ display: "flex", gap: "10px", width: "500px" }}>
                                    <Form.Select style={{ flex: 1 }} aria-label="Default select example" onChange={(e) => setTiempoEntrega(e.target.value)}>
                                        <option>Seleccionar</option>
                                        <option value="urgente">Urgente</option>
                                        <option value="normal">Normal</option>
                                        <option value="flexible">Flexible</option>
                                    </Form.Select>
                                    <Button onClick={() => setModalTiempoEntrega(true)} variant="info">Info</Button>
                                </div>
                            </Form.Group>
                        </Container>

                        <div className="d-grid gap-2 mt-5">
                            <Button variant="success" size="lg" onClick={calcularCotizacion}>
                                Cotizar
                            </Button>
                        </div>
                    </Form>
                </Container>
            </div>


            {/* modal de cotizacion */}
            <Modal show={mostrarCotizacion} onHide={() => setMostrarCotizacion(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Cotización</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Cliente:</strong> {cliente || "No especificado"}</p>
                    <p><strong>Proveedor:</strong> Teteocan Technologies</p>
                    <p><strong>Fecha de emisión:</strong> {new Date().toLocaleDateString()}</p>
                    <p><strong>Servicio:</strong> {tipoServicio || "No especificado"}</p>
                    <p><strong>Complejidad del servicio:</strong> {complejidad || "No especificado"}</p>
                    <p><strong>Tiempo de entrega:</strong> {tiempoEntrega || "No especificado"}</p>
                    <p><strong>Costo total estimado:</strong> ${costoTotal}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={generarPDF}>
                        Descargar PDF
                    </Button>
                    <Button variant="warning" onClick={enviarCorreo}>
                        Enviar a mi correo
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* modals para la descripcion de los servicios*/}
            <Modal show={modalTipoServicio} onHide={() => setModalTipoServicio(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Tipo de Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Diseño Web:</h5> Creación y desarrollo de páginas web modernas y funcionales. Incluye diseño responsivo, optimización para buscadores (SEO) y personalización según necesidades del cliente.<br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Análisis de Datos:</h5> Procesamiento y estudio de datos para obtener información clave. Se utilizan herramientas como Python, SQL y Power BI para generar reportes, visualizar tendencias y tomar decisiones estratégicas basadas en datos.<br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Marketing Digital:</h5> Estrategias para posicionar marcas y productos en línea. Incluye gestión de redes sociales, campañas publicitarias, email marketing y optimización de contenido para aumentar la visibilidad y conversiones.<br />
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={modalComplejidad} onHide={() => setModalComplejidad(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Complejidad del Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Básico:</h5> Nivel inicial con funcionalidades esenciales. Ideal para proyectos pequeños o con requerimientos mínimos, asegurando eficiencia y calidad sin elementos avanzados.<br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Intermedio:</h5> Incluye una mayor personalización y características más robustas. Adecuado para proyectos con necesidades específicas que requieren integración de varias funciones y optimización.<br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Avanzado:</h5> Solución completa con funciones especializadas y alto nivel de detalle. Perfecto para proyectos exigentes que requieren automatización, escalabilidad y personalización avanzada.<br />
                    </div>

                </Modal.Body>
            </Modal>

            <Modal show={modalTiempoEntrega} onHide={() => setModalTiempoEntrega(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Tiempo de Entrega</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Urgente:</h5> Priorización máxima del proyecto con entrega rápida. Ideal para quienes necesitan resultados inmediatos sin comprometer la calidad del software. <strong>Tiempo estimado: 1 a 3 semanas.</strong><br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Normal:</h5> Tiempo de entrega estándar con un balance entre rapidez y dedicación al detalle. Perfecto para proyectos que requieren planificación y desarrollo estructurado. <strong>Tiempo estimado: 4 a 8 semanas.</strong><br />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <h5>Flexible:</h5> Adaptación al ritmo del cliente, permitiendo ajustes en tiempos según la evolución del proyecto. Recomendado para desarrollos con requisitos dinámicos o iteraciones constantes. <strong>Tiempo estimado: 2 meses o más.</strong><br />
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Formulario;
