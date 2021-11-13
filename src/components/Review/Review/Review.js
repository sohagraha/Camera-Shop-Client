import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./Review.css"
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Review = (props) => {
    const { display, desc, rating } = props.review;
    return (
        <div className="col-sm-4">
            <div className="card p-4">
                <div className="card-body">
                    <h5 className="card-title">{display}</h5>

                    <Box className="d-flex justify-content-center">
                        <Stack className="rate" spacing={1}>

                            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

                        </Stack>
                    </Box>
                    <p className="card-text">{desc}</p>
                    <Link className="navLink btn btn-dark" to="/dashboard/add-review">Add Own Review</Link>
                </div>
            </div>
        </div>
    );
};

export default Review;