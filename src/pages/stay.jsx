// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">


      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        행사 장소
      </h3>

      <div className="bg-[#ccc] h-[300px] md:h-[400px] mb-[40px]"></div>


      <h4 className="relative pl-[60px] text-[18px] font-semibold mb-[15px] md:text-[24px] md:mb-[20px]">
      <span class="material-symbols-rounded absolute left-0 top-1/2 -translate-y-1/2 bg-[#ED6830] text-white rounded-[50%] p-[10px]">location_on</span>
          주소
        </h4>
        <p className="pl-[60px] mb-[40px] text-[20px]">제주특별자치도 제주시 탑동로 47, 제주오리엔탈 호텔</p>

        <h4 className="relative pl-[60px] text-[18px] font-semibold mb-[15px] md:text-[24px] md:mb-[20px]">
      <span class="material-symbols-rounded absolute left-0 top-1/2 -translate-y-1/2 bg-[#ED6830] text-white rounded-[50%] p-[10px]">call</span>
          연락처
        </h4>
        <p className="pl-[60px] mb-[40px] text-[20px]">
          <span className="block md:inline md:mr-[30px]">Tel. +82 1588-1235/064-752-8222</span>
          <span className="block md:inline">Email. rsv@oriental.co.kr</span> 
        </p>



    </div>
  );
}

export default HomePage;
