import React from "react";
import Zuri from "../Images/Zuri.png";
import I4G from "../Images/I4G.png";
import { useState } from "react";

const Home = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [display_text, setDisplay_text] = useState("hidden");

  const HandleCLick = (e) => {
    if (message === "") {
      setDisplay_text("flex");
    } else {
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
      setDisplay_text("hidden");
    }
    e.preventDefault();
  };

  return (
    <>
      <div className=" w-full flex items-center pt-[64px] flex-col h-screen">
        <div className="md:w-[70%] md:mx-auto w-full px-[20px] mb-[20px]">
          <div className="w-full mb-[30px]">
            <h1 className=" text-[2rem] font-semibold ">Contact Me</h1>
            <p className="text-[#475467]">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form>
            <div className="flex flex-col md:flex-row justify-between w-full ">
              <div className="w-full mr-[10px] mb-[20px] md:mb-0">
                <label htmlFor="first_name" className=" font-semibold ">
                  First name
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  className="border h-[44px] w-full outline-blue-300 px-[10px] rounded-[8px]"
                />
              </div>
              <div className="w-full mb-[20px] flex-col justify-end md:ml-[10px]">
                <label htmlFor="last_name" className="font-semibold ">
                  Last name
                </label>
                <input
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  className="border h-[44px] rounded-[8px] w-[100%] outline-blue-300 px-[10px]"
                />
              </div>
            </div>
            <div className="mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                placeholder="youremail@email.com"
                className="w-full border h-[44px] rounded-[8px] outline-blue-300 px-[10px]"
              />
            </div>
            <div className="message mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send me a message and I'll reply you as soon as possible..."
                className="w-full border rounded-[10px] h-[132px] focus:border-blue-300 outline-blue-300 resize-none p-[10px]"
              />
              <p className={`text-red-500 ${display_text}`}>
                Please enter a message
              </p>
            </div>
            <div className="flex mb-[20px]">
              <input id="tick-box" type="checkbox" className="mr-[10px]" />
              <p htmlFor="tick-box">
                You agree to providing your data to Onyedibe Sixtus who may
                contact you.
              </p>
            </div>
            <button
              onClick={HandleCLick}
              id="btn__submit"
              className="w-full bg-blue-600 h-[48px] text-white rounded-[5px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="px-[20px] md:px-[40px] mb-[50px] md:mb-0 mt-[96px]">
        <footer className="flex justify-between md:items-center flex-col md:flex-row border-t h-[20vh]">
          <div className="zuri my-[20px] md:my-0">
            <img src={Zuri} alt="" />
          </div>
          <p className="text-gray-400">HNG Internship 9 Frontend Task</p>
          <div className="I4g my-[20px] md:my-0">
            <img src={I4G} alt="" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
