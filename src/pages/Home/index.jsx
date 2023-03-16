import React from "react";
import Collapse from "../../components/collapse/Collapse";
import mapSort from "../../assets/images/map-sort.jpg";
import "./home.css";

// const homeStyle = {
//     backgroundImage: "./images/map-sort.svg",
//     border: "solid 1px",
// };

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                backgroundImage: "url(/images/map-sort.jpg)",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                alignItems: "center",
            }}
        >
            <div className="collapseContainer">
                <div className="collapseBox">
                    <Collapse zone={"Zone 1"} />
                </div>
                <div className="collapseBox">
                    <Collapse zone={"Zone 2"} />
                </div>
                <div className="collapseBox">
                    <Collapse zone={"Zone 3"} />
                </div>
                <div className="collapseBox">
                    <Collapse zone={"Zone 4"} />
                </div>
                <div className="collapseBox">
                    <Collapse zone={"Zone 5"} />
                </div>
                <div className="collapseBox">
                    <Collapse zone={"Zone 6"} />
                </div>
            </div>
        </div>
    );
};

export default Home;
