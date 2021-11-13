import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Orderform = () => {

    const { user } = useAuth();
    const userEmail = user.email;
    const userName = user.displayName;



    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = formData => {
        const data = { ...formData, "mail": userEmail, "name": userName, "status": "pending" }

        axios.post('https://safe-beach-81042.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Order Succesfully")
                    reset();
                }
            })
    };
    return (
        <div>
            <hr className="w-50 mx-auto" />
            <h3 className="fw-bold">Booking Now</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="m-2" placeholder="Address" {...register("address")} />

                <br />

                <input className="m-2" placeholder="Mobile Number" type="number" {...register("phone", { required: true })} />

                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <input className="bg-danger m-2 Order text-white fw-bild p-1" value="Order Now" type="submit" />
            </form>
        </div>
    );
};

export default Orderform;