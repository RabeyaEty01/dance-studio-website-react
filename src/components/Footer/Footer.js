import React from 'react';
import './Footer.css';
import footerlogo from '../../images/white_logo.png';


const Footer = () => {
    return (
        <div className="bg-dark my-5 pt-4 pb-4">
            <img src={footerlogo} alt="" />
            <div className="text-white row row-cols-2 row-cols-lg-4 pt-4 pb-4 main-footer">
                <div className="half-div">
                    <h4>SIGN UP AND SAVE</h4>
                    <p>Receive 20% off on registration</p>
                    <p>Hurry Up Now!</p>
                    <input type="text" placeholder="Email Address" />
                    <button className="btn-warning">SIGN UP</button>

                </div>
                <div>
                    <h4>CONTACT INFO</h4>
                    <p>11244 Rabeya Ety,Dhaka</p>
                    <p>+0127889746</p>
                    <p>etyrabeya@gmail.com</p>
                </div>

                <div>
                    <h4>MEMBER AREA</h4>
                    <p>E Books</p>
                    <p> Workshop</p>
                    <p>Fundraising</p>

                </div>
                <div>
                    <h4>TERMS</h4>
                    <p>Privacy Policy</p>
                    <p>Disclaimer</p>
                    <p>Cancellation Policy</p>

                </div>
            </div>
            <hr />
            <div>
                <p className="text-white">2021 Dance Theme © Copyright Rabeya Aktar Ety</p>

               
            </div>
        </div>
    );
};

export default Footer;