import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import Footer from '../../Footer/Footer';
import AllProduct from '../AllProduct.js/AllProduct';


const AllProducts = () => {
    const [services, setServices] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('https://camera-shop-api.projuktibangla.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            {services.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :
                <div className="container pb-5">
                    <h1 className="p-2 fw-bold bg-secondary text-white mt-4">Camera</h1>
                    {/* Pass the data to another component using map  */}
                    <Row xs={1} md={2} className="g-4">
                        {
                            services.slice(0, 6).map(mainservice => <AllProduct mainservice={mainservice} key={mainservice.id}></AllProduct>)
                        }
                    </Row>
                </div>
            }
        </div>
    );
};

export default AllProducts;