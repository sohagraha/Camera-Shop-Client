import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        // Footer 
        <>
            <div className='p-2 bg-dark text-white'>
                <div className="container mb-3">
                    <div className="row">
                        {/* Subscribe form using mail  */}
                        <div className="col-12 col-md-4 my-auto">
                            Subscribe
                            <div className="d-flex">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        placeholder="Email"
                                    />
                                </InputGroup>
                                <div>
                                    <button className="btn btn-danger">subscribe </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">

                        </div>
                        {/* Address Field  */}
                        <div className="col-12 col-md-4">
                            <div className="text-start">
                                <div className="g-5">
                                    <span><i className="fas fa-map-marker-alt text-warning"></i>  H# 184 (8F), Chowdhury parbata
                                        Begum Rokeya Sarani <br />
                                        Mirpur-10, Dhaka.</span>
                                    <br />
                                    <span ><i className="fas fa-phone text-warning"></i> 220-314-1583</span>
                                    <br />
                                    <span><i className="far fa-envelope text-warning"></i> support@traveliya.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright  */}
                <h6><i className="fas fa-copyright text-warning"></i> Traveliya . All right reserved.</h6>
            </div>
        </>
    );
};

export default Footer;