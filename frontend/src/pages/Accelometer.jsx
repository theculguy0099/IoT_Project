import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';
import fallFront from '../images/ChairFallFront.jpeg';
import fallBack from '../images/ChairFallBack.jpeg';
import fallRight from '../images/ChairFallLeft.jpeg';
import fallLeft from '../images/ChairFallRight.jpeg';

function Accelometer() {
    return (
        <>
            <Header />
            <div className="flex flex-col flex-grow items-center justify-center text-center text-4xl md:text-5xl p-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="md:text-3xl flex flex-col">
                    <div className="p-2 md:text-5xl text-lime-200 font-bold">
                        Acclerometer:
                    </div>
                    <div className="p-2 text-gray-1000">
                        Enhancing Safety with Smart Wheelchair Technology:
                        Detecting Falls through Coordinate Analysis ( m/sec^2)
                    </div>
                    <div className="flex flex-col p-2">
                        <div className="text-orange-300 font-bold">
                            x = 0 
                        </div>
                        <div className="text-orange-300 font-bold">
                            y = 0
                        </div>
                        <div className="text-orange-300 font-bold">
                            z = 9.8
                        </div>
                    
                    </div>
                    
                </div>

            
               
            <div className="flex flex-row flex-grow p-40 gap-10">
                <div className="flex flex-col">
                    <div className="md:text-3xl font-3xl font-bold text-lime-300 p-10">Left Fall </div>
                    <div>
                        <img src={fallLeft} alt="Campus Works logo"></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="text-orange-300 font-bold">
                            x = -9.8
                        </div>
                        <div className="text-orange-300 font-bold">
                            y = 0
                        </div>
                        <div className="text-orange-300 font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div >
                    <div className="md:text-3xl font-3xl font-bold text-lime-300 p-10">Right Fall </div>
                    <div><img src={fallRight} alt="Campus Works logo"></img></div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="text-orange-300 font-bold">
                            x = 9.8
                        </div>
                        <div className="text-orange-300 font-bold">
                            y = 0
                        </div>
                        <div className="text-orange-300 font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold text-lime-300 p-10">Upward Fall </div>
                    <div>
                        <img src={fallFront} alt="Campus Works logo"></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="text-orange-300 font-bold">
                            x = 0
                        </div>
                        <div className="text-orange-300 font-bold">
                            y = 9.8
                        </div>
                        <div className="text-orange-300 font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold text-lime-300 p-10">Downward Fall </div>
                    <div>
                    <img src={fallBack}  className="d-inline-block align-top" alt="Campus Works logo"></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="text-orange-300 font-bold">
                            x = 0
                        </div>
                        <div className="text-orange-300 font-bold">
                            y = -9.8
                        </div>
                        <div className="text-orange-300 font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
            </div>
        
                <div className="flex flex-col flex-grow p-40 gap-10 md:text-3xl">
                    <div className="p-2 md:text-5xl text-lime-200 font-bold">
                        Oxiometer
                    </div>
                    <div className="p-2">
                        Enhancing Healthcare with IoT: Real-time Pulse Rate Monitoring and Alert System
                    </div>
                    <div className="p-2">
                        Detection of Heart rate and SPO2 values
                    </div>
                    
                    <div>
                        If a person heart rate value is less than 50 beats per minute ( continously for 5 minutes ) or more than 110 beats per minute ( continously for 5 minutes ), we will send alert  
                    </div>
                </div>

            </div>
                
          
            <Footer />

        </>
    );
}


export default Accelometer;
