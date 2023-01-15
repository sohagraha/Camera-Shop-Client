import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://camera-shop-api.projuktibangla.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Succesfully")
                    reset()
                }
            })
    };

    return (
        <div className="border border-dark bgg">
            <h2 className="fw-bold text-white m-2">Add A New Camera</h2>
            <div className="row p-2 m-0">
                <div className="col-md-6 col-12 mx-auto border border-dark mb-2 bg2">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="w-100 mt-2 p-2" placeholder="*Camera Name" {...register("name", { required: true })} />
                        <br />
                        <textarea className="w-100 mt-2" placeholder="*Camera Details" {...register("desc", { required: true })} />
                        <br />

                        <br />
                        <div className="w-100 mx-auto">
                            <label className="me-1 bg-warning p-1 rounded-pill ps-2 pe-2">Cattegory :  </label>
                            <select className="btn btn-danger rounded-pill w-50" {...register("type", { required: true })}>
                                <option value="">Select...</option>
                                <option value="DSLR">DSLR</option>
                                <option value="DigitalCamera">DigitalCamera</option>
                                <option value="Handycam">Handycam</option>
                            </select>
                        </div>
                        <br />
                        <input type="number" className="w-100 mt-2 p-2" placeholder="*Price" {...register("price", { required: true })} />
                        <br />
                        <input className="w-100 mt-2 p-2" placeholder="*Cover Image Link" {...register("img", { required: true })} />
                        <br />
                        {(errors.name || errors.desc || errors.from || errors.to || errors.by || errors.price) && <span className="text-danger">*All field are required</span>}
                        <br />
                        <input className="btn btn-danger mb-2 rounded-pill ps-5 pe-5" type="submit" />
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddService;