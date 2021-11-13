import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    // fetch the data from JSON file 
    useEffect(() => {
        fetch('https://safe-beach-81042.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div className="my-5">
            <h1 className="container text-center bg-dark text-white p-2">Customer's Review</h1>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <Review review={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;