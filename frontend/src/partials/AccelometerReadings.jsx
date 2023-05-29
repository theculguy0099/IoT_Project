import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";
import { Link, useLocation } from 'react-router-dom';


function AccelarationReadings() {
    const basePath = import.meta.env.BASE_URL;
    const iframeStyle = {
        width: '450px',
        height: '260px',
        border: '1px solid #cccccc'
    };
    

    return (

        <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="companies_list">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa62ZGlNLl4xw5Z7qc855PYS_6qY2lmzdxE4JlrvaLBQ&usqp=CAU&ec=48665698"/>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                Accelaration readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe  style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
                <div>
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
                </div>
            </div>
           
          
        </div>
    );
}

export default AccelarationReadings;
