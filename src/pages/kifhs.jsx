// src/pages/HomePage.jsx
import { useState } from "react";
import HeritageModal from "../components/HeritageModal"; // 모달 컴포넌트 임포트
function HomePage() {
  const [selectedHeritage, setSelectedHeritage] = useState(null);

  const nationalHeritageData = [
    {
      no: "1",
      year: "2013",
      title: "청산도 구들장 논 농업",
      area: "전남 완도군 청산면 부흥리 외 2개리(5㏊)",
      feature:
        "크고 작은 돌이 많고 물빠짐이 심한 척박한 자연환경을 극복하기 위해 한국의 전통온돌 방식인 구들장을 논바닥 밑에 설치하여 논의 물 관리를 할 수 있도록 관개기술을 발달시켰으며 현재에도 구들장논에서 식량자원인 쌀, 봄동, 마늘 등을 재배하고 있음",
    },
    {
      no: "2",
      year: "2013",
      title: "제주 밭담 농업",
      area: "제주 전역(542㏊(담 길이 22,108㎞))",
      feature:
        "제주도의 섬사람들은 토양에서 골라낸 돌을 이용하여 22,000㎞가 넘는 밭담을 쌓아 바람과 토양유실을 막는 기재로 활용했고 생물종 다양성과 농업문화를 보존하고 있음",
    },
    {
      no: "3",
      year: "2014",
      title: "구례 산수유 농업",
      area: "전남 구례군 산동면 일대(228㏊)",
      feature:
        "경작지가 부족한 지리산의 산간지역(경작면적 전체의 11.3%)에서 생계유지를 위해 약 1천년 전인 11세기 경부터 집 주변, 산 구릉지, 마을 어귀, 개울가 등에 약 228ha의 산수유를 재배하였으며, 이는 돌담과 어우러져 독특한 경관 및 전통문화를 형성하고 있음",
    },
    {
      no: "4",
      year: "2014",
      title: "담양 대나무밭 농업",
      area: "전남 담양군 담양읍 삼다리, 만성리 일원(36.2㏊)",
      feature:
        "전국 대나무 재배면적의 26%가 담양지역에 분포하며, 대부분의 농경지 주변에 식재되어 생물다양성 및 독특한 경관을 형성하고 있음",
    },
    {
      no: "5",
      year: "2015",
      title: "금산 전통인삼 농업",
      area: "충남 금산군 금성면 양전리 등 14개리(297㏊)",
      feature:
        "1,500년 전부터 산삼씨를 심어 인삼을 재배하기 시작하여, 오랜 인삼 재배역사와 더불어 전통적인 밭 재배에서 인삼 연작피해 방지와 다수확재배를 위한 논 재배와 직파재배 등 다양한 인삼재배기술 및 가공기술이 발달하였고, 국내 인삼유통의 대표지역으로 인삼산업이 발달하였음",
    },
    {
      no: "6",
      year: "2015",
      title: "하동 전통차농업",
      area: "경남 하동군 화개면 일대(597.8㏊)",
      feature:
        "약 1,000년 전부터 경작지가 부족한 지리산 산간지역에서 생계유지를 위해 산비탈에 차밭을 조성하여 독특한 경관과 지역문화를 형성하였으며 차 재배와 가공기술이 발달되었음",
    },
    {
      no: "7",
      year: "2016",
      title: "울진 금강송 산지농업",
      area: "경북 울진군 북면, 금강송면 일원(14,188㏊)",
      feature:
        "수령 10~530년 이상의 소나무로 이루어진 금강송림은 1680년 왕실의 황장봉산으로 지정하여 지역주민이 송계와 산림계를 통해 숲을 관리해왔으며 송이, 복령, 산나물, 각종 약초 등을 채취하여 생계를 유지해오고 있음",
    },
    {
      no: "8",
      year: "2017",
      title: "부안 유유동 양잠농업",
      area: "전북 부안군 변산면 마포리 일대(58.9㏊)",
      feature:
        "조선시대(1861년)부터 뽕 재배, 누에 생산 전통기술을 보전·계승하고 있으며, 뽕나무식재를 위한 전통적 상전(桑田)조성 기법, 농가주택의 부속사 형태의 전통잠실 등 농업기술이 발달되었음",
    },
    {
      no: "9",
      year: "2017",
      title: "울릉 화산섬 밭농업",
      area: "경북 울릉군(72.86㎢)",
      feature:
        "바다에 의해 고립된 화산섬인 울릉도의 척박한 급경사지 지형에 적응하면서 산채 등을 재배하는 계단 형식의 밭 조성으로 생계를 유지하며 밭농업시스템이 발달하였음",
    },
    {
      no: "10",
      year: "2018",
      title: "의성 전통수리 농업시스템",
      area: "경북 의성군 금성면 · 가음면 · 춘산면 · 사곡면 일원(256.65㎢)",
      feature:
        "화산지역이자 최소우지역에서 불리한 환경을 극복하기 위해 고대국가인 조문국 시대부터 약 2,000여 년이 넘는 시간 동안 지역주민들이 금성면 일대에 약 1,500여 개의 제언이 축조하였고 수리계와 못도감제도를 통해 관리하는 수리농업시스템이 현재까지 유지되고 있음",
    },
    {
      no: "11",
      year: "2018",
      title: "보성 전통차 농업시스템",
      area: "전남 보성군 일원(222.8㎢)",
      feature:
        "조선시대 이전부터 차가 재배되어 한국 녹차 생산량의 24.3%를 차지하고 있으며, 경사가 심한 산을 개간하여 등고선을 따라 계단식 전통 차밭이 발달하였음하고 있습니다.",
    },
    {
      no: "12",
      year: "2018",
      title: "장흥 발효차 청태전 농업시스템",
      area: "전남 장흥군 일원(93.1㎢)",
      feature:
        "장흥 청태전은 보림사에서 시작된 전통 제다문화와 독특한 야생차밭 경관, 봉차 풍습 등을 계승하며 지역 농가에 의해 명맥을 이어가는 유서 깊은 전통 발효차임",
    },
    {
      no: "13",
      year: "2019",
      title: "완주 생강 전통농업시스템",
      area: "전남 완주군 봉동읍 일원(2,252㎢)",
      feature:
        "봉동 생강은 500년 이상의 역사와 전통 저장방식을 간직한 한국 생강의 시원지로, 전통농법과 생강조합의 계승을 통해 지역 특산으로 발전해왔으며 생태적 가치도 함께 지닌 농업유산",
    },
    {
      no: "14",
      year: "2019",
      title: "고성 해안지역 둠벙 관개시스템",
      area: "경남 고성군 · 거류면 등 14개 읍 · 면(1.34㏊)",
      feature:
        "고성 해안지역의 둠벙은 18세기 이전부터 농업용수 확보를 위한 전통 관개시설로 활용되어 왔으며, 생태적·문화적 가치와 함께 농어업 경관의 핵심 요소로 기능하여 현재까지 조성·보전하고 있음",
    },
    {
      no: "15",
      year: "2019",
      title: "상주 전통 곶감농업",
      area: "경북 상주시 낙동면 등 4면·6개동 지역(34,799㎢)",
      feature:
        "상주 전통 곶감농업은 500년 넘게 감 접목과 천일건조 기술을 계승하며 곶감과 관련한 음식·제례문화까지 이어온 농업유산으로, 지역경제와 생태환경에 기여하는 중요한 전통농업",
    },
    {
      no: "16",
      year: "2020",
      title: "강진 연방죽 생태수로농업",
      area: "전남 강진군 병영면 일원(5,508㏊)",
      feature:
        "강진의 연방죽과 둠벙은 물 부족 속에서 생활·농업·생태를 아우르는 자원으로 기능하며, 전통적 수자원 활용과 공동체 문화, 생물다양성 보전에 기여해온 다기능 농업유산임",
    },
    {
      no: "17",
      year: "2022",
      title: "창원 독뫼 감 농업",
      area: "경남 창원시 동읍, 북면, 대산면 일원(794㏊)",
      feature:
        "2100년 전부터 시작된 감 재배 전통과 구릉지 활용, 접붙이기·시비법 등의 기술을 계승하며 단감 중심의 과수농업과 마을 제의를 함께 이어온 농업시스템임",
    },
    {
      no: "18",
      year: "2022",
      title: "서천 한산모시 전통농업",
      area: "충남 서천군 한산면, 비인면 등 6개 면(23,900㏊)",
      feature:
        "고려시대부터 현재까지 전승․발전돼 온 고유 농업기술로서 100% 수작업으로 진행되는 모시 재배부터 모시짜기 전 과정을 포함하며 산림을 방풍으로 이용해 모시풀을 재배해 현재까지 주민 생계유지에 중요한 역할을 해오고 있음",
    },
    {
      no: "19",
      year: "2024",
      title: "청양구기자 전통농업",
      area: "충남 청양군 청양읍 등 4개 핵심지역(60.9㏊)",
      feature:
        "조선시대부터 청양 지역에 계승되어 재래종 및 국내외 구기자 종다양성이 보호·계승되고 있으며 오랜 기간 산촌마을의 생계유지 소득원으로 기여하고 있음",
    },
  ];

  return (
    <div className="container">
      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        제도의 개념 및 도입배경
      </h3>

      <div className="text-[14px] md:text-[18px] md:leading-[32px] mb-[60px] md:mb-[100px]">
        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          국가중요어업유산의 개념
        </h4>

        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            오랜 기간 동안 형성·진화해 온 전승할 만한 가치가 있는 전통적
            어업활동 시스템과 그 결과로 나타난 어촌 경관·문화 등
          </li>
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            모든 유·무형의 자원을 통칭함
          </li>
        </ul>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          도입배경
        </h4>

        <ul className="mb-[40px]">
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            사라져가는 어촌의 고유한 문화를 발굴하여 어촌 방문객 증대 및 지역
            경제 활성화 도모를 위해 국가중요어업유산제도 사업을 추진함
          </li>
          <li className="relative pl-[20px] mb-[14px] before:block before:w-[6px] before:h-[6px] before:rounded-[50%] before:bg-[#999] before:absolute before:left-0 before:top-[10px] break-keep">
            근거법령 : 농어업인의 삶의 질 향상 및 농어촌지역 개발 촉진에 관한
            특별법 제30조3(국가중요어업유산의 보전·활용)지정기준
          </li>
        </ul>
      </div>

      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        지정기준 및 절차
      </h3>

      <div className="text-[14px] md:text-[18px] md:leading-[32px] mb-[60px] md:mb-[100px]">
        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          지정기준
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base min-w-[760px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2 text-center">구분</th>
                <th className="border border-gray-300 p-2 text-center">항목</th>
                <th className="border border-gray-300 p-2 text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-medium text-center" rowSpan="5">유산의 특징</td>
                <td className="border border-gray-300 p-2 text-center">수산물 생산</td>
                <td className="border border-gray-300 p-2">
                  • 수산물을 생산하거나 주민 생계수단으로서 역할<br />
                  • 생산물의 국민 식량수단으로의 활용정도
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">생물 다양성</td>
                <td className="border border-gray-300 p-2">
                  • 생물다양성과 생태계 기능 보존·증진
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">지식체계</td>
                <td className="border border-gray-300 p-2">
                  • 어업유산의 지식체계 및 기술 보유<br />
                  • 어업유산의 보호‧보전을 위한 관리 기술
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">전통문화</td>
                <td className="border border-gray-300 p-2">
                  • 어업유산 관련 문화·의식 형성<br />
                  • 세대를 잇는 어업유산 활용 기술의 전수
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">경관형성</td>
                <td className="border border-gray-300 p-2">
                  • 아름답거나 현저한 경관 형성<br />
                  • 주변 어촌마을 및 자연환경과 어업유산의 조화
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium text-center" colSpan="2">역사성</td>
                <td className="border border-gray-300 p-2">
                  • 60년 이상 경과 또는 이에 준하는 역사성<br />
                  • 미래의 존속 가능하고 존속할 만한 가치여부
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-medium text-center" rowSpan="4">지역성</td>
                <td className="border border-gray-300 p-2 text-center">지자체 정책</td>
                <td className="border border-gray-300 p-2">
                  • 지방자치단체의 보전·관리계획(Action plan) 수립 등 정책적 지원<br />
                  • 지방자치단체의 유지관리를 위한 조례 제정 등
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">인식도</td>
                <td className="border border-gray-300 p-2">
                  • 해당주민의 어업유산에 대한 인지도 등<br />
                  • 어업유산에 대한 해당주민들의 자부심과 자긍심 등
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">지속가능성</td>
                <td className="border border-gray-300 p-2">
                  • 향후 어업활동 요소로의 활용가능성<br />
                  • 어업 외 지역 활성화 요소로 활용 가능성
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 text-center">가치제고</td>
                <td className="border border-gray-300 p-2">
                  사후관리 및 보존관리계획 수립, 타당성여부
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        국가중요농업유산의 지정 현황 (총19개소)
      </h3>


      <div className="mb-8 bg-[url('assets/images/map03.svg')] bg-[] bg-no-repeat bg-center bg-[length:320px_auto] pt-[270px] text-[0px]  md:bg-[length:1014px_auto] md:pt-[840px]">
            지도
      </div>


      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nationalHeritageData.map((item) => (
          <li
            key={item.no}
            className="transition overflow-hidden flex flex-col">
            <button
              className="w-full text-left"
              onClick={() => setSelectedHeritage(item)}>
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <img
                  src={`/src/assets/images/national-heritage/nh-${item.no}.jpg`} // 이미지 경로 규칙 예시
                  alt={item.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null; // 무한 루프 방지
                    e.target.src = "/src/assets/images/main1.jpg"; // 기본 이미지
                  }}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <strong className="block text-[16px] font-medium mb-2 text-center">
                  {item.title} ({item.year})
                </strong>
              </div>
            </button>
          </li>
        ))}
      </ul>
      {selectedHeritage && (
        <HeritageModal
          item={selectedHeritage}
          onClose={() => setSelectedHeritage(null)}
        />
      )}
    </div>
  );
}

export default HomePage;
