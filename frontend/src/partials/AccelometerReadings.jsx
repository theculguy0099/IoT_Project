import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";
import { Link, useLocation } from 'react-router-dom';


function AccelarationReadings() {
    const basePath = import.meta.env.BASE_URL;

    return (

        <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="companies_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                Accelaration readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    X direction
                </div>
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    Y direction
                </div>
                <div>
                    Z direction
                </div>
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">

                {/* Graph code here  */}

            </div>
            <div className="w:full">
                <Link to={`${basePath}/accelometer`}>
                    <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                        More details
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default AccelarationReadings;
