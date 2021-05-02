import React from 'react';
// import { Button } from './Button';
// import { Button } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';
 
function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join Our NewsLetter for Updated fashion .
                </p>
                <p className="footer-subscription-text">You can unsubscribe at anytime.</p>
                <div className="input-area">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <button className="btnsubs">Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit Videos</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencers</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            MADSSS 
                        </Link>
                    </div>
                    <small className="website-rights">Madsss &copy; 2021 </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube">
                            <i className="fa fa-youtube-square" aria-hidden="true"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Footer;