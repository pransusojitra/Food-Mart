import React from 'react';
import Navslider from '../Component/Navslider';
import Categoryslider from '../Component/Categoryslider';
import Newlyslid from '../Component/Newlyslid';
import Product from '../Component/Product';

const Home = () => {
    return (
        <div>
            <div className='d-lg-none d-md-block d-block mt-3'>

                <Navslider />
            </div>
            <div className='mt-2 d-lg-block d-md-none d-none'>
                <nav class="navbar navbar-expand-lg bg-white">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-4 gap-4">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Women</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Men</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Kids</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-disabled="true">Accessories</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Brand</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sale</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div>
                <Categoryslider />
            </div>
            <div>
                <Newlyslid />
            </div>
            <div>
                <Product />
            </div>
        </div>
    );
}

export default Home;
