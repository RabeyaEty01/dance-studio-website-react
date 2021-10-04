import React, { useEffect, useState } from 'react';
import './Home.css';
import coverphoto from '../../images/cover.jpg';
import coverphoto2 from '../../images/cover2.jpg';
import coverphoto3 from '../../images/cover3.jpg';
import logo1 from '../../images/investors logo/alibaba.png';
import logo2 from '../../images/investors logo/ajkerdeal.png';
import logo3 from '../../images/investors logo/amazon.png';
import logo4 from '../../images/investors logo/bdshop.png';
import logo5 from '../../images/investors logo/daraz.png';
import logo6 from '../../images/investors logo/othoba.png';
import back1 from '../../images/back1.jpg';
import back2 from '../../images/back2.jpg';
import back3 from '../../images/back3.jpg';
import back4 from '../../images/back4.jpg';

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

            <div className="my-5">
                <div>
                    <h2 className="my-5">Learn Dance With Us</h2>
                    <h4 className="text-center text-secondary">You may be a skillful, <br />
                        effective employer but  if you don’t <br /> trust your  personnel and the  opposite.</h4>
                </div>

                <div className="d-flex my-5">
                    <img className="img-card w-25" src={back1} alt="" />
                    <img className="img-card w-25 my-5" src={back2} alt="" />
                    <img className="img-card w-25" src={back3} alt="" />
                    <img className="img-card w-25 my-5" src={back4} alt="" />
                </div>
            </div>

            {/* some service  */}

            <div className="my-5">
                <h2 className="my-5">Our Services</h2>
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

            {/* invastors section  */}
            <section class="bg-light bg-gradient">
                <div class="container">
                    <h2 class="section-title text-center my-5">OUR PARTNERS</h2>
                    <div class="row row-cols-1 row-cols-md-6 g-4">
                        <div class="col">
                            <img src={logo1} class="card-img-top" alt="..." />
                        </div>
                        <div class="col">
                            <img src={logo2} class="card-img-top" alt="..." />
                        </div>
                        <div class="col">
                            <div>
                                <img src={logo3} class="card-img-top" alt="..." />
                            </div>
                        </div>
                        <div class="col">
                            <img src={logo4} class="card-img-top img-fluid" alt="..." />
                        </div>
                        <div class="col">
                            <img src={logo5} class="card-img-top img-fluid" alt="..." />
                        </div>
                        <div class="col">
                            <img src={logo6} class="card-img-top img-fluid" alt="..." />
                        </div>


                    </div>

                </div>
            </section>




        </div>
    );
};



export default Home;