import axios from "axios";
import React, { useState, useEffect } from "react";
import "./collapse.css";

const Collapse = ({ zone }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/data/data.json").then((res) => setData(res.data));
    }, []);

    const showInfo = () => {
        setIsOpen(!isOpen);
    };

    const showLocation = () => {
        setIsLocationOpen(!isLocationOpen);
        console.log("click");
    };

    return (
        <div className="collapse">
            <div className="collapseTitle" onClick={showInfo}>
                <h2>{zone}</h2>
            </div>
            <div className={isOpen ? "collapseName" : "collapseClosed"}>
                <ul>
                    {data.map((element, index) => (
                        <li key={`${index}-${index}`} onClick={showLocation}>
                            {element.name} <br />
                            {element.options.map((link, index) => (
                                <li key={`${index}-${index}`}>
                                    <a
                                        href={`${link.link}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link"
                                    >
                                        {link.location}
                                    </a>
                                </li>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Collapse;
