import React from "react";
import Zuri from "../Images/Zuri.png";
import I4G from "../Images/I4G.png";
import Input_normal from "../Images/input_normal.png";
import Input_checked from "../Images/Input_checked.png";
import { useState } from "react";

const Home = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [display_text, setDisplay_text] = useState("hidden");
  const [error, setError] = useState("");
  const [check, setCheck] = useState(false);
  const [border, setBorder] = useState("");
  const [border1, setBorder1] = useState("");
  const [border2, setBorder2] = useState("");
  const [border3, setBorder3] = useState("");

  // name: the name that shows in the place holder of the message input
  const name = `${firstName} ${lastName}`;

  // HandleClick - function that check if the inputs are not empty else display an error
  const HandleCLick = (e) => {
    if (firstName === "") {
      setDisplay_text("flex");
      setError("Please enter your first name");
      setBorder("border-[2px] border-red-300");
    } else if (lastName === "") {
      setDisplay_text("flex");
      setError("Please enter your last name");
      setBorder1("border-[2px] border-red-300");
    } else if (email === "") {
      setDisplay_text("flex");
      setError("Please enter your email");
      setBorder2("border-[2px] border-red-300");
    } else if (message === "") {
      setDisplay_text("flex");
      setError("Please enter message");
      setBorder3("border-[2px] border-red-300");
    } else if (check === false) {
      setDisplay_text("flex");
      setError("Please tick the terms and conditions");
    } else {
      setMessage(
        `Hey ${firstName} ${lastName}, hope you are doing great. Let us collaborate on project axyz.`
      );

      // clearing the input fields.
      setFirstname("");
      setLastname("");
      setEmail("");
      setDisplay_text("hidden");
      setBorder("");
      setBorder1("");
      setBorder2("");
      setBorder3("");
    }
    // prevent the page from refreshing after submitting
    e.preventDefault();
  };

  /* These Handles events and set the borders of the inputs after getting an error
     to it's default colour (from red to gray)
  */
  const HandleFirst_name = (e) => {
    setFirstname(e.target.value);
    if (e.target.value !== "") {
      setBorder("");
    }
  };
  const HandleLast_name = (e) => {
    setLastname(e.target.value);
    if (e.target.value !== "") {
      setBorder1("");
    }
  };
  const HandleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value !== "") {
      setBorder2("");
    }
  };
  const HandleMessage = (e) => {
    setMessage(e.target.value);
    if (e.target.value !== "") {
      setBorder3("");
    }
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
                  onChange={HandleFirst_name}
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  className={`border ${border} h-[44px] w-full outline-blue-300 px-[10px] rounded-[8px]`}
                />
              </div>
              <div className="w-full mb-[20px] flex-col justify-end md:ml-[10px]">
                <label htmlFor="last_name" className="font-semibold ">
                  Last name
                </label>
                <input
                  value={lastName}
                  onChange={HandleLast_name}
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  className={`border ${border1} h-[44px] rounded-[8px] w-[100%] outline-blue-300 px-[10px]`}
                />
              </div>
            </div>
            <div className="mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Email
              </label>
              <input
                value={email}
                onChange={HandleEmail}
                type="text"
                id="email"
                placeholder="youremail@email.com"
                className={`w-full ${border2} border h-[44px] rounded-[8px] outline-blue-300 px-[10px]`}
              />
            </div>
            <div className="message mb-[20px]">
              <label htmlFor="email" className="font-semibold ">
                Message
              </label>
              {message !== "" ? (
                <textarea
                  value={message}
                  onChange={HandleMessage}
                  placeholder={`Hey ${name}, hope you are doing great. Let us collaborate on project axyz.`}
                  className={`w-full border-[2px] border-blue-300 rounded-[10px] h-[132px] focus:border-blue-300 outline-blue-300 resize-none p-[10px] placeholder:text-black`}
                />
              ) : (
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  className={`w-full border ${border3}  rounded-[10px] h-[132px] focus:border-blue-300 outline-blue-300 resize-none p-[10px]`}
                />
              )}
              <p className={`text-red-500 ${display_text}`}>{error}</p>
            </div>
            <div
              className="tick-box-div flex mb-[20px] "
              onClick={() => setCheck(!check)}
            >
              <img
                src={check ? Input_checked : Input_normal}
                alt=""
                id="tick-box"
                className="mr-[10px] w-[20px] h-full cursor-pointer"
              />
              <p htmlFor="tick-box">
                You agree to providing your data to Onyedibe Sixtus who may
                contact you.
              </p>
            </div>
            <button
              onClick={HandleCLick}
              id="btn__submit"
              className="w-full bg-blue-600 h-[48px] text-white rounded-[5px] font-semibold"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="px-[20px] md:px-[40px] mb-[50px] md:mb-0 mt-[96px]">
        <footer className="flex justify-between md:items-center flex-col md:flex-row border-t h-[160px]">
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
