import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Orderform from '../Orderform/Orderform';



const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`https://safe-beach-81042.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // find targeted service 
    return (
        <div >
            <div className="card m-3 w-100" >
                <div className="row g-0 w-75 mx-auto">
                    <div className="">
                        <img src={service?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h2 className="card-title ">{service?.name}</h2>
                            <p className="card-text text-start"> {service?.desc}</p>
                        </div>
                    </div>
                    <h3 >Deatils</h3>
                    <table className="table table-striped table-hover w-75 mx-auto border">
                        <tbody>
                            <tr>
                                <th scope="row">Type : </th>
                                <td>{service?.type}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cost</th>
                                <td>{service?.price} Taka</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Orderform></Orderform>


                <Link to="/home"><button className="btn btn-primary"><i className="fas fa-chevron-circle-left"></i> Back</button></Link>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default ServiceDetails;