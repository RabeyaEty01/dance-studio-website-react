import React from 'react';
import './Home.css';
import coverphoto from '../../images/cover.jpg';
import coverphoto2 from '../../images/cover2.jpg';
import coverphoto3 from '../../images/cover3.jpg';

import { Carousel } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img-fluid w-100"
                        src={coverphoto}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Let It Out <br /> Dance It Off</h3>
                        <h2>Groove. Feel. <br /> Dance...</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block img-fluid w-100"
                        src={coverphoto2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>The Pathway <br /> For Dance</h3>
                        <h2>New Dancing <br /> Happiness</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid w-100"
                        src={coverphoto3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Practice<br /> Improve Yourself </h3>
                        <h2>Become A<br /> Professiona Dancer</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Home;