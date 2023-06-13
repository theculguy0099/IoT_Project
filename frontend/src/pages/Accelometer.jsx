import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';
import fallFront from '../images/ChairFallFront.jpeg';
import fallBack from '../images/ChairFallBack.jpeg';
import fallRight from '../images/ChairFallLeft.jpeg';
import fallLeft from '../images/ChairFallRight.jpeg';
import HeartRate from '../images/HeartRate.jpeg';
import Accelerometer from '../images/AccelerometerImage.jpeg';

function Accelometer() {
    
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl p-40">
                <div className="bg-indigo-200">
                <div className="md:text-3xl flex flex-col">
                    <div className="p-2 md:text-5xl font-bold">
                        Acclerometer    
                    </div>
                    <div className="p-12 gap-10 flex flex-row">
                            <img src={Accelerometer} ></img>
                            <div className="flex items-center justify-center text-center">
                                Enhancing Safety with Smart Wheelchair Technology:
                                Detecting Falls through Coordinate Analysis ( m/sec^2 )
                            </div>   
                    </div>
                    <div className="flex flex-row items-center  text-center justify-center ">
                        <div className="p-10 gap-10">
                            <div className="flex md:pb-5 items-center text-center justify-center">
                                <div className="text-3xl font-bold">
                                Normal Position
                                </div>
                            </div>
                            
                            <img src={Accelerometer} ></img>
                        </div>
                        <div className="flex flex-col p-2">
                            <div className="font-bold">
                                x = 0 
                            </div>
                            <div className=" font-bold">
                                y = 0
                            </div>
                            <div className=" font-bold">
                                z = 9.8
                            </div>
                        </div>
                    </div>
                    
                </div>

            
               
            <div className="flex flex-row flex-grow p-40 gap-10">
                <div className="flex flex-col">
                    <div className="md:text-3xl font-3xl font-bold p-10">Left Fall </div>
                    <div>
                        <img src={fallLeft}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="font-bold">
                            x = -9.8
                        </div>
                        <div className=" font-bold">
                            y = 0
                        </div>
                        <div className=" font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div >
                    <div className="md:text-3xl font-3xl font-bold p-10">Right Fall </div>
                    <div><img src={fallRight}></img></div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className=" font-bold">
                            x = 9.8
                        </div>
                        <div className=" font-bold">
                            y = 0
                        </div>
                        <div className="font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold  p-10">Upward Fall </div>
                    <div>
                        <img src={fallFront}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="font-bold">
                            x = 0
                        </div>
                        <div className=" font-bold">
                            y = 9.8
                        </div>
                        <div className=" font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold p-10">Downward Fall </div>
                    <div>
                    <img src={fallBack}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className=" font-bold">
                            x = 0
                        </div>
                        <div className=" font-bold">
                            y = -9.8
                        </div>
                        <div className="font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
                <div className="flex flex-col flex-grow p-40 gap-10 md:text-3xl">
                    <div className="p-2 md:text-5xl font-bold">
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
                        The pulse oximeter uses a cold light source that shines a light through the fingertip, making the tip appear to be red. By analyzing the light from the light source that passes through the finger, the device is able to determine the percentage of oxygen in the red blood cell.
                    </div>
                    <div className="flex flex-row items-center justify-center ">
                        <img src={HeartRate} className="d-inline-block align-top"></img>
                        If a person heart rate value is less than 50 beats per minute ( continously for 5 minutes ) or more than 100 beats per minute ( continously for 5 minutes ), Oxygen level is level than 90% or for High or Low BP, we can alert.
                    </div>
                    
                    <div className="grid md:grid-2">
                         
                    </div>
                </div>

            </div>
                
          
            <Footer />

        </>
    );
}


export default Accelometer;
