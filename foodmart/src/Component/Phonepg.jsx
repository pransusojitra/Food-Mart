import React from "react";
import "./Phonepg.css";
import phone from "../assets/phone.png";
import appStore from "../assets/app-store.jpg";
import googlePlay from "../assets/google-play.jpg";

const Phonepg = () => {
    return (
        <div className="p-3">
            <div className="rounded-5" style={{ backgroundColor: "#fff9eb" }}>
                <div className="row align-items-center">

                    <div className="col-lg-4 col-md-4 col-12 text-center">
                        <img src={phone} alt="Phone App" className="img-fluid" />
                    </div>

                    <div className="col-lg-8 col-md-8 col-12 d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="fw-bold mb-3">
                            Shop faster with Foodmart App
                        </h1>

                        <p className="container text-muted mb-4 w-lg-75 w-md-75 w-100">
                            Fresh groceries are now just a tap away with the Foodmart mobile app. Explore trending products, seasonal essentials, and daily needs all in one place. Enjoy fast and reliable doorstep delivery that saves your time and effort. The app is designed for smooth browsing and easy ordering. Get exclusive deals, special discounts, and smart recommendations. Foodmart makes everyday shopping simple, quick, and convenient.
                        </p>

                        <div className="d-flex gap-3 flex-wrap justify-content-center">
                            <img src={appStore} alt="App Store" className="store-btn" />
                            <img src={googlePlay} alt="Google Play" className="store-btn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phonepg;
