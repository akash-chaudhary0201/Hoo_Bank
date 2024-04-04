import React from "react";
import styles from "../Style";
import { features } from "../constants";

const Business = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-[50px] ss:text-[60px] font-bold leading-[1]">
            You do the business, <br /> we’ll handle the money.
          </h1>
          <p className={`${styles.paragraph}  leading-[2] mt-6`}>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <div>
            <button className="text-black font-semibold text-[18px] bg-gradient-to-b from-blue-300 to-green-300 mt-12 w-[160px] p-4 rounded-2xl relative z-[5]">
              Get Started
            </button>
            <div className="absolute z-[0] w-[28%] h-[32%] top-[900px] pink__gradient" />
            <div className="absolute z-[0] w-[28%] h-[32%] top-[900px] white__gradient" />
            <div className="absolute z-[0] w-[28%] h-[32%] top-[900px] blue__gradient" />
          </div>
        </div>
        <div className="flex flex-col mt-10 text-white ">
          {features.map((item, index) => (
            <div
              key={index}
              className="m-3 ss:m-6 w-full flex justify-center items-center p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-transparent to-transparent hover:bg-gradient-to-r hover:from-[#35374B] transition duration-300 ease-in-out"
            >
              {" "}
              <div className=" ">
                <img
                  className="hidden  l h-[50px]  w-[50px]  ss:block"
                  src={item.icon}
                  alt=""
                />
              </div>
              <div className="ml-8 ">
                <h1 className="text-white text-2xl">{item.title}</h1>
                <p className={`${styles.paragraph}`}>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Business;
