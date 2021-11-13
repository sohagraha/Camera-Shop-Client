import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        // Carousel 
        <div className="container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t3.ftcdn.net/jpg/01/90/90/68/240_F_190906862_gNTkQVE0FzcludtTdx6ZTulaQ6hEIIyo.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t3.ftcdn.net/jpg/00/69/49/84/240_F_69498464_iEkojzABY09jlVN3WM85t35mLiJyWAn5.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://t4.ftcdn.net/jpg/03/24/27/99/240_F_324279915_J30jAO3z7VDioSX18DnIJ5o5PKIe0yNA.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;