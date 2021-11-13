import * as React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddReview.css'
import { Box } from '@mui/system';
import { Rating } from '@mui/material';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //https://stark-badlands-88982.herokuapp.com/

    const { user } = useAuth();

    const onSubmit = datas => {
        const data = { ...datas, "rating": value, "lables": labels[hover !== -1 ? hover : value], display: user?.displayName }
        console.log(data);
        axios.post('https://safe-beach-81042.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Succesfully")
                    reset()
                }
            })
    };

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };


    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    return (
        <div className="border border-dark bgg">
            <h2 className="fw-bold text-white m-2">Say About Our Website</h2>
            <p className="text-warning">Please Leave Review*</p>
            <div className="row p-2 m-0">
                <div className="col-md-6 col-12 mx-auto border border-dark mb-2 bg2">

                    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                        <input disabled className="w-100 mt-2 p-2" value={user?.displayName} />
                        <br />
                        <textarea className="w-100 mt-2" placeholder="*Review Details" {...register("desc", { required: true })} />
                        <br />

                        <div className="d-flex justify-content-center">
                            <h5>Rating : </h5>
                            <Box
                                sx={{
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Rating
                                    sx={{ color: 'red' }}
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {value !== null && (
                                    <div>
                                        <Box sx={{ ml: 2 }} >{labels[hover !== -1 ? hover : value]}
                                        </Box>
                                    </div>
                                )}
                            </Box>
                        </div>


                        {(errors.name || errors.desc || errors.from || errors.to || errors.by || errors.price) && <span className="text-danger">*All field are required</span>}
                        <br />
                        <input className="btn btn-danger mb-2 rounded-pill ps-5 pe-5" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddReview;