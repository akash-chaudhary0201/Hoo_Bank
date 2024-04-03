import React from "react";
import styles from "../Style";
import { discount, robot } from "../Assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row py-[8px] px-4 items-center mb-2 bg-gradient-to-r from-indigo-500 rounded-xl ">
            <img src={discount} className="h-8 w-8" alt="Menu" /> &nbsp;
            <p className={`${styles.paragraph}`}>
              {" "}
              <span className="text-white">20%</span>&nbsp;Discount for&nbsp;
              <span className="text-white">1 Month</span>&nbsp; Account
            </p>
          </div>
          <div className=" flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
              The Next <br className="sm:block hidden" />
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Generation
              </span>{" "}
              <br className="sm:block hidden" />
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
            Payment Method
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div>
          <img
            src={robot}
            alt=""
            className="w-[600px] h-[600px] object-contain relative z-[5]"
          />
          <div className="absolute z-[0] w-[38%] h-[35%] top-20 pink__gradient" />
          <div className="absolute z-[0] w-[38%] h-[35%] top-40 blue__gradient" />
          <div className="absolute z-[0] w-[38%] h-[35%] top-60 white__gradient" />
        </div>
      </section>
    </>
  );
};

export default Hero;
