import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Allorder from '../Allorder/Allorder';
import './Allorders.css'

const Allorders = () => {

    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('https://camera-shop-api.projuktibangla.com/orders')
            .then(res => res.json()
                .then(data => setAllorders(data)))
    }, [allorders])

    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://camera-shop-api.projuktibangla.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = allorders.filter(order => order._id !== id);
                        setAllorders(remainingOrders);
                    }
                });
        }
    }
    const handelAcceptOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Accept order?');
        if (proceed) {
            const url = `https://camera-shop-api.projuktibangla.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order Accepted');
                    setAllorders(allorders);
                });
        }
    }
    return (
        <div>
            <div className="container pb-5">
                <h1 className="p-2 fw-bold bg-secondary text-white mt-4">All Orders</h1>
                {/* Pass the data to another component using map  */}

                <div className="table-responsive res">
                    <Table responsive="sm" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Mail</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allorders.map(allorders => <Allorder
                                    handelAcceptOrder={handelAcceptOrder}
                                    handelDeleteOrder={handelDeleteOrder}
                                    allorders={allorders} key={allorders._id}></Allorder>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    );
};

export default Allorders;