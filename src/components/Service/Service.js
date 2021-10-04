import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Service.css';

const Service = (props) => {
    const { name, trainer, price, rating, img, style } = props.service;
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top img-fluid card-img" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           <p>Trainer: {trainer}</p>
                           <p>Style: {style}</p>
                           <div className="d-flex justify-content-between">
                           <h4>${price}</h4>
                           <p><Rating
                                initialRating={rating}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating></p>
                           </div>
                           <Button variant="warning w-50">Learn More  {arrowIcon}</Button>{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;