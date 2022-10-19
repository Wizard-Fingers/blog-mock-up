import React from "react";

import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";

export const Layout = () => {
  const style = {
    container: "flex flex-col",
    firstPhoto: " w-[35rem] md:w-[45rem] object-cover pt-6 pb-3 ",
    firstPost: "p-4",
    secondaryPhotos: "w-[12rem] h-[12rem] flex md:w-[22rem] md:h-[22rem] ",
    secondaryPosts: " flex flex-col p-4",
    secondaryPost: "",
    mainText: " text-white text-[1.5rem]  ",
    secondaryText: " text-gray-400  font-small",
    date: "text-gray-500  text-sm",
    line: "border-b-2 border-gray-900 w-full mx-auto pt-2",
  };
  return (
    <div className={style.container}>
      <div className={style.firstPost}>
        <img
          className={style.firstPhoto}
          src={first}
          alt="bag with electronic items for photography neatly placed around it on a wooden floor"
        />
        <div className={style.date}>Nov 2022</div>
        <div className={style.mainText}>
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className={style.secondaryText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          exercitationem quidem voluptatibus quos quas. Quisquam, quae. Quisquam
        </div>
        <div className={style.line}></div>
      </div>

      <div className={style.secondaryPosts}>
        <div className="flex flex-row-reverse md:flex-row w-full pb-6">
          <img className={style.secondaryPhotos} src={second} alt="/" />
          <div className="w-4rem pb-3 mr-3 md:ml-3">
            <div className={style.mainText}>
              <div className={style.date}>Nov 2022</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates.
            </div>
          </div>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.secondaryPosts}>
        <div className="flex  flex-row-reverse md:flex-row w-full pb-6">
          <img className={style.secondaryPhotos} src={third} alt="/" />
          <div className="w-4rem pb-3 mr-3 md:ml-3">
            <div className={style.mainText}>
              <div className={style.date}>Nov 2022</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates.
            </div>
          </div>
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.secondaryPosts}>
        <div className="flex  flex-row-reverse md:flex-row w-full pb-6">
          <img
            className={style.secondaryPhotos}
            src={fourth}
            alt="a brown canvas bag next to a Swedish-modern type chair on a hardwood floor below a window"
          />
          <div className="w-4rem pb-3 mr-3 md:ml-3">
            <div className={style.mainText}>
              <div className={style.date}>Nov 2022</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates.
            </div>
          </div>
        </div>
        <div className={style.line}></div>
      </div>
    </div>
  );
};
