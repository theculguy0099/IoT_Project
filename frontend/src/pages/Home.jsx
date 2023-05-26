import React, { useState, useRef, useEffect } from "react";
import Header from '../partials/Header';
import Footer from '../partials/Footer';

import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link } from "react-router-dom";
import PirReadings from "../partials/PirReadings";
import UltrasonicReadings from "../partials/UltrasonicReadings";
import HeartrateReadings from "../partials/HeartrateReadings";
import GyroscopeReadings from "../partials/GyroscopeReadings";
import AccelarationReadings from "../partials/AccelometerReadings";





import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Chart.js Horizontal Bar Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",

      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};





function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <section className="relative">
          {/* Illustration behind hero content */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2  pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="70" cy="400" r="64" />
                <circle cx="1300" cy="500" r="74" />
                <circle cx="1300" cy="500" r="74" />
                <circle cx="1300" cy="500" r="74" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Hero image */}
              <div>
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="flex flex-col justify-center">
                    <img
                      className="mx-auto"
                      src={HeroImage}
                      width="450"
                      alt="Hero"
                    />
                  </div>
                </div>

                {/* Modal */}
                <Modal
                  id="modal"
                  ariaLabel="modal-headline"
                  show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}
                >
                  <div className="relative pb-9/16">
                    <video
                      ref={video}
                      className="absolute w-full h-full"
                      width="1920"
                      height="1080"
                      loop
                      autoPlay
                      controls
                    >
                      <source src="/videos/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Modal>
              </div>
              {/* Hero image ended. */}

              {/* modification of the code starts. */}

              <div className="text-center pb-12 md:pb-16">
                {/* Heading of startup content */}
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Smart{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    Wheel Chair
                  </span>
                </h1>

                {/* Connecting startups data starts */}

                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-2xl text-gray-900 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Improving Quality of Life through IoT-enabled Wheelchair Technology
                  </p>
                </div>

                {/* Connecting startups data ends */}

                <hr />

                {/* Start for details of the program. */}

                <div
                  className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Enhancing Wheel chair Mobility{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                        with IoT
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-gray-900">
                    <p className="text-2.5xl md:text-2xl">
                      The aim of the IoT-based smart wheelchair project is to provide
                      wheelchair users with a mobility solution that enhances their quality of
                      life, improves their independence and autonomy, and helps them
                      overcome the challenges of living with a disability.
                    </p>
                  </div>
                </div>
                {/* End for details of the program.*/}
              </div>

              {/* End of starup content heading */}


              {/* modification of the code ends.*/}
              <hr />
            </div>

            {/* Here We can change to the componenets form so that we can view the code clearly */}

          </div>
              {/* Upto Here the content of the page done  */}


            {/* Start of the graphs section */}

            {/* First column starts */}
            <div className="grid md:grid-cols-2 gap-12 p-20">
              <PirReadings />
              <UltrasonicReadings />
            </div>
            {/* First column ends */}

            {/* Second column starts */}
          
            <div className="flex  text-center items-center justify-center">
              <AccelarationReadings />
              </div>
            
            {/* Second column ends */}

            {/* Third column starts */}
            <div className="grid md:grid-cols-2 gap-12 p-20">
              <HeartrateReadings />
              <GyroscopeReadings />
            </div>
            {/* Third column ends */}


            

            {/* End of the graphs section */}
            <div className="flex justify-center text-center items-center p-40">
              <Bar options={options} data={data} />
            </div>

            <br /><br /><br /><br /><br /><br /><br />
          
        </section>

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;
