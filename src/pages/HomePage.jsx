// src/pages/HomePage.jsx

import { Routes, Route, Link, Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="">
      <div className="bg-[url('assets/images/main1.jpg')] bg-cover bg-no-repeat bg-center h-[26dvh] md:h-[670px]"></div>

      <div className="links relative bg-[#79A7C9] py-[30px] mb-[30px] md:pt-[54px] md:pb-[178px] md:mb-[230px]">
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
            2025.09.17.(Wed) ~ 19.(Fri) 제주 오리엔탈호텔
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

          <div className="bg-[url('assets/images/main-map.svg')] bg-no-repeat bg-center bg-[length:320px_auto] pt-[190px] text-[0px]  md:bg-[length:880px_auto] md:pt-[512px]">
            지도
          </div>
        </div>
      </div>

      <div className="my-[30px] md:my-[126px_126px] bg-[#777] py-[30px] md:py-[100px] text-white">
        <div className="container">
          <h3 className="text-center font-[600] mb-[20px] text-[18px] md:text-[42px] md:mb-[70px]">
            GALLERY
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 break-keep">
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <p className=" w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
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
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <p className=" w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
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
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <p className=" w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
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
            </div>
            <div className="flex-[1_1_40%] mb-[20px] md:flex-[1_1_22%]">
              <p className=" w-[100%] h-[140px] mb-[16px] md:h-[240px] md:mb-[26px]">
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
            </div>
          </div>
        </div>
      </div>

      <div className="my-[50px] md:my-[0_130px]">
        <div className="container">
          <h3 className="text-center font-[600] mb-[20px] text-[18px] md:text-[36px] md:mb-[60px] md:text-left">
            주최/주관
          </h3>

          <div className="md:flex md:justify-start md:items-center">
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[234px] h-[34px] text-[0px] bg-[url('assets/images/link1.svg')] bg-no-repeat bg-center bg-[length:100%_auto] md:m-0 md:mr-[104px]"
              target="_blank">
              제주특별자치도
            </Link>
            <Link
              to=""
              className="block mx-[auto] my-[40px_20px]  text-[16px] text-center font-[500]  md:m-0 md:mr-[104px]"
              target="_blank">
              한국 동아시아농어업유산협의회
            </Link>
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[208px] h-[54px] text-[0px] bg-[url('assets/images/link3.svg')] bg-no-repeat bg-center bg-[length:auto_100%]  md:m-0 md:mr-[104px]"
              target="_blank">
              한국농어촌유산학회
            </Link>
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[160px] h-[47px] text-[0px] bg-[url('assets/images/link4.svg')] bg-no-repeat bg-center bg-[length:auto_100%]  md:m-0"
              target="_blank">
              제주관광공사
            </Link>
          </div>
          <h3 className="text-center font-[600] mt-[40px] mb-[20px] text-[18px] md:mt-[120px] md:text-[36px] md:mb-[60px] md:text-left">
            후원
          </h3>
          <div className="md:flex md:justify-start md:items-center">
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[214px] h-[51px] text-[0px] bg-[url('assets/images/link5.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0 md:mr-[104px]"
              target="_blank">
              농림축산식품부
            </Link>
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[170px] h-[50px] text-[0px] bg-[url('assets/images/link6.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0 md:mr-[104px]"
              target="_blank">
              해양수산부
            </Link>
            <Link
              to=""
              className="block mx-[auto] mb-[20px] w-[289px] h-[34px] text-[0px] bg-[url('assets/images/link7.svg')] bg-no-repeat bg-center bg-[length:100% auto]  md:m-0"
              target="_blank">
              한국농어촌공사
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
