import React from 'react';
import './Discount.css'

const Discount = () => {
    return (
        <div className='dst container-fluid py-5'>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className='dst1 d-flex flex-column justify-content-center align-items-center text-start p-5' style={{ height: "35rem", backgroundColor: "#e6f2fa" }}>
                            <h1 className='mb-3 w-75'>Get 25% Discount on your first purchase</h1>
                            <p className='w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere maecenas. At tellus ut nunc amet vel egestas</p>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-12 text-center">
                        {/* Right column (8 units) */}
                        Right Content
                    </div>
                </div>
            </div>
    );
}

export default Discount;