import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a2f1c] text-gray-300">
      <div className="flex justify-center">
        <p className="text-4xl inline font-bold border-b-4 border-yellow-600 text-gray-300">
          About Me
        </p>
      </div>
      <div></div>
      <div className="w-full mt-4 grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi, I'm Alex ! <br></br> Welcome to my website :)
          </p>
        </div>
        <div className="max-w-[500px]">
          <p>
            My passion is the development of awesome web experiences which are both scalable and
            beautiful. I will translate your dreams into a well built application by using my huge expertise and will keep it up to date with the most recent technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
