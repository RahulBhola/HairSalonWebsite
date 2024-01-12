import React, { useState } from "react";
import { IoMdCall } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./DropDown";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const activeLink = "text-gol";
  const normalLink = "";

  return (
    <div>
      <div className="bg-slate-950">
        <div className="flex flex-col items-center">
          <div className="mdl:hidden flex w-full p-2 justify-center bg-bodyColor">
            <ul>
              <li className="flex flex-row items-center gap-6 cursor-pointer">
                <FaFacebook
                  className="text-gol text-xl hover:text-red-500 duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/hairpalaceludhiana",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                />
                <FaInstagram
                  className="text-gol text-xl hover:text-red-500 duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/thehairpalaceludhiana/",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                />
                <a
                  href="https://maps.app.goo.gl/AJf3ycJNJsCmNczi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gol text-xl hover:text-red-500 duration-300"
                >
                  <FaLocationDot />
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden mdl:inline-flex p-1 lgl:p-3 gap-2 flex flex-col lgl:flex-row items-center xl:space-x-96 rounded-b-3xl bg-white">
            <ul className="flex  flex-col mdl:flex-row mdl:px-8 items-center mdl:gap-3 lgl:gap-0">
              <li className="flex flex-row items-center gap-3">
                <IoMdCall className="text-gol text-xl" />
                <p className="font-cor">Call Us:</p>
                <a href="tel:9803922728" className="text-sm font-lib">
                  98039-22728
                </a>
              </li>
              <li className="flex flex-row items-center gap-1 mdl:gap-3 mx-1 lgl:mx-9">
                <LuClock3 className="text-gol text-xl" />
                <p className="font-cor ">Opening Hour :</p>
                <p className="font-lib text-sm">EveryDay, 10 AM - 10 PM</p>
              </li>
            </ul>
            <ul className="flex flex-row lgl:pr-8">
              <li className="flex flex-row items-center gap-6 cursor-pointer">
                <FaFacebook
                  className="text-gol text-xl hover:text-red-500 duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/hairpalaceludhiana",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                />
                <FaInstagram
                  className="text-gol text-xl hover:text-red-500 duration-300"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/thehairpalaceludhiana/",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                />
                <FaLocationDot
                  className="text-gol text-xl hover:text-red-500 duration-300"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/AJf3ycJNJsCmNczi8",
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-gol bg-bodyColor absolute top-12 right-1 text-xl lg:hidden bg-black w-12 h-12 flex items-center justify-center rounded-full cursor-pointer hover:text-designColor duration-300"
          >
            {" "}
            <MdOutlineMenu />{" "}
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-10 left-0 bg-gray-900 p-4 scrollbar-hide">
              <div>
                <div className="font-bold flex flex-col gap-14 pt-8 items-center justify-between bg-black-700 relative">
                  <div className="font-cor xl:mx-48 p-4">
                    <p className="text-2xl text-gol">THE HAIR PALACE</p>
                    <span className="text-white"> LONDON</span>
                  </div>
                  <div>
                    <ul className="font-bold flex flex-col items-center font-mon uppercase cursor-pointer gap-10 xl:gap-16 text-white">
                      {navItems.map((item) => {
                        if (item.title === "Academy") {
                          return (
                            <li
                              key={item.id}
                              className="cursor-pointer hover:text-gol duration-300"
                              onClick={() => {
                                setDropdown(!dropdown);
                              }}
                              // onMouseEnter={() => setDropdown(true)}
                              // onMouseLeave={() => setDropdown(false)}
                            >
                              <NavLink
                                to={item.path}
                                activeClassName={activeLink}
                                className={normalLink}
                              >
                                {item.title}
                              </NavLink>

                              {dropdown && <Dropdown />}
                            </li>
                          );
                        }
                        return (
                          <li
                            key={item.id}
                            className="cursor-pointer hover:text-gol duration-300"
                            onClick={() => {
                              setShowMenu(false);
                            }}
                          >
                            <Link to={item.path}>{item.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cuursor-pointer"
                  >
                    <IoCloseSharp />
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="font-cor lgl:hidden xl:mx-48 p-5">
            <p className="text-3xl text-gol">THE HAIR PALACE</p>
            <span className="text-white">LONDON</span>
          </div>
          <div className="hidden lgl:inline-flex items-center">
            <div className="font-cor xl:ml-48 p-5">
              <p className="text-gol text-3xl text-gol">THE HAIR PALACE</p>
              <span className="text-white"> LONDON</span>
            </div>
            <div className="xl:ml-10">
              <ul className="font-bold flex font-mon uppercase cursor-pointer text-sm xl:text-base gap-3 xl:gap-4 text-white">
                {navItems.map((item) => {
                  if (item.title === "Academy") {
                    return (
                      <li
                        key={item.id}
                        className="cursor-pointer hover:text-gol duration-300"
                        onClick={() => {
                          setDropdown(!dropdown);
                        }}
                        // onMouseEnter={() => setDropdown(true)}
                        // onMouseLeave={() => setDropdown(false)}
                      >
                        {item.title}

                        {dropdown && <Dropdown />}
                      </li>
                    );
                  }
                  return (
                    <li
                      key={item.id}
                      className="cursor-pointer hover:text-gol duration-300"
                    >
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
              {/* */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
