import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import UltrasonicSensor from "./pages/UltrasonicSensor";
import PirSensor from "./pages/PirSensor";
import HeartRate from "./pages/HeartRate";
import Gyroscope from "./pages/Gyroscope";
import Accelometer from "./pages/Accelometer";

function App() {
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path={basePath} element={<Home />} />
        <Route exact path={`${basePath}/*`} element={<NotFound />} />
        <Route exact path={`${basePath}/heartrate`} element={<HeartRate />} />
        <Route exact path={`${basePath}/gyroscope`} element={<Gyroscope />} />
        <Route exact path={`${basePath}/accelometer`} element={<Accelometer />} />
        <Route exact path={`${basePath}/pirreading`} element={<PirSensor />} />
        <Route exact path={`${basePath}/ultrasonic`} element={<UltrasonicSensor />} />


      </Routes>
    </>
  );
}

export default App;
