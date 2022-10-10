import React from 'react'

export const Hero = () => {
    const style = {
      container:
        " mx-auto flex justify-center items-center border-b-2 border-gray-900 w-[95%]",
      text: "text-white font-extrabold text-[12rem] m-0 tracking-widest pb-4 md:text-[8rem] lg:text-[12rem] sm:text-[5rem]",
    };
  return (
      <div className={style.container}>
       <div className={style.text}> THE BLOG </div>
      </div>
  )
}
