import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const { name, img, _id, desc, price } = props.mainservice;
    return (
        // single service 
        <Col className="d-flex box h-100">
            <div className="col-md-5">
                <img src={img} className="img-fluid rounded-start h-100 service-img py-2" alt="..." />
            </div>
            <div className="col-md-7 py-2">
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text">{desc?.slice(0, 100)}</p>
                    <p>Price : {price} Taka</p>
                </div>
                <button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" >Delete <i className="fas fa-trash-alt"></i></button>
            </div>
        </Col >
    );
};

export default ManageProduct;