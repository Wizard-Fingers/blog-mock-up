import React, { useState } from "react"
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
    const [isOpen, setIsOpen] = useState(false)
    const mobileNav = () => {
        setIsOpen(!isOpen)
    }
    //style for navbar    
    const style = {
      container:
        "w-[95%] h-20 border-b-2 border-gray-900 flex justify-between items-center mx-auto",
      innerContainer: "flex justify-between items-center",
      logedIn:
        "bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 w-8  h-8 rounded-full",
      logedInText:
        "text-white font-[1rem] text-[1.3rem] flex items-center justify-center cursor-pointer",
      links:
        "flex justify-center pl-8 text-white font-bold text-[1rem] hover:text-gray-600 pt-1 md:visible invisible",
      socialMediaIcon:
        "text-white text-2xl font-bold cursor-pointer sm:visible invisible hover:bg-gradient-to-r from-pink-500 via-red-700 to-orange-500 rounded",
      socialMediaIconContainer: "flex items-row justify-center space-x-4",
    };
    //rendering
    return (
      <div className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.logedIn}>
            <div className={style.logedInText}>D</div>
          </div>
          {/* make the value of this be null at a medium screen resolution*/}

          {links.map((link) => (
            <a href={link.link} className={style.links}>
              {link.name}
            </a>
          ))}
        </div>
        <div className={style.socialMediaIconContainer}>
          <FiTwitter className={style.socialMediaIcon} />
          <FiInstagram className={style.socialMediaIcon} />
          <FiCircle className={style.socialMediaIcon} />

          <div onClick={mobileNav} className="block lg:hidden">
            {isOpen ? (
              <AiOutlineClose className={style.socialMediaIcon} />
            ) : (
              <AiOutlineMenu className={style.socialMediaIcon} />
            )}
          </div>
          <ul
            className={
              isOpen
                ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-110%]"
            }
          >

            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              About
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              About
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              Contact
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer hover:text-[#00df9a]">
              Blog
            </li>
            <li className="p-4 hover:cursor-pointer hover:text-[#00df9a]">
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
}
