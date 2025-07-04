// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useState } from "react";
import HeritageModal from "../components/HeritageModal";

function HomePage() {
  const [selectedSession, setSelectedSession] = useState(null);

  const sessionData = [
    {
      title: "기조연설",
      time: "10:20–11:40",
      date: "9월 18일 (목)",
      materials: [
        { name: "기조연설 자료 1", url: "#" },
        { name: "기조연설 자료 2", url: "#" },
        { name: "기조연설 자료 3", url: "#" },
        { name: "기조연설 자료 4", url: "#" }
      ]
    },
    {
      title: "세션 I: 농어업유산 지역의 생태계 서비스 및 보전",
      time: "13:00–14:40",
      date: "9월 18일 (목)",
      materials: [
        { name: "세션 I 발표자료 1", url: "#" },
        { name: "세션 I 발표자료 2", url: "#" },
        { name: "세션 I 발표자료 3", url: "#" },
        { name: "세션 I 발표자료 4", url: "#" },
        { name: "세션 I 발표자료 5", url: "#" },
        { name: "세션 I 발표자료 6", url: "#" }
      ]
    },
    {
      title: "세션 II: 농업유산 제품의 인증, 브랜딩 및 홍보",
      time: "13:00–14:40",
      date: "9월 18일 (목)",
      materials: [
        { name: "세션 II 발표자료 1", url: "#" },
        { name: "세션 II 발표자료 2", url: "#" },
        { name: "세션 II 발표자료 3", url: "#" },
        { name: "세션 II 발표자료 4", url: "#" },
        { name: "세션 II 발표자료 5", url: "#" },
        { name: "세션 II 발표자료 6", url: "#" }
      ]
    },
    {
      title: "세션 III: 한중일 농어업유산 정책 비교 분석",
      time: "15:00–17:30",
      date: "9월 18일 (목)",
      materials: [
        { name: "세션 III 발표자료 1", url: "#" },
        { name: "세션 III 발표자료 2", url: "#" },
        { name: "세션 III 발표자료 3", url: "#" },
        { name: "세션 III 발표자료 4", url: "#" },
        { name: "세션 III 발표자료 5", url: "#" },
        { name: "세션 III 발표자료 6", url: "#" },
        { name: "세션 III 발표자료 7", url: "#" },
        { name: "세션 III 발표자료 8", url: "#" },
        { name: "세션 III 발표자료 9", url: "#" }
      ]
    },
    {
      title: "세션 IV: 농어업유산광 및 지자체 농어업유산 사례",
      time: "15:00–17:30",
      date: "9월 18일 (목)",
      materials: [
        { name: "세션 IV 발표자료 1", url: "#" },
        { name: "세션 IV 발표자료 2", url: "#" },
        { name: "세션 IV 발표자료 3", url: "#" },
        { name: "세션 IV 발표자료 4", url: "#" },
        { name: "세션 IV 발표자료 5", url: "#" },
        { name: "세션 IV 발표자료 6", url: "#" },
        { name: "세션 IV 발표자료 7", url: "#" },
        { name: "세션 IV 발표자료 8", url: "#" },
        { name: "세션 IV 발표자료 9", url: "#" }
      ]
    },
    {
      title: "기조발표",
      time: "09:00–10:20",
      date: "9월 19일 (금)",
      materials: [
        { name: "기조발표 자료 1", url: "#" },
        { name: "기조발표 자료 2", url: "#" },
        { name: "기조발표 자료 3", url: "#" },
        { name: "기조발표 자료 4", url: "#" }
      ]
    },
    {
      title: "세션 V: 후계세대 및 다양한 이해관계자 참여",
      time: "10:20–12:00",
      date: "9월 19일 (금)",
      materials: [
        { name: "세션 V 발표자료 1", url: "#" },
        { name: "세션 V 발표자료 2", url: "#" },
        { name: "세션 V 발표자료 3", url: "#" },
        { name: "세션 V 발표자료 4", url: "#" },
        { name: "세션 V 발표자료 5", url: "#" },
        { name: "세션 V 발표자료 6", url: "#" }
      ]
    },
    {
      title: "세션 VI: 어업 유산의 보전 및 관리",
      time: "10:20–12:00",
      date: "9월 19일 (금)",
      materials: [
        { name: "세션 VI 발표자료 1", url: "#" },
        { name: "세션 VI 발표자료 2", url: "#" },
        { name: "세션 VI 발표자료 3", url: "#" },
        { name: "세션 VI 발표자료 4", url: "#" },
        { name: "세션 VI 발표자료 5", url: "#" },
        { name: "세션 VI 발표자료 6", url: "#" }
      ]
    }
  ];

  const handleDownloadClick = (sessionIndex) => {
    setSelectedSession(sessionData[sessionIndex]);
  };

  return (
    <div className="container">


<h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        행사 일정표
      </h3>


<div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base min-w-[900px] border-t-[2px] border-t-[#222]">
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
                  <button onClick={() => handleDownloadClick(0)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
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
                  <button onClick={() => handleDownloadClick(1)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 II: 농업유산 제품의 인증, 브랜딩 및 홍보 (통역 제공)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button onClick={() => handleDownloadClick(2)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
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
                  <button onClick={() => handleDownloadClick(3)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 IV: 농어업유산광 및 지자체 농어업유산 사례 (통역 제공)<br />(발표 9건, 각 15분 및 토론 15분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button onClick={() => handleDownloadClick(4)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
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
                  <button onClick={() => handleDownloadClick(5)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center" rowSpan="2">10:20–12:00</td>
                <td className="border border-gray-300 p-2">세션 V: 후계세대 및 다양한 이해관계자 참여 (영어 전용)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">한라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button onClick={() => handleDownloadClick(6)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">세션 VI: 어업 유산의 보전 및 관리 (통역 제공)<br />(발표 6건, 각 15분 및 토론 10분)</td>
                <td className="border border-gray-300 p-2 text-center">사라홀</td>
                <td className="border border-gray-300 p-2 text-center">
                  <button onClick={() => handleDownloadClick(7)} className="text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[40px] pr-[10px] relative cursor-pointer">
                  <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2">download</span> 다운로드</button>
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
        {selectedSession && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-[1000] p-4">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
              <button
                onClick={() => setSelectedSession(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer">
                <span className="material-symbols-rounded text-2xl">close</span>
              </button>
              <h3 className="text-xl font-semibold mb-2">{selectedSession.title}</h3>
              <div className="mb-6 text-[15px]] text-[#222] bg-[#efefef] p-[20px] rounded-[6px] text-center">{selectedSession.date}. {selectedSession.time}</div>

              <div className="mb-2 font-semibold">발표자료</div>
              <ul className="mb-4 space-y-3 border-t-[2px]">
                {selectedSession.materials.map((mat, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 border-b-[1px] border-gray-200 m-0">
                    <span className="text-[#222] font-medium">{mat.name}</span>
                    <a href={mat.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white text-[14px] bg-[#222] p-[5px] rounded-[5px] pl-[35px] pr-[12px] relative cursor-pointer hover:bg-[#333]">
                      <span className="material-symbols-rounded absolute left-[10px] top-1/2 -translate-y-1/2 text-base">download</span> 다운로드
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedSession(null)}
                className="mt-2 bg-[#ED6830] text-white px-4 py-2 rounded hover:bg-[#d85720] w-full cursor-pointer">
                닫기
              </button>
            </div>
          </div>
        )}
    </div>
  );
}

export default HomePage;
