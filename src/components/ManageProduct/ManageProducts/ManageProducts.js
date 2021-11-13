import React, { useEffect, useState } from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct'

const ManageProducts = () => {
    const [services, setServices] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('https://safe-beach-81042.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // delete service as like order 
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Delete Product?');
        if (proceed) {
            const url = `https://safe-beach-81042.herokuapp.com/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = services.filter(order => order._id !== id);
                        setServices(remainingOrders);
                    }
                });
        }
    }
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
                            services.map(mainservice => <ManageProduct
                                mainservice={mainservice}
                                key={mainservice.id}
                                handelDeleteOrder={handelDeleteOrder}
                            ></ManageProduct>)
                        }
                    </Row>
                </div>
            }
        </div>
    );
};

export default ManageProducts;