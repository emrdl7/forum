import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-[30px] border-t border-solid border-[#ccc] text-[#555] md:py-[50px]">
    <div className="container relative text-center md:text-left">
      <strong className="block text-[16px] md:text-[20px] text-[600] mb-[10px]">
        제9회 <span className="block md:inline">동아시아농어업유산협의회</span>{" "}
        국제 컨퍼런스
      </strong>

      <div className="center mb-[20px] text-[14px] md:absolute md:right-[15px] md:top-0 md:text-[16px] md:font-[600]">
        <Link to="#" className="block md:inline-block">
          개인정보처리방침
        </Link>
        <Link to="#" className="block md:inline-block md:ml-[20px]">
          이메일무단수집거부
        </Link>
      </div>

      <address className="text-[14px]">
        <span className="block md:inline">Tel. +82 00-000-0000</span>
        <span className="block md:inline">E-mail. 00000@0000.00.00</span>
      </address>

      <p className="mt-[30px] text-[14px]">
        <span className="block md:inline">
          ⓒ 제9회 동아시아농어업유산협회의 국제 컨퍼런스.
        </span>
        <span className="block md:inline">All Rights Reserved</span>
      </p>
    </div>
  </footer>
);

export default Footer;
