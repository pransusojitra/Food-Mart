import React from 'react';
import "./Productcard.css"

const Productcard = ({ img,title,unit,rating,price}) => {
    return (
            <div className='p-5'>
                <div className="card d-flex flex-column shadow-lg border-white rounded-4" style={{ width: "16rem", height:"350px"}}>
                    <img
                        src={img}
                        alt={title}
                        style={{ backgroundColor: "whitesmoke",height:"13rem" }}
                        className='rounded-top-4'
                    />

                    <div className="card-body d-flex flex-column gap-2">
                        <h6>{title}</h6>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className='mb-0'>{unit}</p>
                            <i className="fa-solid fa-star text-warning"></i>
                            <p className='mb-0'>{rating}</p>
                        </div>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div>
    );
}

export default Productcard;
