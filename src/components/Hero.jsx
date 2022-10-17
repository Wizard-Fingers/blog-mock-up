import React from 'react'

export const Hero = () => {
    const style = {
      container:
        " mx-auto flex justify-center items-center border-b-2 border-gray-900 w-[95%]",
      text: "text-white text-[5rem] font-bold text-center md:text-[8rem] lg:text-[12rem] lg:pb-8",
    };
  return (
      <div className={style.container}>
       <div className={style.text}> THE BLOG </div>
      </div>
  )
}
