/* eslint-disable */
import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-[#0a2f1c] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/df76bba8-a4be-4a7c-aa51-ae6a6a2fe00d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="sm mt-[100px] pb-8">
          <div className="flex justify-center">
            <p className="text-4xl inline font-bold border-b-4 border-yellow-600 text-gray-300">
              Contact
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-300 py-4">
              // Submit the form below or send me an email -
              seredovychalex@gmail.com
            </p>
          </div>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send a message!
        </button>
      </form>
    </div>
  );
};

export default Contact;
