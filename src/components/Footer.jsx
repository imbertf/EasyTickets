import React from "react";

const footerStyle = {
    height: "50px",
    backgroundColor: "hsla(210,100%,13%,1)",
    textAlign: "center",
    color: "white",
};

const pStyle = {
    textAlign: "center",
    color: "white",
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p style={pStyle}>©️imbertf-2023</p>
        </footer>
    );
};

export default Footer;
