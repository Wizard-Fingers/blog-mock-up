import React from "react";
import SecondaryFooterPosts from "./SecondaryFooterPosts";
import footerFirst from "../assets/footer-first.jpg";
import footerSecond from "../assets/footer-second.jpg";
import footerThird from "../assets/footer-third.jpg";
import footerFourth from "../assets/footer-fourth.jpg";
export const Footer = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="text-sm font-bold text-gray-400 pt-6 pl-4 pb-6">
        PHILIHAN EDITOR
      </div>
      <div className="flex md:flex-row justify-center md:justify-evenly">
        <div className="md:flex w-full md:justify-evenly">
          <SecondaryFooterPosts
            imageUrl={footerFirst}
            postTitle="Lorem ipsum dolor sit"
            postDate="May 20, 2021"
          />
          <SecondaryFooterPosts
            imageUrl={footerSecond}
            postTitle="Lorem ipsum dolor sit"
            postDate="May 20, 2021"
          />
        </div>
        <div className="md:flex w-full md:justify-evenly">
          <SecondaryFooterPosts
            imageUrl={footerThird}
            postTitle="Lorem ipsum dolor sit"
            postDate="May 20, 2021"
          />
          <SecondaryFooterPosts
            imageUrl={footerFourth}
            postTitle="Lorem ipsum dolor sit"
            postDate="May 20, 2021"
          />
        </div>
      </div>
    </div>
  );
};
