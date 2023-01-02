import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a2f1c]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex justify-center">
          <p className="text-yellow-600">Hey there! My name is</p>
        </div>
        <div className="flex justify-center">
          <p className="text-4xl sm:text-7xl font-bold text-gray-400">
            Alex Seredovych
          </p>
        </div>
        <div className="flex justify-center">
          <p className="py-4 max-w-[600px] text-gray-300 text-center">
            I’m a Frontend Developer from Chicago, IL focused on creating
            unique web apps with broad functionality, responsvie UI and exceptional UX.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="about" smooth={true} duration={500} offset={-400}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600">
              Learn More
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
