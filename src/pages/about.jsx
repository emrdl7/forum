// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <h3 className="font-black text-center text-[24px] mb-[30px] md:text-[42px] md:mb-[80px]">
        행사소개
      </h3>

      <div className="relative md:flex md:items-start md:gap-[100px] mb-[40px] md:mb-[90px]">
        <img
          src="/src/assets/images/poster.png"
          alt=""
          className="w-[310px] m-[0_auto_30px] md:w-[380px] drop-shadow-poster"></img>

        <dl className="md:grid md:grid-cols-[80px_1fr] md:gap-x-2 md:gap-y-[30px] break-keep">
          <dt className="text-[16px] mb-[10px] font-medium md:mb-0 md:text-[18px] md:leading-[32px]">
            행사명
          </dt>
          <dd className="text-[14px] mb-[20px] md:mb-0 md:text-[18px] md:leading-[32px]">
            제9차 동아시아농어업유산협의회(ERHAS) 국제 컨퍼런스
          </dd>
          <dt className="text-[16px] mb-[10px] font-medium md:mb-0 md:text-[18px] md:leading-[32px]">
            기간
          </dt>
          <dd className="text-[14px] mb-[20px] md:mb-0 md:text-[18px] md:leading-[32px]">
            2025년 9월 17일(목) ~ 20일(토)
            <span className="block text-[#ED6830]">
              ※ 해녀의 날(9.20.) 해녀 축제 연계
            </span>
          </dd>
          <dt className="text-[16px] mb-[10px] font-medium md:mb-0 md:text-[18px] md:leading-[32px]">
            주제
          </dt>
          <dd className="text-[14px] mb-[20px] md:mb-0 md:text-[18px] md:leading-[32px]">
            농어업유산의 지속가능한 보전과 지역공동체 복원
            <span className="block text-[#ED6830]">
              Sustainable Conservation of IAHS and Restoration of Community
            </span>
          </dd>
          <dt className="text-[16px] mb-[10px] font-medium md:mb-0 md:text-[18px] md:leading-[32px]">
            장소
          </dt>
          <dd className="text-[14px] mb-[20px] md:mb-0 md:text-[18px] md:leading-[32px]">
            제주 오리엔탈 호텔 (제주특별자치도 제주시 탑동로47)
          </dd>
        </dl>
      </div>

      <h3 className="font-black text-center text-[24px] mb-[30px] md:text-[42px] md:mb-[80px]">
        인사말
      </h3>

      <div className="text-[14px] md:text-[18px] md:leading-[32px]">
        2013년 창설된 동아시아농어업유산협의회는 세계농어업유산의 확산과 보전,
        활용을 위해 한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년
        창설된 동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을
        위해 한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다. 2013년 창설된
        동아시아농어업유산협의회는 세계농어업유산의 확산과 보전, 활용을 위해
        한중일 3국이 연계 협력하는 국제학술연구 조직이다.
        <strong className="block mt-[40px] text-center font-bold">
          동아시아농어업유산협의회 국제컨퍼런스 조직위원회
        </strong>
      </div>
    </div>
  );
}

export default HomePage;
