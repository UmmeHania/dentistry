import React from 'react';
import { Button } from 'react-bootstrap';
import banner4 from '../../Assets/banner4.jpg'
import banner from '../../Assets/banner.jpg'
import ami from '../../Assets/20220417_231612.png'

const Banner = () => {

    return (
        <div className="">

            <section style={{ backgroundImage: `url(${ami})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0, 0, 0, 0.3)', minHeight: '600px' }}>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="d-flex flex-column justify-content-center h-100 align-items-start">
                            </div>
                            {/* <div>
                                <h1 className="display-1 text-white fw-bold w-100 text-center">Let's Smile together!</h1>
                                <button className='btn btn-primary text-center ms-5 mt-2'>Appointment Now</button>
                            </div> */}

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Banner;