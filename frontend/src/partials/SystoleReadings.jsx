import React, { useState, useRef, useEffect } from "react";

import { Link, useLocation } from 'react-router-dom';


function SystoleReadings() {
    const basePath = import.meta.env.BASE_URL;
    const iframeStyle = {
        width: '600px',
        height: '260px',
        border: '1px solid #cccccc'
    };

    return (

        <div className="flex flex-col items-center text-center bg-opacity-0 p-2 md:py-5" id="companies_list">
           
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-5 text-blue-400">
                Systole Readings 
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-5 text-blue-400">

                <iframe  style={iframeStyle} src="https://thingspeak.com/channels/2165919/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
        
            </div>

        </div>
    );
}

export default SystoleReadings;