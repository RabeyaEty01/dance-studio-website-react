import React from 'react';
import aboutimg from '../../images/about.png';
import './About.css';

const About = () => {
    return (
        <div class="mb-3">
            <div class="row g-0">
                <div class="col-md-7 about-section">
                    <div class="ps-5 pe-5 my-5">
                        <h1 className="fw-bold text-danger">About Us</h1>
                        <p class="mt-5 service-text">About Us
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>

                        <div class="row row-cols-1 row-cols-md-2 g-4 my-5">
                            <div class="col">
                                <div>
                                    <div className="text-start">
                                    <h5 className="fw-bold text-danger">Break Dance Stunt Coaching</h5>
                                    <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div className="text-start">
                                    <h5 className="fw-bold text-danger">Ballet Dance Choreographer</h5>
                                    <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div className="text-start">
                                    <h5 className="fw-bold text-danger">Skill Based Coaching</h5>
                                    <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div>
                                    <div className="text-start">
                                    <h5 className="fw-bold text-danger">Experinced Dance Master</h5>
                                    <p class ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <img src={aboutimg} class="" alt="..."></img>
                </div>
            </div>
        </div>
    );
};

export default About;