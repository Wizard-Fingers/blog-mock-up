import React from "react";
import SecondaryPost from "./SecondaryPosts";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";

export const Layout = () => {
  const style = {
    container: "flex flex-col lg:flex-row",
    firstPhoto: " w-[35rem] md:w-[55rem] lg:w-full   object-cover pt-6 lg:pt-0 pb-3 mx-auto",
    firstPost: "p-4 w-full",
    secondaryText: " text-gray-400  font-small lg:text-[1.6rem] lg:pt-3",
    line: "border-b-2 border-gray-900 w-full mx-auto pt-2",
  };
  return (
    <div className="lg:flex lg:flex-row ">
      <div className={style.container}>
        <div className={style.firstPost}>
          <img
            className={style.firstPhoto}
            src={first}
            alt="bag with electronic items for photography neatly placed around it on a wooden floor"
          />
          <div className="text-gray-500  text-sm lg:pr-">Nov 2022</div>
          <div className="text-white text-[1.5rem] lg:text-[3rem]">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div className={style.secondaryText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, voluptate quae voluptatem quibusdam
            exercitationem quidem voluptatibus quos quas. Quisquam, quae.
            Quisquam
          </div>
          <div className={style.line}></div>
        </div>
        <div className="w-full">
          <SecondaryPost
            imageUrl={second}
            postTitle={"Lorem sit amet consectetur adipisicing elit. Quisquam"}
            postDate={"Nov 2022"}
          />
          <SecondaryPost
            imageUrl={third}
            postTitle={"Lorem sit amet consectetur adipisicing elit. Quisquam"}
            postDate={"Nov 2022"}
          />
          <SecondaryPost
            imageUrl={fourth}
            postTitle={"Lorem sit amet consectetur adipisicing elit. Quisquam"}
            postDate={"Nov 2022"}
          />
        </div>
      </div>
    </div>
  );
};
