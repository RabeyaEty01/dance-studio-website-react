import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div class="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                       <img className="img-fluid" src={logo} alt="" />
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
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" exact to="/events">
                                    Events
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/blogs">
                                    Blogs
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink activeClassName="nav-link" to="/about">
                                    About
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