import React from "react";
import err404 from "../../assets/images/404.gif";

const divStyle = { display: "flex", justifyContent: "center" };

const imgStyle = { width: "70%" };

const Err404 = () => {
    return (
        <div style={divStyle}>
            <img src={err404} alt="black cat" style={imgStyle} />
        </div>
    );
};

export default Err404;
