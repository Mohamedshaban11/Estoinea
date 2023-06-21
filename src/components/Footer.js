import React from 'react';
import './FooterStyle.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaTwitter,FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>123 Acme st</p>
                            <p>Berlin,Germany</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }}/> +49-856-749-134</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> Test123@galaxy.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About Us</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className='social'>
                        <FaFacebook  size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter  size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaLinkedin  size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer