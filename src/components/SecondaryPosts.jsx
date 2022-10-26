import React from "react";

const SecondaryPosts = ({ imageUrl, postTitle,  postDate }) => {
  return (
    <div className="flex flex-col p-4 ">
      <div className="flex flex-row-reverse md:flex-row w-full pb-6">
        <img
          className="w-[12rem] h-[12rem] flex md:w-[18rem] md:h-[18rem] lg:w-[12rem] lg:h-[12rem] object-cover flex-none"
          src={imageUrl}
          alt="/"
        />
        <div className="w-4rem pb-3 mr-3 md:ml-3">
          <div className="text-white text-[1.5rem] md:text-[2.7rem] lg:text-[2rem]">
            <div className="text-gray-500  text-sm">{postDate}</div>
            {postTitle}
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-900 w-[80%] lg:w-[95%] mx-auto lg:pt-[0.8rem]"></div>
    </div>
  );
};

export default SecondaryPosts;
