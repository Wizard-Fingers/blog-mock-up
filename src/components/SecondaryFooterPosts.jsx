import React from 'react'

function SecondaryFooterPosts({ imageUrl, postTitle, postDate }) {

  return (
    <div className="flex flex-col  p-4">
      <div className="flex flex-col justify-content: center">
        <img
          className="flex w-[13.5rem] h-[10rem] object-cover flex-none"
          src={imageUrl}
          alt="/"
        />
        <div className="w-4rem pb-3 mr-3 ">
          <div className="text-black text-[1.3rem] font-bold text-left">
            <div className="flex text-gray-500 text-sm font-thin">
              {postDate}
            </div>
            {postTitle}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondaryFooterPosts