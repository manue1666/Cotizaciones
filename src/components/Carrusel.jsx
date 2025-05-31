import Carousel from 'react-bootstrap/Carousel';


//componente de carrusel para acompañar el HOME
function Carrusel() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bing.com/th/id/BCO.f0eaff9e-91e2-4599-b441-e6f4ff775375.png"
                        alt="primera imagen"
                    />
                    <Carousel.Caption>
                        <h3>Diseño Web</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bing.com/th/id/BCO.1ef04c42-a18d-4fae-9881-ec2e956375fd.png"
                        alt="segunda imagen"
                    />
                    <Carousel.Caption>
                        <h3>Análisis de Datos</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://bing.com/th/id/BCO.ddbd8852-bb3a-4d2e-9644-fc09b8ac5019.png"
                        alt="tercera imagen"
                    />
                    <Carousel.Caption>
                        <h3>Marketing Digital</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carrusel