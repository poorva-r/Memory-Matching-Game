import React, { useState, useEffect } from "react";

const Card = ({ content, flipped, matched, onClick }) => {
  return (
    <div
      className={`border-4 border-white text-white shadow-lg flex text-center items-center justify-center rounded-lg text-3xl md:text-5xl w-14 h-16 md:w-28 md:h-36 lg:w-32 lg:h-38 ${
        flipped || matched ? "" : "bg-gray-900 hover:shadow-2xl hover:scale-110"
      }`}
      onClick={onClick}
    >
      {flipped || matched ? 
      <img src={content} className="w-10 h-10 md:h-20 md:w-20 lg:w-26 lg:h-26" />
      : "?"}
    </div>
  );
};

export default Card;
