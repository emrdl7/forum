// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">

<h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        오시는길
      </h3>

      <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          자동차
        </h4>

          <strong className="block pr-[20px] text-[18px] font-semibold text-[#ED6830]"> 제주국제공항 → 제주오리엔탈호텔</strong>
          <p className="text-[16px] mb-[20px]">
            <span className="block md:inline md:mr-[10px]">용문로 → 서문로</span>
            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px] mr-[10px]">총거리: 4.3km </span>
            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px]">소요시간 : 약 13분</span>
          </p>
          
          <strong className="block pr-[20px] text-[18px] font-semibold text-[#ED6830]">제주오리엔탈호텔  → 제주국제공항</strong>
          <p className="text-[16px] mb-[40px]">
            <span className="block md:inline md:mr-[10px]">서문로 → 용문로</span>
            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px] mr-[10px]">총거리: 4.3km </span>
            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px]">소요시간 : 약 13분</span>
          </p>

          <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          대중교통
        </h4>

          <strong className="block pr-[20px] text-[18px] font-semibold text-[#ED6830]"> 제주국제공항 → 제주오리엔탈호텔</strong>
          <p className="text-[16px] mb-[20px]">
            <span className="block md:inline md:mr-[10px]">도착층(1F) Gate 3 앞 제주국제공항3(용담, 시청) 정류장에서 365, 43-2, 325, 370, 316, 3001, 465, 302 탑승후 '관덕정' 정류장에서 하차, 9분(710m) 도보 이동 </span>

            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px]">소요시간 : 약 30분</span>
          </p>

          <strong className="block pr-[20px] text-[18px] font-semibold text-[#ED6830]">제주오리엔탈호텔  → 제주국제공항</strong>
          <p className="text-[16px] mb-[40px]">
            <span className="block md:inline md:mr-[10px]">'관덕정' 정류장까지 도보 이동(9분, 710m) 365, 43-2, 325, 370, 316, 3001, 465, 302 버스 탑승 후 '제주국제공항' 정류장에서 하차 </span>

            <span className="block md:inline md:before:content-['/'] md:before:mr-[10px]">소요시간 : 약 30분</span>
          </p>

          <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          셔틀버스
        </h4>

          
      {/* 일정표 시작 */}
      <div className="overflow-x-auto mb-[40px]">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base min-w-[760px]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-center font-semibold" rowSpan="2">일자</th>
              <th className="border border-gray-300 p-2 text-center font-semibold">출발시간</th>
              <th className="border border-gray-300 p-2 text-center font-semibold">도착시간</th>
              <th className="border border-gray-300 p-2 text-center font-semibold">출발시간</th>
              <th className="border border-gray-300 p-2 text-center font-semibold">도착시간</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-center font-semibold" colSpan="2">제주국제공항 → 제주오리엔탈호텔 (IN)</th>
              <th className="border border-gray-300 p-2 text-center font-semibold" colSpan="2">제주오리엔탈호텔 → 제주국제공항 (OUT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 17일<br/>수요일 오전</td>
              <td className="border border-gray-300 p-2 text-center">11:55</td>
              <td className="border border-gray-300 p-2 text-center">12:04</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">12:25</td>
              <td className="border border-gray-300 p-2 text-center">12:40</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">12:55</td>
              <td className="border border-gray-300 p-2 text-center">13:10</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="2">9월 17일<br/>수요일 오후-1</td>
              <td className="border border-gray-300 p-2 text-center">13:30</td>
              <td className="border border-gray-300 p-2 text-center">13:45</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">14:00</td>
              <td className="border border-gray-300 p-2 text-center">14:15</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 17일<br/>수요일 오후-2</td>
              <td className="border border-gray-300 p-2 text-center">16:00</td>
              <td className="border border-gray-300 p-2 text-center">16:15</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">16:30</td>
              <td className="border border-gray-300 p-2 text-center">16:45</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">17:00</td>
              <td className="border border-gray-300 p-2 text-center">17:15</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 19일<br/>금요일 오전</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">10:00</td>
              <td className="border border-gray-300 p-2 text-center">10:15</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">10:30</td>
              <td className="border border-gray-300 p-2 text-center">10:45</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">11:00</td>
              <td className="border border-gray-300 p-2 text-center">11:15</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 19일<br/>금요일 오후-1</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">13:00</td>
              <td className="border border-gray-300 p-2 text-center">13:15</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">13:30</td>
              <td className="border border-gray-300 p-2 text-center">13:45</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">14:00</td>
              <td className="border border-gray-300 p-2 text-center">14:15</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 19일<br/>금요일 오후-2</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">16:00</td>
              <td className="border border-gray-300 p-2 text-center">16:15</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">16:30</td>
              <td className="border border-gray-300 p-2 text-center">16:45</td>
            </tr>
            <tr className="bg-[#f9f9f9]">
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">17:00</td>
              <td className="border border-gray-300 p-2 text-center">17:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 20일<br/>토요일 오전</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">10:00</td>
              <td className="border border-gray-300 p-2 text-center">10:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">10:30</td>
              <td className="border border-gray-300 p-2 text-center">10:45</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">11:00</td>
              <td className="border border-gray-300 p-2 text-center">11:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 20일<br/>토요일 오후-1</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">13:00</td>
              <td className="border border-gray-300 p-2 text-center">13:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">13:30</td>
              <td className="border border-gray-300 p-2 text-center">13:45</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">14:00</td>
              <td className="border border-gray-300 p-2 text-center">14:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="3">9월 20일<br/>토요일 오후-2</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">16:00</td>
              <td className="border border-gray-300 p-2 text-center">16:15</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">16:30</td>
              <td className="border border-gray-300 p-2 text-center">16:45</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">-</td>
              <td className="border border-gray-300 p-2 text-center">17:00</td>
              <td className="border border-gray-300 p-2 text-center">17:15</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 일정표 끝 */}

    </div>
  );
}

export default HomePage;
