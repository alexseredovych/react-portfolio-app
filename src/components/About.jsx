import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a2f1c] text-gray-300">
      <div className="flex justify-center">
        <p className="text-4xl inline font-bold border-b-4 border-yellow-600 text-gray-300">
          About
        </p>
      </div>
      <div></div>
      <div className="w-full mt-4 grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Alex ! <br></br> Happy to see you here :)
          </p>
        </div>
        <div className="max-w-[500px]">
          <p>
            I enjoy creating awesome web experiences which are both scalable and
            beautiful. Will translate any of your UI/UX requirements into a
            lightweight code. Currently focused on making unique responsive SPAs
            with React.js.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
