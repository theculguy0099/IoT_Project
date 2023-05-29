import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import fallFront from '../images/ChairFallFront.jpeg';
import fallBack from '../images/ChairFallBack.jpeg';
import fallRight from '../images/ChairFallLeft.jpeg';
import fallLeft from '../images/ChairFallRight.jpeg';



function CollisionStop() {
    return (
        <>
            <Header />
            <div className="flex flex-col flex-grow items-center justify-center text-center text-3xl md:text-3xl p-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="p-2">
                    Ultrasonic sensors and Joystick
                </div>
                <div>
                    <div className="grid md:grid-cols-2 gap-12 p-20">
                        <div>
                            Joystick-controlled wheelchair with ultrasonic obstacle detection ensures safe navigation.
                        </div>
                        <div>
                            Intuitive joystick control and 10cm range obstacle detection enhance wheelchair safety.
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-grow p-40 gap-10">
                    <div className="flex flex-col">
                        <div>
                            <img src={fallLeft} alt="Campus Works logo"></img>
                        </div>
                        <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                            Quaternary content 
                        </div>
                    </div>
                    <div >
                        <div><img src={fallRight} alt="Campus Works logo"></img></div>
                        <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                           Teritary content 
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={fallFront} alt="Campus Works logo"></img>
                        </div>
                        <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                          Secondary Content
                        </div>
                    </div>
                    <div>
                        
                        <div>
                            <img src={fallBack} className="d-inline-block align-top" alt="Campus Works logo"></img>
                        </div>
                        <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                            Content 
                        </div>
                    </div>
                </div>
                

            </div>


            <Footer />

        </>
    );
}


export default CollisionStop;
