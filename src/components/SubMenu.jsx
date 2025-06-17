import { Link, useLocation } from "react-router-dom";

const SubMenu = ({ title, subLinks }) => {
  const location = useLocation();

  // title이 제공되지 않았거나 비어있을 경우, URL 경로에서 제목을 생성합니다.
  const getDisplayTitle = () => {
    if (title) {
      return title;
    }
    const pathParts = location.pathname.split("/").filter(Boolean);
    const lastPart = pathParts.pop();
    return lastPart
      ? lastPart.charAt(0).toUpperCase() + lastPart.slice(1)
      : "Menu"; // 기본값으로 "Menu"
  };

  const hasSubLinks = subLinks && subLinks.length > 0;

  return (
    <div className="mb-[40px] md:mb-[64px]">
      <h3
        className={`bg-[#79A7C9] text-center py-[15px] font-[600] text-white text-[18px] md:h-[160px] md:text-[40px] ${
          hasSubLinks ? "md:pt-[36px]" : "md:pt-[52px]"
        }`}>
        {getDisplayTitle()}
      </h3>
      {/* subLinks가 있을 때만 목록을 렌더링합니다. */}
      {hasSubLinks && (
        <ul className="container flex overflow-x-auto whitespace-nowrap bg-white shadow-md  md:!px-0 md:w-[1180px] md:shadow-xl md:relative md:top-[-46px]">
          {subLinks.map((link, index) => {
            const isActive = location.pathname === link.to;
            return (
              <li
                key={link.to}
                className={`flex-shrink-0 text-center relative md:flex-[1_1_auto] md:text-[20px] 
                ${
                  isActive
                    ? "font-[600] before:block before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[5px] before:bg-[#000]"
                    : "font-[500]"
                }
                ${
                  index < subLinks.length - 1
                    ? "after:block after:absolute after:right-0 after:top-[50%] after:translate-y-[-50%] after:w-[1px] after:h-[14px] after:bg-[#ccc]"
                    : ""
                }`}>
                <Link to={link.to} className="block px-5 py-3 md:py-[30px]">
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SubMenu;
