// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (

    <div className="container">


    <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        행사 Symbol
      </h3>
      <div className="relative bg-white drop-shadow-link p-[20px] md:p-[40px] mb-[40px] md:mb-[90px] md:min-h-[300px] md:pl-[300px] border-t-[2px] bg-[url('/src/assets/images/grid.png')] bg-center ">
        <img
          src="/src/assets/images/logo.svg"
          alt=""
          className="w-[220px] m-[20px_auto_30px] md:absolute md:left-[40px] md:top-[40px] md:m-0"></img>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          심볼로고
        </h4>
        <p className="md:text-[20px] md:leading-[1.8]">
          <span className="md:block">제주해녀, 태왁, 밭담을 모티브로, </span>
          <span className="md:block">제주 고유의 농어업유산을 상징적으로 담아낸 로고</span>
      </p>


      
      </div>
      <div className="relative bg-white drop-shadow-link p-[20px] md:p-[40px] mb-[40px] md:mb-[90px] md:min-h-[390px] md:pl-[300px] border-t-[2px] bg-[url('/src/assets/images/grid.png')] bg-center ">
        <img
          src="/src/assets/images/poster.png"
          alt=""
          className="w-[220px] m-[20px_auto_30px] border-[#ccc] border-[1px] md:absolute md:left-[40px] md:top-[40px] md:m-0"></img>

<h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          키비주얼 포스터
        </h4>
        <p className="md:text-[20px] md:leading-[1.8] mb-[20px]">

          <span className="md:block">타이틀 로고의 배경에 ‘제주밭담’과 ‘제주해녀’의 이미지를 반영하여</span>
          <span className="md:block">제9회 컨퍼런스의 개최지의 정체성과 농어업유산의 상징성 시각적으로 표현</span>
           
        </p>

        <p className="md:text-[20px] md:leading-[1.8] mb-[20px]">
        여유와 풍요, 포용을 상징하는 키컬러 사용
        </p>

        <ul className="mb-[30px]">
          <li className="grid grid-cols-[auto_1fr] gap-[2px] mb-[10px] text-[18px] items-stretch">
            <strong className="bg-[#ED6830] p-[10px] rounded-[5px] text-white">주황색</strong>
            <span className="bg-[#f4f4f4] p-[10px] rounded-[5px] text-[#222]">수확의 계절 가을, 귤 등</span>
          </li>
          <li className="grid grid-cols-[auto_1fr]  gap-[2px] mb-[10px] text-[18px] items-stretch">
            <strong className="bg-[#91c04c] p-[10px] rounded-[5px] text-white">초록색</strong>
            <span className="bg-[#f4f4f4] p-[10px] rounded-[5px] text-[#222]">바람이 섞인 듯한 낮은 채도의 밭담들녘</span>
          </li>
        </ul>

<p className=" md:text-[20px] md:leading-[1.8]">
두 테마의 독립적인 인상을 부각하기 위해 컬러와 흑백조의 대비를 적용

</p>
<p className="md:text-[16px] md:leading-[1.8]">
- 태왁은 포인트 컬러인 오렌지로 강조하고, 
</p>
<p className="md:text-[16px] md:leading-[1.8]">
- 바다 배경은 제주돌담과 연계한 짙은 회색의 흑백 톤으로 표현하여 시각적 대비 극대화
 
</p>
      </div>
    </div>
  );
}

export default HomePage;
