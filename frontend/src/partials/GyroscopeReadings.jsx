import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function GyroscopeReadings() {
    const basePath = import.meta.env.BASE_URL;

    return (

        <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="tasks_list">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5pJPqsCLO1eNrn19tkEidb8vaXfMLvx25f3QydLoug&usqp=CAU&ec=48665698"/>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
                Gyroscope Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">

                {/* Graph code here  */}

            </div>
            <div className="w:full">
                <Link to={`${basePath}/gyroscope`}>
                    <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                        More details
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default GyroscopeReadings;
