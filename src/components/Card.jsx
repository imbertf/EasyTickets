import React, { useState } from "react";

const pStyle = {
    backgroundColor: "hsla(210,100%,13%,1)",
    color: "white",
    textAlign: "center",
    margin: 0,
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    fontSize: "18px",
};

const Card = ({ itemType }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const cardStyle = {
        background: "white",
        boxShadow: isHover ? "0 0 10px hsla(210,100%,13%,1)" : "0 0 10px grey",
        borderRadius: "5px",
        overflow: "hidden",
        width: "200px",
        height: "250px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transform: isHover ? "scale(1.25)" : null,
        transition: isHover ? "all 250ms ease" : null,
    };

    return (
        <li
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    backgroundImage: `url(${itemType.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                }}
            ></div>
            <p style={pStyle}>{itemType.id}</p>
        </li>
    );
};

export default Card;
