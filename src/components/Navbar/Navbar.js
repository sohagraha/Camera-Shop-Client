import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { logout } = useFirebase();
    const { user } = useAuth();
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark fs-6 fw-normal navbar-sticky-top" >
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/home" > <img className="brand" src="https://e7.pngegg.com/pngimages/287/399/png-clipart-high-dynamic-range-imaging-android-camera-colorful-card-photography-flower-thumbnail.png" alt="" /> CameraZone</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* Nav Links  */}
                            <Link to="/home" className="nav-link bg active">Home</Link>
                            <Link className="nav-link text-white bg" to="/services">Explore Camera</Link>
                            {/* {user?.email &&
                                <Link className="nav-link text-white bg" to="/add-review">Review</Link>
                            } */}
                            {/* {user?.email &&
                                <Link className="nav-link bg text-white" to="/my-orders">My Orders</Link>
                            } */}
                            {user?.email &&
                                <Link className="nav-link bg text-white" to="/dashboard">Dasboard</Link>
                            }
                            <span className="d-flex justify-content-start">
                                {user?.email ?
                                    <>
                                        <Link className="nav-link" to="home"><i className="fas fa-user"></i><span> </span>{user?.displayName}<span className="text-danger ms-2 p-2 bg" onClick={logout}> <i className="fas fa-sign-out-alt"></i> Log Out</span></Link>
                                    </> :
                                    <Link className="nav-link bg text-white bg border border-2" to="login">Login</Link>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default Navbar;