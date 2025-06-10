import { Link } from "react-router-dom";

const SubMenu = () => (
  <div>
    <h3 className="bg-[#79A7C9] text-center py-[15px] font-[600] text-white text-[18px] md:h-[160px] md:text-[40px] md:pt-[36px]">
      About ERHAS
    </h3>
    <ul className="container flex overflow-x-auto whitespace-nowrap bg-white shadow-md !mb-[40px] md:!px-0 md:w-[1180px] md:shadow-xl md:relative md:top-[-46px] md:!mb-[64px]">
      <li className="flex-shrink-0 font-[600] text-center relative after:block after:absolute after:right-0  after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[14px] after:bg-[#ccc] md:flex-[1_1_auto] md:text-[20px] before:block before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[5px] before:bg-[#000]">
        <Link to="" className="block px-5 py-3 md:py-[30px]">
          행사소개
        </Link>
      </li>
      <li className="flex-shrink-0 font-[500] text-center relative after:block after:absolute after:right-0  after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[14px] after:bg-[#ccc] md:flex-[1_1_auto] md:text-[20px]">
        <Link to="" className="block px-5 py-3 md:py-[30px]">
          주최/주관/후원
        </Link>
      </li>
      <li className="flex-shrink-0 font-[500] text-center relative after:block after:absolute after:right-0  after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[14px] after:bg-[#ccc] md:flex-[1_1_auto] md:text-[20px]">
        <Link to="" className="block px-5 py-3 md:py-[30px]">
          행사 Symbol
        </Link>
      </li>
      <li className="flex-shrink-0 font-[500] text-center relative md:flex-[1_1_auto] md:text-[20px]">
        <Link to="" className="block px-5 py-3 md:py-[30px]">
          행사문의
        </Link>
      </li>
    </ul>
  </div>
);

export default SubMenu;
