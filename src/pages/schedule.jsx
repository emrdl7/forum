// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">


<h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        행사 일정표
      </h3>


<div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base min-w-[760px] border-t-[2px] border-t-[#222]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-center">일자</th>
                <th className="border border-gray-300 p-2 text-center">시간</th>
                <th className="border border-gray-300 p-2 text-center">내용</th>
                <th className="border border-gray-300 p-2 text-center">장소</th>
                <th className="border border-gray-300 p-2 text-center">발표자료</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="2">9월 17일 (수)</td>
                <td className="border border-gray-300 p-2 text-center">10:00–22:00</td>
                <td className="border border-gray-300 p-2">참가자 도착, 등록 및 호텔 체크인</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">18:30–20:30</td>
                <td className="border border-gray-300 p-2">VIP 만찬</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="10">9월 18일 (목)</td>
                <td className="border border-gray-300 p-2 text-center">09:30–10:20</td>
                <td className="border border-gray-300 p-2">개회식 (연사 6명, 각 5분), 단체 사진 촬영</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">10:20–11:40</td>
                <td className="border border-gray-300 p-2">기조연설 (연사 4명, 각 20분)</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">11:40–13:00</td>
                <td className="border border-gray-300 p-2">점심 식사 및 포스터 세션</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center" rowSpan="2">13:00–14:40</td>
                <td className="border border-gray-300 p-2">세션 I: 농어업유산 지역의 생태계 서비스 및 보전 (영어 전용)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 II: 농업유산 제품의 인증, 브랜딩 및 홍보 (통역 제공)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">14:40–15:00</td>
                <td className="border border-gray-300 p-2">티 브레이크</td>
                <td className="border border-gray-300 p-2 text-center">일출홀</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center" rowSpan="2">15:00–17:30</td>
                <td className="border border-gray-300 p-2">세션 III: 한중일 농어업유산 정책 비교 분석 (영어 전용)<br />(발표 9건, 각 15분 및 토론 15분)</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 IV: 농어업유산광 및 지자체 농어업유산 사례 (통역 제공)<br />(발표 9건, 각 15분 및 토론 15분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">17:30–18:00</td>
                <td className="border border-gray-300 p-2">티 브레이크 및 포스터 세션</td>
                <td className="border border-gray-300 p-2 text-center">일출홀</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">18:00–20:00</td>
                <td className="border border-gray-300 p-2">환영 만찬</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="6">9월 19일 (금)</td>
                <td className="border border-gray-300 p-2 text-center">09:00–10:20</td>
                <td className="border border-gray-300 p-2">기조발표 (연사 4명, 각 20분)<br />- 한국 농림축산식품부, 한국 해양수산부, 중국 농업농촌부, 일본 농림수산성</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center" rowSpan="2">10:20–12:00</td>
                <td className="border border-gray-300 p-2">세션 V: 후계세대 및 다양한 이해관계자 참여 (영어 전용)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 VI: 어업 유산의 보전 및 관리 (통역 제공)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <a href="" className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative">
                  <span class="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">12:00–12:30</td>
                <td className="border border-gray-300 p-2">폐회식</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">12:30–18:30</td>
                <td className="border border-gray-300 p-2">점심 식사 및 현장 견학 (제주 밭담 농업유산 및 해녀 어업유산)</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">18:30–20:00</td>
                <td className="border border-gray-300 p-2">네트워킹 만찬</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center font-medium" rowSpan="2">9월 20일 (토)</td>
                <td className="border border-gray-300 p-2 text-center">09:30–10:30</td>
                <td className="border border-gray-300 p-2">제19차 동아시아 농어업유산협의회 운영위원회 (해당 위원)</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">10:30–</td>
                <td className="border border-gray-300 p-2">참가자 출국</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center font-medium">9월 20일 (토)</td>
                <td className="border border-gray-300 p-2 text-center">13:00–</td>
                <td className="border border-gray-300 p-2">제주 해녀축제 참가 (해외참가자 대상)</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
                <td className="border border-gray-300 p-2 text-center">-</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default HomePage;
