import React from "react";
import Zuri from "../Images/Zuri.png";
import I4G from "../Images/I4G.png";

const Home = () => {
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
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  className="border h-[44px] w-full outline-blue-300 px-[10px]"
                />
              </div>
              <div className="w-full mb-[20px] flex-col justify-end md:ml-[10px]">
                <label htmlFor="last_name" className="font-semibold ">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  className="border h-[44px] rounded-[5px] w-[100%] outline-blue-300 px-[10px]"
                />
              </div>
            </div>
            <div className="mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="youremail@email.com"
                className="w-full border h-[44px] rounded-[5px] outline-blue-300 px-[10px]"
              />
            </div>
            <div className="message mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Message
              </label>
              <textarea
                placeholder="Send me a message and I'll reply you as soon as possible..."
                className="w-full border rounded-[5px] h-[132px] focus:border-blue-300 outline-blue-300 resize-none p-[10px]"
              />
            </div>
            <div className="flex mb-[20px]">
              <input type="checkbox" className="mr-[10px]" />
              <p>
                You agree to providing your data to Onyedibe Sixtus who may
                contact you.
              </p>
            </div>
            <button
              id="btn__submit"
              className="w-full bg-blue-600 h-[40px] text-white rounded-[5px]"
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
