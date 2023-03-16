import React from "react";

const headerStyle = {
    backgroundColor: "hsla(210,100%,13%,1)",
    height: "100px",
};

const h1Style = {
    textAlign: "center",
    color: "white",
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>Easy tickets</h1>
        </header>
    );
};

export default Header;
