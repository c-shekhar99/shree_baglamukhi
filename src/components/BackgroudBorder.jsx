import React from "react";

const BackgroundBorder = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`w-fit h-[37.9px] flex justify-center items-center gap-[7.2px] p-[8.1px] px-[12px] rounded-[10.8px] bg-white shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BackgroundBorder;
