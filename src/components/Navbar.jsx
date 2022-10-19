import React, { useState } from "react";
import { FiTwitter, FiInstagram, FiCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  //navigation links
  const links = [
    { name: "Learn", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Bookmarking", link: "/" },
    { name: "UI Kit", link: "/" },
    { name: "Lain nya", link: "/" },
  ];
  //state for mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const mobileNav = () => {
    setIsOpen(!isOpen);
  };
  //style for navbar
  const style = {
    container:
      "w-[95%] h-20 border-b-2 border-gray-900 flex justify-between items-center mx-auto",
    logedIn:
      "bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 w-8  h-8 rounded-full",
    logedInText:
      "text-white font-[1rem] text-[1.3rem] flex items-center justify-center cursor-pointer",
    links:
      "text-white hover:text-gray-400 w-full md:w-auto h-full text-[1.3rem] font-[1rem] cursor-pointer py-2 block pl-4",
    socialMediaIcon:
      " text-white text-2xl font-bold cursor-pointer  hover:bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 rounded ",
    socialMediaIconContainer: "flex items-row justify-center space-x-4 ",
  };

  let navClass = "w-full absolute top-20 left-0 bg-[#111111] md:relative md:top-auto md:w-auto md:block pb-2";
  navClass += isOpen ? " block" : " hidden";


  //rendering
  return (
    <div className={style.container}>
      <div className={style.logedIn}>
        <div className={style.logedInText}>D</div>
      </div>

      <div className="">
        <nav className={navClass}>
          <ul className="w-full">
            {links.map((link) => (
              <li className="w-full md:w-auto inline-block  border-b-2 border-gray-900 md:border-hidden">
                <a href={link.link} className={style.links}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div className={style.socialMediaIconContainer}>
          <FiTwitter className={style.socialMediaIcon} />
          <FiInstagram className={style.socialMediaIcon} />
          <FiCircle className={style.socialMediaIcon} />
        </div>
        <div
          onClick={mobileNav}
          className="block ml-4 md:hidden "
        >
          {isOpen ? (
            <AiOutlineClose className={style.socialMediaIcon} />
          ) : (
            <AiOutlineMenu className={style.socialMediaIcon} />
          )}
        </div>
      </div>
    </div>
  );
};
