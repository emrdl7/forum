// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container pt-[40px]">
      <h3 className="text-center text-[18px] font-[900] mb-[40px] md:text-[42px] md:mb-[80px]">
        게시판
      </h3>

      <div className="flex justify-between items-center mb-4">
        <form className="flex gap-2">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="border border-[#ccc] text-[14px] px-[10px] h-[38px] rounded"
          />
          <button
            type="submit"
            className="bg-[#555] text-white text-[14px] h-[38px] px-[10px] rounded">
            검색
          </button>
        </form>
        <Link
          to="/boardList/write"
          className="bg-[#ef8156] text-white text-[14px] leading-[38px] px-[14px] rounded">
          글쓰기
        </Link>
      </div>
      <ul className="border-t-[2px] border-[#222] md:text-center">
        <li className="grid grid-cols-12 gap-2 py-[10px] font-semibold border-b border-[#ccc] bg-gray-100 hidden md:grid ">
          <span className="">번호</span>
          <span className="col-span-12 md:col-span-7">제목</span>
          <span className="md:col-span-2">작성자</span>
          <span className="md:col-span-2">작성일</span>
        </li>

        <li className="grid grid-cols-12 gap-2 py-[10px] border-b border-[#ccc] items-center hover:bg-gray-50 md:py-[20px]">
          <span className="hidden md:block">1</span>
          <span className="col-span-12 md:col-span-7 md:text-left">
            <a
              href="#"
              className="text-[#222] font-[500] hover:underline block">
              제9회 동아시아농어업유산협의회 국제컨퍼런스
            </a>

            <span className="block text-xs text-gray-500 mt-1 md:hidden">
              관리자 | 2025.06.06
            </span>
          </span>
          <span className="hidden md:block md:col-span-2">관리자</span>
          <span className="hidden md:block md:col-span-2">2025.06.06</span>
        </li>

        <li className="grid grid-cols-12 gap-2 py-[10px] border-b border-[#ccc] items-center hover:bg-gray-50 md:py-[20px]">
          <span className="hidden md:block">2</span>
          <span className="col-span-12 md:col-span-7 md:text-left">
            <a
              href="#"
              className="text-[#222] font-[500] hover:underline block">
              행사 사전등록 안내
            </a>
            <span className="block text-xs text-gray-500 mt-1 md:hidden">
              운영팀 | 2025.06.01
            </span>
          </span>
          <span className="hidden md:block md:col-span-2">운영팀</span>
          <span className="hidden md:block md:col-span-2">2025.06.01</span>
        </li>
      </ul>

      <div className="flex justify-center mt-[30px] gap-2">
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] text-[14px] rounded bg-gray-100 hover:bg-gray-200">
          이전
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border rounded bg-[#ef8156] text-white">
          1
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] text-[14px] rounded bg-gray-100 hover:bg-gray-200">
          2
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] text-[14px] rounded bg-gray-100 hover:bg-gray-200">
          다음
        </a>
      </div>
    </div>
  );
}

export default HomePage;
