import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faServer, faCalendar, faBlog, faAddressCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const serverIcon = <FontAwesomeIcon icon={faServer} />
    const bellIcon = <FontAwesomeIcon icon={faCalendar} />
    const blogIcon = <FontAwesomeIcon icon={faBlog} />
    const aboutIcon = <FontAwesomeIcon icon={faAddressCard} />
    const [flip, set] = useState(false);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <animated.div style={useSpring({
                            to: { opacity: 1 },
                            reset: true,
                            reverse: flip,
                            delay: 200,
                            onRest: () => set(!flip),
                            from: { opacity: 0 }
                        })}>
                            <img className="img-fluid header-logo" src={logo} alt="" />
                        </animated.div>
                    </NavLink>

                    <div></div>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/">
                                    {userIcon} Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/services">
                                    {serverIcon} Services
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/events">
                                    {bellIcon} Events
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/blogs">
                                    {blogIcon} Blogs
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/about">
                                    {aboutIcon} About
                                </NavLink>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;