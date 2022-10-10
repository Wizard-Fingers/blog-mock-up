import React from "react";

import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";

export const Layout = () => {
  return (
    <div>
      <image
        src={first}
        alt="bag with electronic items neatly placed around it"
      />
      <image src={second} alt="/" />
      <image src={third} alt="/" />
      <image src={fourth} alt="/" />
    </div>
  );
};
