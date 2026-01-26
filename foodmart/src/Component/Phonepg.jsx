import React from "react";
import "./Phonepg.css";
import photo from '../assets/phone.png'

const Phonepg = () => {
    return (

        <div className="container"style={{ backgroundColor: "#fff9eb" }}>
            <div className="row">
                <div className="col-4">
                    <img src={photo} />

                </div>

                    <div className="col-8 d-flex flex-column justify-content-center align-items-center">
                        <h1>Shop faster with foodmart App</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.</p>
                    </div>
                </div>
            </div>

    );
};

export default Phonepg;
