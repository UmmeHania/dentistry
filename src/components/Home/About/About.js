import React from 'react';
import banner2 from '../../Assets/banner2.jpg'

const About = () => {
    return (
        <div>
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-md-6">
                    <img width="100%" src={banner2} alt="" />
                </div>
                <div className="col-md-6 ml-5">

                    <h2 className="mb-3 fw-bold">HI THERE!</h2>
                    <h5 className="mb-3">
                        <span className='fw-bold'> Dr. Elma Smith</span> <br />
                        BDS, FCPS, FWFO (USA)
                    </h5>
                    <p>DENTISTRY is one of the most hi-tech dental clinics in New York, serving all of your dental needs , with special emphasis on 3D Dental Scanning, Laser Dentistry, Invisalign Clear Aligner, Teeth whitening, Painless Injection Facility, Dental Braces, Dental Implant and Scanning whole mouth with worlds most advanced Intra-oral Caries & Plaque Scanner.</p>
                    <button className='btn btn-primary'>Explore more</button>
                </div>
            </div>
        </div>
    );
};

export default About;