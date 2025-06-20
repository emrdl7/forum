// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function HomePage() {
  const images = [
    "/src/assets/images/main0.jpg",
    "/src/assets/images/main1.jpg",
    "/src/assets/images/main2.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6초마다 전환 (천천히)
    return () => clearTimeout(timerRef.current);
  }, [currentIndex, images.length]);

  return (
    <div className="md:before:block md:before:w-[1170px] md:before:h-[1px] md:before:bg-[#fff] md:before:opacity-50 md:before:absolute md:before:top-[150px] md:before:z-[400] md:before:left-[50%] md:before:translate-x-[-50%]">
      {/* 크로스페이드 슬라이드 영역 */}
      <div className="relative overflow-hidden h-[56dvw]">
        <strong className="absolute z-[200] text-white font-[900] text-[60px] left-[40px] top-[100px] opacity-[60%] md:text-[200px] md:left-[50%] md:top-[50%] md:translate-y-[-50%] md:translate-x-[-540px]">
          ERAHS
        </strong>
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out`}
            style={{
              minHeight: "200px",
              opacity: currentIndex === idx ? 1 : 0,
              zIndex: currentIndex === idx ? 2 : 1,
              pointerEvents: "none",
            }}
          />
        ))}
      </div>

      <div className="links relative bg-[#ED6830] py-[30px] mb-[30px] md:pt-[54px] md:pb-[178px] md:mb-[230px]">
        <div className="mb-[30px] text-center text-white px-[15px] break-keep">
          <h3 className="mb-[20px]">
            <small className="block font-medium text-[14px] md:text-[28px]">
              제9회 동아시아농어업유산협의회 국제 컨퍼런스
            </small>
            <strong className="block font-black text-[18px md:text-[46px] text-shadow-y3">
              농어업유산의 지속가능한 보전과 지역공동체 복원
            </strong>
            <span className="block text-[12px] md:text-[22px]">
              Sustainable Preservation of Agri-Fisheries Heritage and
              Revitalization of Local Communities
            </span>
          </h3>

          <p className="block font-[600] text-[14px] md:text-[28px]">
            2025.09.17.(Wed) ~ 20.(Sat) 제주 오리엔탈호텔
          </p>
        </div>
        <div className="container flex flex-wrap justify-center gap-2 md:absolute md:bottom-[-120px] md:left-[50%] md:translate-x-[-50%] md:gap-6">
          <Link
            to="#"
            className="block flex-[1_1_40%] pb-[50px] bg-white bg-[url('assets/images/main-icon1.svg')] bg-[right_10px_bottom_10px] bg-[length:40px_auto] bg-no-repeat rounded-lg p-4 drop-shadow-main md:flex-[1_1_22%] md:h-[240px]  md:bg-[right_30px_bottom_30px] md:bg-[length:100px_auto] md:p-[40px]">
            <strong className="font-semibold block text-[14px] md:text-[24px]">
              행사소개
            </strong>
            <span className="block text-[12px] md:text-[20px]">Overview</span>
          </Link>
          <Link
            to="#"
            className="block flex-[1_1_40%] pb-[50px] bg-white bg-[url('assets/images/main-icon2.svg')] bg-[right_10px_bottom_10px] bg-[length:40px_auto] bg-no-repeat rounded-lg p-4 drop-shadow-main md:flex-[1_1_22%] md:h-[240px]  md:bg-[right_30px_bottom_30px] md:bg-[length:100px_auto] md:p-[40px]">
            <strong className="font-semibold block text-[14px] md:text-[24px]">
              프로그램
            </strong>
            <span className="block text-[12px] md:text-[20px]">Program</span>
          </Link>
          <Link
            to="#"
            className="block flex-[1_1_40%] pb-[50px] bg-white bg-[url('assets/images/main-icon3.svg')] bg-[right_10px_bottom_10px] bg-[length:40px_auto] bg-no-repeat rounded-lg p-4 drop-shadow-main md:flex-[1_1_22%] md:h-[240px]  md:bg-[right_30px_bottom_30px] md:bg-[length:100px_auto] md:p-[40px]">
            <strong className="font-semibold block text-[14px] md:text-[24px]">
              오시는길
            </strong>
            <span className="block text-[12px] md:text-[20px]">
              Venue & Stay
            </span>
          </Link>
          <Link
            to="#"
            className="block flex-[1_1_40%] pb-[50px] bg-white bg-[url('assets/images/main-icon4.svg')] bg-[right_10px_bottom_10px] bg-[length:40px_auto] bg-no-repeat rounded-lg p-4 drop-shadow-main md:flex-[1_1_22%] md:h-[240px]  md:bg-[right_30px_bottom_30px] md:bg-[length:100px_auto] md:p-[40px]">
            <strong className="font-semibold block text-[14px] md:text-[24px]">
              한국의 GIAHS
            </strong>
            <span className="block text-[12px] md:text-[20px]">
              GIAHS in Korea
            </span>
          </Link>
        </div>
      </div>

      <div className="my-[30px] md:my-[230px_126px]">
        <div className="container">
          <h3 className="text-center font-[600] mb-[20px] text-[18px] md:text-[42px] md:mb-[70px]">
            한국의 세계 중요농업유산
          </h3>

          <div className="bg-[url('assets/images/map01.svg')] bg-[] bg-no-repeat bg-center bg-[length:320px_auto] pt-[270px] text-[0px]  md:bg-[length:1014px_auto] md:pt-[840px]">
            지도
          </div>
        </div>
      </div>

      <div className="my-[30px] md:my-[126px_80px] bg-[#5A5655] py-[30px] md:py-[100px] text-white">
        <div className="container">
          <h3 className="font-[600] mb-[20px] text-[18px] md:text-[42px] md:mb-[70px]">
            GALLERY
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 break-keep">
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <Link to="/boardGallery/1">
                <p className="w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
                  <img
                    src="/src/assets/images/main1.jpg"
                    className="object-cover w-[100%] h-[100%]"
                    alt=""
                  />
                </p>
                <strong className="block text-[14px] font-[500] mb-[4px] md:text-[20px]">
                  제9회 동아시아농어업유산협의회 국제 컨퍼런스
                </strong>
                <span className="text-[12px] md:text-[16px]">2024-08-21</span>
              </Link>
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <Link to="/boardGallery/2">
                <p className="w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
                  <img
                    src="/src/assets/images/main1.jpg"
                    className="object-cover w-[100%] h-[100%]"
                    alt=""
                  />
                </p>
                <strong className="block text-[14px] font-[500] mb-[4px] md:text-[20px]">
                  제9회 동아시아농어업유산협의회 국제 컨퍼런스
                </strong>
                <span className="text-[12px] md:text-[16px]">2024-08-21</span>
              </Link>
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <Link to="/boardGallery/3">
                <p className="w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
                  <img
                    src="/src/assets/images/main1.jpg"
                    className="object-cover w-[100%] h-[100%]"
                    alt=""
                  />
                </p>
                <strong className="block text-[14px] font-[500] mb-[4px] md:text-[20px]">
                  제9회 동아시아농어업유산협의회 국제 컨퍼런스
                </strong>
                <span className="text-[12px] md:text-[16px]">2024-08-21</span>
              </Link>
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <Link to="/boardGallery/4">
                <p className="w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
                  <img
                    src="/src/assets/images/main1.jpg"
                    className="object-cover w-[100%] h-[100%]"
                    alt=""
                  />
                </p>
                <strong className="block text-[14px] font-[500] mb-[4px] md:text-[20px]">
                  제9회 동아시아농어업유산협의회 국제 컨퍼런스
                </strong>
                <span className="text-[12px] md:text-[16px]">2024-08-21</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[50px_0]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <h3 className="text-center font-[600] text-[18px] md:w-[150px]  md:text-[28px] md:text-left whitespace-nowrap">
              주최/주관
            </h3>

            <div className="flex flex-col md:flex-row items-center gap-10">
              <Link
                to=""
                className="block w-[234px] h-[34px] text-[0px] bg-[url('/src/assets/images/link1.svg')] bg-no-repeat bg-center bg-[length:100%_auto]"
                target="_blank">
                제주특별자치도
              </Link>
              <Link
                to=""
                className="text-[16px] text-center font-[500]"
                target="_blank">
                한국 동아시아농어업유산협의회
              </Link>
              <Link
                to=""
                className="block w-[208px] h-[54px] text-[0px] bg-[url('/src/assets/images/link3.svg')] bg-no-repeat bg-center bg-[length:auto_100%]"
                target="_blank">
                한국농어촌유산학회
              </Link>
              <Link
                to=""
                className="block w-[160px] h-[47px] text-[0px] bg-[url('/src/assets/images/link4.svg')] bg-no-repeat bg-center bg-[length:auto_100%]"
                target="_blank">
                제주관광공사
              </Link>
            </div>
          </div>

          {/* 후원 섹션도 동일한 패턴으로 수정 */}
          <div className="flex flex-col md:flex-row items-center gap-10 mt-[40px] md:mt-[80px]">
            <h3 className="text-center font-[600] text-[18px] md:w-[150px] md:text-[28px] md:text-left whitespace-nowrap">
              후원
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <Link
                to=""
                className="block mx-[auto] mb-[20px] w-[214px] h-[51px] text-[0px] bg-[url('/src/assets/images/link5.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0"
                target="_blank">
                농림축산식품부
              </Link>
              <Link
                to=""
                className="block mx-[auto] mb-[20px] w-[170px] h-[50px] text-[0px] bg-[url('/src/assets/images/link6.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0"
                target="_blank">
                해양수산부
              </Link>
              <Link
                to=""
                className="block mx-[auto] mb-[20px] w-[289px] h-[34px] text-[0px] bg-[url('/src/assets/images/link7.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0"
                target="_blank">
                한국농어촌공사
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
