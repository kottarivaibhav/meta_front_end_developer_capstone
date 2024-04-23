import React from "react";
import logo from "../images/Logo .svg";

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="logo" />
                    <h2>Location</h2>
                    <p>1234 Main Street</p>
                    <p>Anytown, USA</p> 
                </div>
            </section>
        </footer>
    );
};

export default Footer;