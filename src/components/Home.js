import React from "react";
import Backbtn from "../Images/backBtn.png";
import Slack from "../Images/slack.png";
import Github from "../Images/github.png";
import Zuri from "../Images/Zuri.png";
import I4G from "../Images/I4G.png";
import Profile_img from "../Images/profile_img.png";
import ThreeDots from "../Images/threedots.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className=" w-full flex items-center pt-[20px] flex-col">
        <img
          id="profile__img"
          src={Profile_img}
          alt=""
          className="font-bold w-[100px] h-[100px] bg-black rounded-full mt-[30px] "
        />
        <img
          src={Backbtn}
          alt={Backbtn}
          className="hidden md:flex absolute right-[300px] top-[40px] cursor-pointer "
        />
        <img
          src={ThreeDots}
          alt={ThreeDots}
          className=" md:hidden absolute right-0 p-[30px]"
        />
        <p id="twitter" className="mt-[50px] font-bold mb-[30px]">
          Onyedibe Sixtus
        </p>
        <div className="Links w-full px-[20px] md:px-[50px]">
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            href="https://twitter.com/Sitoaustin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter Link
          </a>
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="btn_zuri"
            href="https://training.zuri.team/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Team
          </a>
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="books"
            href="http://books.zuri.team "
            target="_blank"
            rel="noopener noreferrer"
          >
            Zuri Books
          </a>
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="book_python"
            href="https://books.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python Books
          </a>
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="pitch"
            href="https://background.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Background Check for Coders
          </a>
          <a
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="book_design"
            href="https://books.zuri.team/design-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design Books
          </a>
          <Link
            className="h-[68px] w-full bg-gray-200 rounded flex justify-center items-center mb-[1rem] cursor-pointer text-sm md:text-lg font-medium"
            id="book_design"
            // href="https://books.zuri.team/design-rules"
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </div>
        <div className="w-full flex items-center justify-center h-[50px]">
          <img
            id="slack"
            src={Slack}
            alt={Slack}
            className="mr-[20px] cursor-pointer"
          />
          <img src={Github} alt={Github} className=" cursor-pointer" />
        </div>
      </div>
      <div className="px-[20px] md:px-[40px] mb-[50px] md:mb-0 mt-[50px]">
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
