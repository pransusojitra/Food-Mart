import React from 'react';
import "./Photoslid.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import bg from "../assets/background-pattern.jpg"
import photo1 from "../assets/product-thumb-1.png"
import photo2 from "../assets/ad-image-1.png"
import photo3 from "../assets/ad-image-2.png"


const Photoslid = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className='flex-lg-row flex-md-column flex-column pt-3 h-100'
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: "cover",
                        height: "95vh"
                    }}>
                    <div className='row g-1'>
                        <div className="col-12 col-lg-7">
                            <div className="image-box rounded-3 p-4 h-100">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-start mt-3 mt-md-0">
                                        <p className="mb-2 fs-2" style={{ color: "#ffc640" }}>100% Natural</p>
                                        <h2 className="fw-bold fs-1">Fresh Smoothie & Summer Juice</h2>
                                        <p className="text-muted">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                          <button className='sbx border border-1 rounded-2 border-black fs-5'>Shop Now</button>
                                    </div>
                                    <div className="col-12 col-md-6 text-center text-md-end">
                                        <img src={photo1} alt="product" className="product-img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 d-flex flex-column gap-2 p-2">
                            <div
                                className="rounded-3 h-100"
                                style={{
                                    backgroundColor: "#edf5e4",
                                    backgroundImage: `url(${photo2})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    minHeight: "285px",
                                    backgroundPositionY: "bottom",
                                    backgroundPositionX: "right",
                                    backgroundSize: "260px",
                                }}>

                                <div className="p-lg-5 p-md-5 p-3 h-100">
                                    <div className="mx-auto">
                                        <span className='fs-2'>20% Off</span>
                                        <span className="sale fs-2 fw-semibold ms-3" style={{ color: "#dc3545" }}>Sale</span>
                                        <h2 className='fs-3 mt-2'>Fruits & Vegetables</h2>
                                        <p className="fw-semibold mb-0">
                                            Shop Collection <i className="fa-solid fa-arrow-right ms-1"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="rounded-3 h-100"
                                style={{
                                    backgroundColor: "#faece8",
                                    backgroundImage: `url(${photo3})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "contain",
                                    minHeight: "285px",
                                    backgroundPositionY: "bottom",
                                    backgroundPositionX: "right",
                                    backgroundSize: "290px",
                                }}>

                                <div className="p-lg-5 p-md-5 p-3 h-100">
                                    <div className="mx-auto">
                                        <span className="fs-2">20% Off</span>
                                        <span className="sale fs-2 fw-semibold ms-3" style={{ color: "#dc3545" }}>Sale</span>
                                        <h2 className='fs-3 mt-2'>Baked Products</h2>
                                        <p className="fw-semibold mb-0">
                                            Shop Collection <i className="fa-solid fa-arrow-right ms-1"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
}

export default Photoslid;
