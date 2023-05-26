import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link } from "react-router-dom";


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
  indexAxis: "y" ,
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

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  return (
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
        



        {/* Start of the graphs section */}

        {/* First column starts */}
        <div className="grid md:grid-cols-2 gap-20 p-10">
          <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="companies_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
              PIR Readings
            </div>
            <div className="w:full">
              <Link to={`${basePath}/pirreading`}>
                <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                  More details 
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="tasks_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
              Ultrasonic Readings
            </div>
            <div className="w:full">
              <Link to={`${basePath}/ultrasonic`}>
                <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                  More details
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* First column ends */}



        {/* Second column starts */}
        <div className="grid md:grid-cols-2 gap-20 p-10">
          <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="companies_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
              Heart Rate Readings 
            </div>
            <div className="w:full">
              <Link to={`${basePath}/heartrate`}>
                <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                  More details
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center text-center bg-blue-100 p-2 md:p-20" id="tasks_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400">
              Gyroscope Readings 
            </div>
            <div className="w:full">
              <Link to={`${basePath}/gyroscope`}>
                <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                  More details
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Second column ends */}


        {/* Third column starts */}
        <div className="grid gap-20 p-10">
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
            <div className="w:full">
              <Link to={`${basePath}/accelometer`}>
                <button className="btn text-white bg-gray-900 hover:bg-gray-700">
                  More details
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Third column ends */}

        {/* End of the graphs section */}
        <div>
          <Bar options={options} data={data} />
        </div>
        
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    </section>
  );
}

export default HeroHome;
