import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import serviceimg from '../../images/Service-1.png';
import './Services.css';

const Services = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        const url = './DanceData.JSON';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);
    return (
        <div className="my-5">
            <div>
                <div class="card border-0 mb-3 p-5">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={serviceimg} class="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div class="col-md-5">
                            <div class="card-body text-start ps-5 ">
                                <h1 class="card-title text-secondary">Ballet Dance Is Our Passion</h1>
                                <p class="card-text text-secondary mt-5 service-text">You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business you deal with, are extremely limited.

                                    It’s not critical for the employees to like the boss, but they have to trust him or her. If not, he won’t be able to lead them and the workers will have little motivation at work. Truth and trust are connected together. You could be honest for years but one lie can destroy the trust you have built all this time and there is no doubt that regaining that trust is very difficult.</p>
                                <p class="card-text d-flex justify-content-around text-secondary">
                                    <ul>
                                        <li>CLASSICAL BALLET</li>
                                        <li>ROMANTIC BALLET</li>
                                    </ul>
                                    <ul>
                                        <li>NEOCLASSICAL BALLET</li>
                                        <li>CONTEMPORARY BALLET</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <h1 className="text-center pb-5">OUR SERVICES</h1>
                <Row xs={1} md={3} className="service-container g-4 img-fluid">
                    {
                        allServices.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>


        </div>
    );
};

export default Services;