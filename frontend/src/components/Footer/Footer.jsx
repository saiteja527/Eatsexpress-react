import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo' src={assets.logo} alt="" />
                    <p>EatsExpress is your go-to solution for satisfying your cravings conveniently and quickly. With our user-friendly web application, ordering your favorite meals has never been easier. Whether you're craving comfort food, exotic cuisine, or healthy options, EatsExpress has you covered.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 99990-99987</li>
                        <li>contact@eatsexpress.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © EatsExpress.com - All Right Reserved.</p>
        </div >
    )
}

export default Footer