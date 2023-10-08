import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    I am a full-stack developer at Kingster with expertise in both front-end and back-end web development. I excel in building interactive and user-friendly web applications, leveraging a wide range of technologies and tools. My skills span from designing elegant user interfaces to creating robust server-side solutions.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Deonar Colony,Govandi Bomaby-400043
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 9893938393</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: adilkazi@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">HIJABS</span>
                    <span className="text">DRESSES</span>
                    <span className="text">ABAYAS</span>
                    <span className="text">Tops</span>
          
                </div>
                {/* <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div> */}
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                    Kingster 2023  CREATED BY ❤ E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
