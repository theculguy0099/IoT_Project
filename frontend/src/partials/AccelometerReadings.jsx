import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function HeartrateReadings() {
    const basePath = import.meta.env.BASE_URL;

    const [field1Value, setField1Value] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thingspeak.com/channels/2151504/feeds.json?api_key=J1QY6F6F16CGF1L1');
                const jsonData = await response.json();
                const fieldValue = jsonData.feeds[0].field1;
                // Data in json format looks like this we can view in console. 
                console.log(jsonData);
                // Checking in console.
                console.log(fieldValue); 
                // Assigning the value to field1 variable. 
                setField1Value(fieldValue);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Checking in console. 
    console.log(field1Value);

    return (

        <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="companies_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
                Heart Rate Readings: {field1Value}
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">

                {/* Graph code here  */}

            </div>
            <div className="w:full">
                <Link to={`${basePath}/heartrate`}>
                    <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                        More details
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeartrateReadings;
