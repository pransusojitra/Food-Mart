import React from 'react';
import "./Navbar.css";
import img from "../assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
                <div className="container-fluid px-4">

                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={img} alt="logo" className="nav-logo" />
                    </a>
                        
                    <div className="collapse navbar-collapse border border-1 rounded-4 gap-2 shadow-sm"style={{maxWidth:"600px",height:"50px"}} id="navbarSupportedContent">
                        <div className="dropdown"style={{width:"160px"}}>
                            <button className="btn w-100 dropdown-toggle" id='cl' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Categories
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" id='cl' href="#">Groceries</a></li>
                                <li><a className="dropdown-item" id='cl' href="#">Drinks</a></li>
                                <li><a className="dropdown-item" id='cl' href="#">Drinks</a></li>
                            </ul>
                        </div>

                        <form className="flex-grow-1" role="search">
                            <input className="form-control border-0" style={{backgroundColor:"#f7f7f7"}} type="search" placeholder="Search for more than 20,000 products" aria-label="Search" />
                        </form>
                    </div>

                    <div className='d-flex align-items-center gap-4 ms-lg-auto mt-3 mt-lg-0'>

                        <div className='text-end d-none d-lg-block'>
                            <p id='cl'>For Support?</p>
                            <h5 className='fw-semibold'>+980-34984089</h5>
                        </div>

                        <div className='d-flex gap-3 fs-5'>
                            <i className="fa-regular fa-user"></i>
                            <i className="fa-regular fa-heart"></i>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
