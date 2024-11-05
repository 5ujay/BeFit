import React from "react";
import { Link } from "react-router-dom";
import bg_video from "./videos/BeFitBgVideo.mp4";

const Home = () => {


  return (
    <div className="relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={bg_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 bg-opacity-50 p-5 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-4 text-white">
          Welcome to Our Fitness Guide
        </h1>
        <p className="text-lg text-center mb-6 text-white">
          Discover personalized workouts and achieve your fitness goals.
        </p>
        <p className="text-lg text-center mb-6 text-white">
          Start your journey towards a healthier, happier you!
        </p>

        <Link to="workout">
          <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300">
            Start the Workout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
