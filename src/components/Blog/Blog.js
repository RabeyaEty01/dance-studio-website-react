import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar ,faComment ,faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const Blog = (props) => {
    const {title, date, location, coments, description, img } = props.blog;
    const calenderIcon = <FontAwesomeIcon icon={faCalendar} />
    const comentIcon = <FontAwesomeIcon icon={faComment} />
    const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />

    return (
        <div>
            <div class="card border-0 mb-3 p-5">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src={img} class="img-fluid blog-img" alt="..."></img>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body text-start ps-5 ">
                            <h1 class="card-title">{title}</h1>
                            <div className="d-flex justify-content-around">
                            <p class="card-text text-primary mt-5 service-text">
                            {calenderIcon}{date}</p>
                            <p class="card-text text-primary mt-5 service-text">
                            {comentIcon}{coments}</p>
                            <p class="card-text text-primary mt-5 service-text">
                            {locationIcon} {location}</p>
                            </div>
                            <p class="card-text text-secondary mt-5 service-text">{description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;