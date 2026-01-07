import React from 'react';
import "./Productcard.css"

const Productcard = ({ img,title,unit,rating,price}) => {
    return (
            <div className='p-3'>
                <div className="card d-flex flex-column shadow-lg border-white rounded-4" style={{ width: "16rem", height:"350px"}}>
                    <img
                        src={`http://localhost:5000/${img}`}
                        alt={title}
                        style={{ backgroundColor: "#fafafa",height:"13rem",width:"14rem" }}
                        className='rounded-4 mx-auto mt-3'
                    />

                    <div className="card-body d-flex flex-column gap-2">
                        <h6>{title}</h6>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className='mb-0'>{unit}</p>
                            <i className="fa-solid fa-star text-warning"></i>
                            <p className='mb-0'>{rating}</p>
                        </div>
                        <h5>Rs.{price}</h5>
                    </div>
                </div>
            </div>
    );
}

export default Productcard;
