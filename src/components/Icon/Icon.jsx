import axios from "axios";
import React, { useState, useEffect } from "react";
import "./icon.css";

const Icon = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("./data/data.json").then((res) => setData(res.data));
    }, []);

    const toggleInfo = () => {
        setIsOpen(!isOpen);
    };

    const toggleHover = () => {
        setIsHover(!isHover);
    };

    // const getName = (element) => {
    //     // const options = element.options;
    //     // for (let elem of options) {
    //     //     return elem.name;
    //     // }
    //     // console.log(data);
    //     const ID = element.id;
    //     const dataId = data.find((item) => item.id === ID);
    //     console.log(dataId);
    // };

    return (
        <div className="iconContainer">
            <div className="icon" onClick={toggleInfo}></div>
            <div className={isOpen ? "iconOpen" : "iconHide"}>
                <ul>
                    {data.map((item, index) => (
                        <li key={`${index}-${item}`} onMouseOver={toggleHover}>
                            {item.id}
                        </li>
                    ))}
                </ul>
                <div className={isHover ? "iconHover" : "iconHide"}>
                    <ul>
                        {/* {data.map((element, index) => (
                            <li key={`${index}-${element}`}>
                                {getName(element)}
                            </li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Icon;
