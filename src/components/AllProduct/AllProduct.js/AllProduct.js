import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AllProduct = (props) => {
    const { name, img, _id, desc, price, type } = props.mainservice;
    return (
        // single service 
        <Col className="d-flex box h-100 grid">
            <div className="col-md-5">
                <img src={img} className="img-fluid rounded-start h-100 service-img py-2" alt="..." />
            </div>
            <div className="col-md-7 py-2">
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <span className='bg-dark text-white p-1 px-2 rounded-pill'>{type}</span>
                    <p className="card-text">{desc?.slice(0, 100)}</p>
                    <p>price : {price} Taka</p>
                </div>
                <Link to={`/details/${_id}`}><button className="btn btn-dark bg-dark btn-back">Buy Now <i className="fas fa-shopping-cart"></i></button></Link>
            </div>
        </Col >
    );
};

export default AllProduct;