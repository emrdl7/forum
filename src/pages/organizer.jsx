// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        주최
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-5 mb-[40px]">

              <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link1.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                제주특별자치도
              </Link>

              <Link
                to=""
                className="block relative w-[280px] h-[80px] pt-[26px] text-[15px] bg-white border-[1px] border-[#ccc] text-center"
                target="_blank">

                <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">한국 ERHAS</span>
              </Link>


            </div>



            <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          공동주최
        </h4>
      <div className="flex flex-col md:flex-row md:justify-between md:items-stretch items-center gap-5 mb-[40px]">

              <Link
                to=""
                className="block relative w-[280px] h-[80px]  text-[15px] bg-white border-[1px] border-[#ccc] text-center"
                target="_blank">
                <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">일본 ERHAS</span>
              </Link>
              <Link
                to=""
                className="block relative w-[280px] h-[80px] text-[15px] bg-white border-[1px] border-[#ccc] text-center"
                target="_blank">
                <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">중국 ERHAS</span>
              </Link>
              <Link
                to=""
                className="block w-[280px] py-[16px] text-[15px] bg-white border-[1px] border-[#ccc] text-center"
                target="_blank">
                Institute of Geographic Sciences and Natural Resources Research

              </Link>

              <Link
                to=""
                className="block relative w-[280px] h-[80px] text-[15px] bg-white border-[1px] border-[#ccc] text-center"
                target="_blank">
                <span className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Chinese Academy of Sciences
                </span>
              </Link>



            </div>


            <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          주관
        </h4>

      <div className="flex flex-col md:flex-row items-center gap-5 mb-[40px]">


              <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link3.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                한국농어촌유산학회
              </Link>
              <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link4.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                제주관광공사
              </Link>
            </div>


            <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          후원
        </h4>
        <div className="flex flex-col md:flex-row items-center gap-5">

        <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link5.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                농림축산식품부
              </Link>

              <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link6.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                해양수산부
              </Link>

              <Link
                to=""
                className="block w-[280px] h-[80px] text-[0px] bg-[url('/src/assets/images/link7.svg')] bg-white bg-no-repeat bg-center bg-[length:60%_auto] border-[1px] border-[#ccc]"
                target="_blank">
                한국농어촌공사
              </Link>
            </div>





    </div>
  );
}

export default HomePage;
