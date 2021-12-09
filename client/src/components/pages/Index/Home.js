import { Carousel } from "react-bootstrap";
import Carousel1 from '../../../assets/burguer1.jpg'
import Carousel2 from '../../../assets/burrito1.jpg'
import Carousel3 from '../../../assets/pizza1.jpg'

function Home() {
    return (
        <div className="Home">
            {/* <h1>Página principal</h1> */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carousel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;