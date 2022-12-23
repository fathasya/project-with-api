import React from "react";

const InputElement = (props) => {
  return (
    <input
      className="w-full px-5 my-4 py-2 text-gray-800 rounded-lg cursor-pointer border-[1.5px] border-red-600 hover:border-red-300 active:border-red:700"
      {...props}
    />
  );
};

export default InputElement;
