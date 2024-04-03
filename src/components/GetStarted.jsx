import React from "react";
import styles from "../Style";
import { arrowUp } from "../Assets";

const GetStarted = () => {
  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-gradient-to-r from-blue-500 to-green-500 cursor-pointer p-[2px]`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent leading-[23px]">
              <span>Get</span> &nbsp;
            </p>
            <img src={arrowUp} className="h-[23px] w-[23px] object-contain" />
          </div>
          <p className="font-poppins font-medium text-[18px] bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent leading-[23px]">
            <span>Started</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
