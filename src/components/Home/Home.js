import React, { useEffect, useState } from 'react';
import './Home.css';
import coverphoto from '../../images/cover.jpg';
import coverphoto2 from '../../images/cover2.jpg';
import coverphoto3 from '../../images/cover3.jpg';

import { Carousel, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = './DanceData.JSON';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 4)))
    }, []);


    return (
        <div>
            {/* header section  */}
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block img-fluid w-100"
                            src={coverphoto}
                            alt="First slide"
                        />
                        <Carousel.Caption className="hero-text">
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
                        <Carousel.Caption className="hero-text">
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
                        <Carousel.Caption className="hero-text">
                            <h3>Practice<br /> Improve Yourself </h3>
                            <h2>Become A<br /> Professiona Dancer</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* some service  */}

            <div className="my-5">
                <Row xs={1} md={4} className="service-container g-4 img-fluid">
                    {

                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>

            </div>
            <div>
                <div className="service-last-section">
                    <div class="my-5 mb-3 p-5">
                        <div class="row g-0">

                            <div class="col">
                                <div class="card-body text-center ps-5 ">
                                    <h2 class="card-title fw-bold ">Ballet Classes
                                        That will Make You Advance</h2>
                                    <p class="card-text text-white m-5 service-text">You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business you deal with, are extremely limited.

                                        It’s not critical for the employees to like the boss, but they have to trust him or her. If not, he won’t be able to lead them and the workers will have little motivation at work. Truth and trust are connected together. You could be honest for years but one lie can destroy the trust you have built all this time and there is no doubt that regaining that trust is very difficult.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default Home;