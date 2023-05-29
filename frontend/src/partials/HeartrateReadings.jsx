import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function HeartrateReadings() {
    const basePath = import.meta.env.BASE_URL;

    const [heartRateInBeats, setHeartBeat] = useState(''); 

    const iframeStyle = {
        width: '700px',
        height: '400px',
        border: '1px solid #cccccc',
        fontSize: "24px",
        color: "black",
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thingspeak.com/channels/2165919/fields/1.json?api_key=V5BSNS9HHDUCTTMP');
                const jsonData = await response.json();
                const fieldValue = jsonData;
                // Data in json format looks like this we can view in console. 
                console.log(jsonData);
                // Checking in console.
                const Latest_value_of_heartRate = fieldValue.feeds[0].field1;
                console.log(fieldValue.feeds[0].field1); 
                // Assigning the value to field1 variable. 
                setHeartBeat(Latest_value_of_heartRate);
                console.log(heartRateInBeats);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Checking in console. 
    //console.log(heartRateInBeats);

    return (

        <div className="flex flex-col items-center text-center bg-opacity-0 p-2 md:p-5" id="companies_list">
         <img src="data:image/png;base64,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" alt="Icon Name"/>

           
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
                Heart Rate Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-0 text-blue-400">

                {/* Graph code here  */}
                <iframe style={iframeStyle}  src="https://thingspeak.com/channels/2165919/charts/1?width=auto&height=auto&bgcolor=%23000000&color=%23ffffff&dynamic=true&results=60&type=line&update=15"></iframe>

            </div>
        </div>
    );
}

export default HeartrateReadings;
