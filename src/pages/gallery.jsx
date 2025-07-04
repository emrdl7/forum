// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (

    <div className="container pt-[40px]">

      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        사진
      </h3>

      <div className="flex gap-2 pb-[30px]">
        <button className="px-4 py-2 bg-[#222] text-white rounded">전체</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션1</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션2</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션3</button>
      </div>
      <div className="flex justify-between items-center mb-4">

        {/* <Link
          to="/boardGallery/write"
          className="bg-[#ef8156] text-white leading-[38px] px-[14px] rounded">
          글쓰기
        </Link> */}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                제9회 동아시아농어업유산협의회 국제컨퍼런스
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.06.06
              </span>
            </div>
          </Link>
        </li>



        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>
      </ul>

      <div className="flex justify-center mt-[30px] gap-2">
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          이전
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border rounded bg-[#ef8156] text-white">
          1
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          2
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          다음
        </a>
      </div>

    <hr className="my-[60px] border-[#E5E5E5]"/>


      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        영상
      </h3>

      <div className="flex gap-2 pb-[30px]">
        <button className="px-4 py-2 bg-[#222] text-white rounded">전체</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션1</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션2</button>
        <button className="px-4 py-2 bg-[#e4e4e4] text-[#555] hover:bg-[#F8F8F8] rounded">세션3</button>
      </div>
      <div className="flex justify-between items-center mb-4">

        {/* <Link
          to="/boardGallery/write"
          className="bg-[#ef8156] text-white leading-[38px] px-[14px] rounded">
          글쓰기
        </Link> */}
      </div>


      <ul className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] bg-opacity-30 flex items-center justify-center">
                <div className="w-20 h-20 bg-[rgba(255,255,255,.5)] bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded !text-[80px] text-gray-800 ml-1">arrow_right</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                제9회 동아시아농어업유산협의회 국제컨퍼런스
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.06.06
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] bg-opacity-30 flex items-center justify-center">
                <div className="w-20 h-20 bg-[rgba(255,255,255,.5)] bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded !text-[80px] text-gray-800 ml-1">arrow_right</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 사전등록 안내
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                운영팀 | 2025.06.01
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] bg-opacity-30 flex items-center justify-center">
                <div className="w-20 h-20 bg-[rgba(255,255,255,.5)] bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded !text-[80px] text-gray-800 ml-1">arrow_right</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 사진 예시
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                홍길동 | 2025.05.20
              </span>
            </div>
          </Link>
        </li>

        <li className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <Link to="#">
            <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img
                src="/src/assets/images/main1.jpg"
                alt="갤러리 이미지"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,.5)] bg-opacity-30 flex items-center justify-center">
                <div className="w-20 h-20 bg-[rgba(255,255,255,.5)] bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-rounded !text-[80px] text-gray-800 ml-1">arrow_right</span>
                </div>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <strong className="block text-[16px] font-[600] mb-2">
                행사 풍경
              </strong>
              <span className="text-xs text-gray-500 mb-1">
                관리자 | 2025.05.10
              </span>
            </div>
          </Link>
        </li>



      </ul>

      <div className="flex justify-center mt-[30px] gap-2">
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          이전
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border rounded bg-[#ef8156] text-white">
          1
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          2
        </a>
        <a
          href="#"
          className="px-3 py-[5px] border border-[#ccc] text-[#555] rounded bg-gray-100 hover:bg-gray-200">
          다음
        </a>
      </div>


    </div>
  );
}

export default HomePage;
