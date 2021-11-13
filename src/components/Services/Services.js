import React, { useEffect, useState } from 'react';
import { Row, Button, Spinner } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('https://safe-beach-81042.herokuapp.com/services')
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
                            services.map(mainservice => <Service mainservice={mainservice} key={mainservice.id}></Service>)
                        }
                    </Row>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Services;