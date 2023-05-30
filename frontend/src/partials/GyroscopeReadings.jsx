import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function GyroscopeReadings() {
    const basePath = import.meta.env.BASE_URL;
    const iframeStyle = {
        width: '450px',
        height: '260px',
        border: '1px solid #cccccc'
    };

    return (

        <div className="flex flex-col items-center text-center bg-opacity-0 p-2 md:p-20" id="tasks_list">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5pJPqsCLO1eNrn19tkEidb8vaXfMLvx25f3QydLoug&usqp=CAU&ec=48665698"/>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
                Gyroscope Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/5?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
                <div>
                    <iframe style={iframeStyle}  src="https://thingspeak.com/channels/2165912/charts/6?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
            </div>
            
        </div>
    );
}

export default GyroscopeReadings;
