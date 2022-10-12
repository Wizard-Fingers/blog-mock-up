import React from "react";

import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";

export const Layout = () => {
  return (
    <div>
      <img
        src={first}
        alt="bag with electronic items neatly placed around it"
      />
      <img src={second} alt="/" />
      <img src={third} alt="/" />
      <img src={fourth} alt="/" />
    </div>
  );
};
