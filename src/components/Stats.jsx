import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <>
      <div className="flex ss:flex-row flex-col px-10 justify-between items-center pb-20 text-white">
        {stats.map(
          (
            item,
            index // Added index parameter to map function
          ) => (
            <div
              key={index}
              className="flex ss:flex-row flex-col justify-center items-center gap-5"
            >
              {" "}
              <h1 className="text-[40px] font-bold">{item.value}</h1>
              <div className="flex justify-center items-center">
                <h3 className=" flex justify-center items-center text-[28px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  {item.title}
                </h3>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Stats;
