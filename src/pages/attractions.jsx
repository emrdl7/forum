// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useState } from "react";

const categories = ["전체", "문화역사", "쇼핑", "기타"];

const galleryData = [
  {
    id: 1,
    title: "관덕정",
    category: "문화역사",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/201908/16/3752d151-dad4-4199-8227-0e5d96e56d8e.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500057"
  },
  {
    id: 2,
    title: "제주목관아",
    category: "문화역사",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/202111/17/3fce48b8-e4a6-4f96-a67d-4b4f83af9cb5.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500551"
  },
  {
    id: 3,
    title: "제주향교",
    category: "문화역사",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/201804/30/4f853fe3-1a2c-4273-9b3d-628ba87a8e68.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500581"
  },
  {
    id: 4,
    title: "칠성로 쇼핑거리",
    category: "쇼핑",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/202206/10/f2563f62-3ab8-4337-bdfe-f191b67c9826.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500750"
  },
  {
    id: 5,
    title: "동문재래시장",
    category: "쇼핑",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/202410/16/88b98055-3370-4ed9-8a9f-8aee107fac08.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500745"
  },
  {
    id: 6,
    title: "탑동광장",
    category: "기타",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/3da0d2f9-f92e-4319-b4b5-bbe33485b30d.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500649"
  },
  {
    id: 7,
    title: "탐라문화광장",
    category: "기타",
    img: "https://api.cdn.visitjeju.net/photomng/imgpath/202110/29/2e2e2b7e-2e2e-4b7e-8e2e-2e2e2b7e2e2e.jpg",
    link: "https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500216"
  },
];

const categoryColor = {
  "문화역사": "#ED6830",
  "쇼핑": "#2D7FF9",
  "기타": "#2DC76D",
};

function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filtered =
    selectedCategory === "전체"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="container py-10">


<h3 className=" text-[24px] font-semibold mb-[30px] md:text-[32px] md:mb-[40px]">
        제주 관광
      </h3>

      {/* 카테고리 탭 */}
      <div className="flex gap-2 md:gap-4 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border font-semibold transition-colors text-sm md:text-base ${
              selectedCategory === cat
                ? "bg-[#222] text-white border-[#000]"
                : "bg-white text-[#222] border-[#ccc] hover:bg-[#f5f5f5]"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 갤러리 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-[#aaa] text-xl py-20">해당 카테고리의 관광지가 없습니다.</div>
        ) : (
          filtered.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col cursor-pointer "
              tabIndex={0}
            >
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/src/assets/images/main1.jpg";
                  }}
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <strong className="block text-[16px] font-medium mb-2 text-center">
                  {item.title}
                </strong>
                <span
                  className="text-xs text-center mb-2 font-semibold"
                  style={{ color: categoryColor[item.category] || "#888" }}
                >
                  {item.category}
                </span>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default Attractions;
