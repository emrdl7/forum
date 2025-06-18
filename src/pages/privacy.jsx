// src/pages/HomePage.jsx

import React from "react";

function Privacy() {
  return (
    <div className="container">

      <div className="text-[14px] md:text-[18px] md:leading-[32px] mb-[60px] md:mb-[100px]">
        <p className="mb-[40px] break-keep">
          제9회 ERAHS 국제 컨퍼런스 사무국(이하 '사무국')은 이용자의 개인정보 보호를 중요하게 여기며, 
          관련 법령에 따라 홈페이지를 운영하고 있습니다. 본 홈페이지는 개인정보를 수집하거나 저장하지 않습니다.
        </p>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          제1조 개인정보의 수집 및 이용
        </h4>
        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            본 홈페이지는 회원가입, 게시판, 온라인 등록 등의 기능을 제공하지 않으며, 
            이용자로부터 어떠한 개인정보도 수집하지 않습니다.
          </li>
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            단, 이용자가 자발적으로 이메일 또는 유선 연락을 통해 사무국에 문의할 경우, 
            해당 정보는 별도 저장되지 않으며 답변 목적 외에 사용되지 않습니다.
          </li>
        </ul>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          제2조 개인정보의 제3자 제공 및 위탁
        </h4>
        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            본 홈페이지는 이용자의 개인정보를 제3자에게 제공하거나 외부에 위탁하지 않습니다.
          </li>
        </ul>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          제3조 개인정보 자동 수집 장치의 설치·운영 및 거부
        </h4>
        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            본 홈페이지는 쿠키(cookie) 등 개인정보 자동 수집 장치를 사용하지 않습니다.
          </li>
        </ul>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          제4조 개인정보 보호책임자
        </h4>
        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            본 홈페이지는 개인정보를 수집하지 않으므로 별도의 보호책임자를 두고 있지 않습니다.
            행사 관련 문의는 아래 사무국으로 연락 주시기 바랍니다.
          </li>
        </ul>

        <div className="bg-[#fff] p-[30px] mb-[40px] border-[1px] border-[#E5E5E5]">
          <h5 className="text-[16px] font-semibold mb-[15px] md:text-[18px]">제9회 ERAHS 국제 컨퍼런스 사무국</h5>
          <p className="mb-[6px]">연락처: (전화번호 또는 이메일)</p>
          <p>운영기관: (기관명)</p>
        </div>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          제5조 고지의 의무
        </h4>
        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            본 방침은 2025년 7월 1일부터 시행됩니다.
          </li>
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            향후 홈페이지 구조 변경으로 개인정보 수집 항목이 생길 경우, 
            이를 즉시 고지하고 방침을 수정할 예정입니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Privacy;
