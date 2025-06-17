// src/pages/HomePage.jsx
import { useState } from "react";
import HeritageModal from "../components/HeritageModal"; // 모달 컴포넌트 임포트
function HomePage() {
  const [selectedHeritage, setSelectedHeritage] = useState(null);

  const giahsHeritageData = [
    {
      no: "1",
      year: "2014",
      title: "제주 밭담 농업",
      area: "제주 전역(542㏊(담 길이 22,108㎞))",
      feature:
        "제주도의 섬사람들은 토양에서 골라낸 돌을 이용하여 22,000㎞가 넘는 밭담을 쌓아 바람과 토양유실을 막는 기재로 활용했고 생물종 다양성과 농업문화를 보존하고 있음",
    },
    {
      no: "2",
      year: "2014",
      title: "청산도 구들장 논 농업",
      area: "전남 완도군 청산면 부흥리 외 2개리(5㏊)",
      feature:
        "크고 작은 돌이 많고 물빠짐이 심한 척박한 자연환경을 극복하기 위해 한국의 전통온돌 방식인 구들장을 논바닥 밑에 설치하여 논의 물 관리를 할 수 있도록 관개기술을 발달시켰으며 현재에도 구들장논에서 식량자원인 쌀, 봄동, 마늘 등을 재배하고 있음",
    },
    {
      no: "3",
      year: "2017",
      title: "하동 전통차 농업",
      area: "경남 하동군 화개면 일대(597.8㏊)",
      feature:
        "약 1,000년 전부터 경작지가 부족한 지리산 산간지역에서 생계유지를 위해 산비탈에 차밭을 조성하여 독특한 경관과 지역문화를 형성하였으며 차 재배와 가공기술이 발달되었음",
    },
    {
      no: "4",
      year: "2018",
      title: "금산 전통 인삼 농업",
      area: "충남 금산군 금성면 양전리 등 14개리(297㏊)",
      feature:
        "1,500년 전부터 산삼씨를 심어 인삼을 재배하기 시작하여, 오랜 인삼 재배역사와 더불어 전통적인 밭 재배에서 인삼 연작피해 방지와 다수확재배를 위한 논 재배와 직파재배 등 다양한 인삼재배기술 및 가공기술이 발달하였고, 국내 인삼유통의 대표지역으로 인삼산업이 발달하였음",
    },
    {
      no: "5",
      year: "2020",
      title: "담양 대나무밭 농업",
      area: "전남 담양군 담양읍 삼다리, 만성리 일원(36.2㏊)",
      feature:
        "전국 대나무 재배면적의 26%가 담양지역에 분포하며, 대부분의 농경지 주변에 식재되어 생물다양성 및 독특한 경관을 형성하고 있음",
    },
    {
      no: "6",
      year: "2023",
      title: "하동·광양 섬진강 재첩 어업",
      area: "경남 하동군, 전남 광양시 섬진강 하류 일원(140ha)",
      feature:
        "서식환경이 잘 보존된 기수역에서 거랭이 등의 도구를 사용해서 재첩을 채취하는 어법",
    },
    {
      no: "7",
      year: "2023",
      title: "제주 해녀 어업",
      area: "제주도 전역(14,346㏊)",
      feature:
        "장치 없이 맨몸으로 잠수해 전복, 소라, 미역 등 해산물을 직업적으로 채취하는 전통적 어업방식으로 불턱, 해신당 등 세계적으로 희귀하고 독특한 문화적 가치 존재",
    },
  ];

  return (
    <div className="container">
      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        GIAHS 등장 배경
      </h3>

      <div className="text-[14px] md:text-[18px] md:leading-[32px] mb-[60px] md:mb-[100px]">
        <div className="md:flex md:gap-6">
          <div className="mb-8 md:mb-0 md:flex-1 bg-white rounded-[20px] shadow-2xl overflow-hidden border-[1px] border-[#ccc]">
            <h4 className="text-[18px] font-semibold md:text-[20px] text-slate-800 md:text-center bg-[#efefef] text-black p-[10px_15px]">
              전통지식과 해결책의 보고
            </h4>
            <ul className="space-y-4 p-6 break-keep">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  전통 농업 지식과 관행은 지속가능발전목표(2030 Agenda) 달성에
                  기여
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  현대의 농업·환경·사회 문제에 대한 대안적 해법을 제공
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 md:flex-1 bg-white rounded-[20px] shadow-2xl overflow-hidden border-[1px] border-[#ccc]">
            <h4 className="text-[18px] font-semibold md:text-[20px] text-slate-800 md:text-center bg-[#efefef] text-black p-[10px_15px]">
              지역 생계, 생태계, 문화 보전
            </h4>
            <ul className="space-y-4 p-6 break-keep">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  지속 불가능한 농업과 토지 이용으로 인한 식량안보 및 문화 가치
                  훼손에 대응
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  전통과 진화된 지식·기술을 바탕으로 자원·생물다양성·생태계를
                  효과적으로 관리
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>지역 주민의 창의성과 적응력의 산물로서 가치 보유</span>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0 md:flex-1 bg-white rounded-[20px] shadow-2xl overflow-hidden border-[1px] border-[#ccc]">
            <h4 className="text-[18px] font-semibold md:text-[20px]  text-slate-800 md:text-center bg-[#efefef] text-black p-[10px_15px] md:tracking-[-2px]">
              농업 혁신의 기반이자 문화다양성의 수호자
            </h4>
            <ul className="space-y-4 p-6 break-keep">
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>현대 농업 시스템에 대한 대안적 접근 모델 제시</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>미래 농업기술 발전의 토대가 되는 전통 시스템</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">-</span>
                <span>
                  전 세계 지역 공동체의 문화, 역사, 전통의 다양성 보전 역할 수행
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        GIAHS 지정기준 및 현황
      </h3>

      <div className="text-[14px] md:text-[18px] md:leading-[32px] mb-[60px] md:mb-[100px]">
        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          지정기준
        </h4>
        <dl className="mb-[30px] border-[1px] border-[#ccc] md:mb-[80px]">
          {[
            {
              icon: "food_bank",
              title: "식량 및 생계의 안정성(Food and livelihood security)",
              description:
                "지역공동체의 식량‧생계안정 기여, 공동체 내에서 공급과 교류가 이루어지는 자급자족 농업과 생계유지를 위한 다양한 농업",
            },
            {
              icon: "eco",
              title: "농업생물다양성(Agro-biodiversity)",
              description:
                "농업, 어업, 목축, 임업 등 식량 및 농업에 직․간접적으로 이용되는 다양한 동물, 식물, 미생물로 정의된 농업생물다양성과 유전자원 보유 여부",
            },
            {
              icon: "psychology",
              title:
                "지역 및 전통적 지식시스템(Local and Traditional Knowledge systems)",
              description:
                "농업, 어업 등 생업활동을 지원하는 생물종, 토지, 수자원과 자연 자원에 대한 독창적인 적응기술 및 관리시스템",
            },
            {
              icon: "groups",
              title:
                "문화, 가치체계 및 사회조직(Culture, value systems and social organizations)",
              description:
                "자원의 이용 및 접근에 대한 형평성을 보장하는 규범과 관행, 농업시스템의 역동적 보전에 기여하는 공동체조직",
            },
            {
              icon: "landscape",
              title:
                "육지경관 및 해양경관의 특징(Landscape and Seascape Features)",
              description:
                "인간과 환경의 상호작용을 통해 개발되었거나 안정화되면서 느리게 진화한 것처럼 보이는 육지경관이나 해양경관",
            },
          ].map((item, index, arr) => (
            <div
              key={item.title}
              className={`p-6 bg-white flex items-start md:p-[50px] ${
                index < arr.length - 1
                  ? "border-b-[1px] border-[#e4e4e4] border-dashed"
                  : ""
              }`}>
              <span className="material-symbols-rounded text-slate-500 mr-4 text-3xl shrink-0 mt-1 md:!text-[84px] md:mr-[40px]">
                {item.icon}
              </span>
              <div>
                <dt className="font-medium mb-2 md:text-[18px]">
                  {item.title}
                </dt>
                <dd className="text-[#555]">{item.description}</dd>
              </div>
            </div>
          ))}
        </dl>

        <h4 className="relative pl-4 text-[18px] font-semibold mb-[15px] before:absolute before:left-0 before:top-[50%] before:h-[22px] before:w-2 before:-translate-y-1/2 before:bg-[#ED6830] md:text-[24px] md:mb-[20px]">
          지정현황
        </h4>
        <ul className="pl-5 space-y-1 break-keep">
          <li>2025년 6월 기준 현재 28개국 89개소가 지정됨</li>
          <li>
            한국을 포함한 아시아․태평양 지역 61개소, 아프리카 4개소, 유럽과
            중앙아시아 10개소, 라틴아메리카 및 카리브해 6개소, 중동 및
            북아프리카 8개소가 지정
          </li>
        </ul>
      </div>

      <h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        한국의 GIAHS 지정 현황
      </h3>

      <div className="mb-8">
        {/* 일러스트 또는 관련 이미지를 여기에 추가할 수 있습니다. */}
        {/* 예: <img src="/src/assets/images/kiahs-illustration.png" alt="KIAHS 일러스트" className="w-full rounded-lg shadow-md" /> */}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {giahsHeritageData.map((item) => (
          <li
            key={item.no}
            className="transition overflow-hidden flex flex-col">
            <button
              className="w-full text-left"
              onClick={() => setSelectedHeritage(item)}>
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <img
                  src={`/src/assets/images/kiahs/kiahs-${item.no}.jpg`} // 이미지 경로 규칙 예시
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
