import React from 'react';
import './Discount.css'

const Discount = () => {
    return ( 
        <div className='p-3'>
            <div className='dst rounded-5 p-lg-5 p-md-4 p-3' style={{ backgroundColor: "#e6f2fa" }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 d-flex justify-content-center">
                        <div className='d-flex flex-column justify-content-center text-start px-3' style={{maxWidth: "600px" }}>
                            <h1 className='fw-bold mb-4' style={{ fontSize: "3.8rem", lineHeight: "1.2" }} >Get <span style={{ color: "#ffc640" }}>25% Discount</span> on your first purchase</h1>
                            <p className='fs-6 text-muted' style={{ lineHeight: "1.8" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas</p>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <div className="w-100" style={{ maxWidth: "550px" }}>
                            <form>
                                <div className='mb-3 text-start'>
                                    <label className="form-label fw-medium">Name</label>
                                    <input className='form-control rounded-3 py-2' type="text" placeholder="Name" />

                                    <div className="mb-3 text-start">
                                        <label className="form-label fw-medium">Email</label>
                                        <input className='form-control rounded-3 py-2' type="email" placeholder="abc@mail.com" />
                                    </div>

                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" id="subscribe" />
                                        <label className="form-check-label" htmlFor="subscribe">Subscribe to the newsletter</label>
                                    </div>
                                </div>
                                <button className="btn w-100 rounded-3 text-white fs-5 py-2 submit-btn" type="submit" style={{ backgroundColor: "#1f2428" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Discount;