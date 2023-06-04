import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import fallFront from '../images/ChairFallFront.jpeg';
import fallBack from '../images/ChairFallBack.jpeg';
import fallRight from '../images/ChairFallLeft.jpeg';
import fallLeft from '../images/ChairFallRight.jpeg';
import Project_1 from '../images/Project_1.jpeg';
import Project_2 from '../images/Project_2.jpeg';
import Project_3 from '../images/Project_3.jpeg';
import Project_4 from '../images/Project_4.jpeg';





function CollisionStop() {
    return (
        <>
            <Header />
            <div className="flex flex-col flex-grow items-center justify-center text-center text-3xl md:text-3xl p-40 ">
                <div className="p-2">
                    Ultrasonic sensors and Joystick
                </div>
                <div>
                    <div className="grid md:grid-cols-2 gap-12 p-20">
                        <div>
                            Joystick-controlled wheelchair with ultrasonic obstacle detection ensures safe navigation.
                            Intuitive joystick control and 10cm range obstacle detection enhance wheelchair safety.
                        </div>
                        <div>
                            
                        
                        The ultrasound sensor sends ultrasound waves via trigger pin and wait for a time period for echo pin to recieve the reflection of it. <br />Depending on the time duration it calculates the distance from nearest hard surface.
                            In our model when the distance detected is less than 10cm the model is blocked to move any further even if joystick is turned in that direction
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-grow p-40 gap-10">
                    <div className="flex flex-col">
                        <div>
                            <img src={Project_1} alt="Campus Works logo"></img>
                        </div>
                    </div>
                    <div >
                        <div><img src={Project_2} alt="Campus Works logo"></img></div>
                    </div>
                    <div>
                        <div>
                            <img src={Project_3} alt="Campus Works logo"></img>
                        </div>
                       
                    </div>
                    <div>
                        
                        <div>
                            <img src={Project_4} className="d-inline-block align-top" alt="Campus Works logo"></img>
                        </div>
                        
                    </div>
                </div>
                

            </div>


            <Footer />

        </>
    );
}


export default CollisionStop;
