import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-first mt-3">
                <div className="footer container">
                    <div className="row text-white py-3">
                        <div className="col-md-4">
                            <h4>ADDRESS</h4>
                            <div>
                                <h6>DENTISTRY</h6>
                                <p>  New York Dental Office</p>
                                <p>245 E 63rd St #110</p>
                                <p>New York, NY 10065</p>
                                <p>Phone: (212) 548-3261</p>
                                <p>Email: info@dentistry.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>APPOINMENT:</h4>
                            <p>10678</p>
                            <p>09666710678</p>
                            <p>(02) 55037242</p>
                        </div>
                        <div className="col-md-4">
                            <h4>HOURS</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Saturday</td>
                                        <td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td>
                                    </tr>

                                    <tr>
                                        <td>Monday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Wednesday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Thursday</td><td><span>10:00 AM - 2:00 PM</span><span> and </span> <span>3:00 PM - 9:00 PM</span></td></tr><tr><td>Friday</td><td><span>3:00 PM - 9:00 PM</span></td></tr></tbody></table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-second">
                <div className="container">
                    <div className="row text-white py-3">
                        <div className="col-md-12">
                            <h6>&copy; DENTISTRY, All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;