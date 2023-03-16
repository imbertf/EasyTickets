import React from "react";
import Card from "./Card";
import data from "../assets/data/base_de_donnees/data.json";

const ulStyle = {
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
};

const Location = () => {
    return (
        <ul style={ulStyle}>
            {data.map((itemType, index) => (
                <Card key={`${itemType.id}-${index}`} itemType={itemType} />
            ))}
        </ul>
    );
};

export default Location;
