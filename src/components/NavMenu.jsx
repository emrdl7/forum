import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavMenu = ({ navLinks, isMobileMenuOpen, toggleMobileMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState([]);

  // 화면 크기 변경 시 모바일 메뉴 상태 초기화
  useEffect(() => {
    const handleResize = () => {
      // 데스크톱 크기로 변경되면 모바일 메뉴 상태 초기화
      if (window.innerWidth >= 768) {
        setExpandedMenus([]);
        // 모바일 메뉴가 열려있으면 닫기
        if (isMobileMenuOpen) {
          toggleMobileMenu();
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, toggleMobileMenu]);

  const toggleSubMenu = (index) => {
    setExpandedMenus(prev => {
      // 이미 열려있는 메뉴를 클릭한 경우 닫기
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      // 다른 메뉴를 클릭한 경우 기존 메뉴들 닫고 새 메뉴만 열기
      return [index];
    });
  };

  return (
    <nav
      className={`
        main-menu 
        ${
          isMobileMenuOpen
            ? "flex fixed inset-0 bg-white z-40 flex-col items-center justify-center text-center"
            : "hidden"
        } 
        md:flex  md:fixed md:left-[50%] md:top-[38px] md:ml-[-340px] md:z-[990] md:flex-row md:justify-center md:items-center md:text-left md:py-3
        transition-transform duration-300 ease-in-out
        ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
      `}>
      <ul className="flex flex-col space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-14 md:text-base">
        {navLinks.map((link, index) => (
          <li key={link.strong} className="md:relative flex flex-col md:flex-row md:items-center md:justify-center">
            <Link
              to={link.to}
              className="block py-2 md:py-0 text-left w-full text-center md:text-left"
              onClick={(e) => {
                // 서브메뉴가 있는 경우 기본 동작 방지하고 서브메뉴 토글
                if (link.subLinks) {
                  e.preventDefault();
                  toggleSubMenu(index);
                } else {
                  // 모바일에서만 메뉴 닫기
                  if (isMobileMenuOpen) {
                    toggleMobileMenu();
                  }
                }
              }}
            >
              <strong className="block font-[600] hover:text-[#ED6830] text-[24px] md:text-[24px] text-[#000] transition-colors duration-200">
                {link.strong}
              </strong>
              <span className="block text-[14px] text-[500] md:ml-1">
                {link.span}
              </span>
            </Link>
            
            {/* 서브메뉴 */}
            {link.subLinks && expandedMenus.includes(index) && (
              <ul className="static mt-4 space-y-3 bg-gray-50 rounded-lg p-5 md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 md:mt-2 md:bg-white md:shadow-lg md:rounded-lg md:py-5 md:min-w-[200px] md:z-[1000] md:space-y-2 md:before:content-[''] md:before:absolute md:before:top-0 md:before:left-1/2 md:before:transform md:before:-translate-x-1/2 md:before:-translate-y-1 md:before:w-0 md:before:h-0 md:before:border-l-6 md:before:border-r-6 md:before:border-b-6 md:before:border-transparent md:before:border-b-white">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.name}>
                    <Link
                      to={subLink.to}
                      className="block py-2 text-[14px] md:px-2 md:py-1 text-[16px] text-[#222] break-keep whitespace-nowrap hover:text-[#ED6830] transition-colors duration-200 md:hover:bg-gray-50"
                      onClick={() => {
                        // 모바일에서만 메뉴 닫기
                        if (isMobileMenuOpen) {
                          toggleMobileMenu();
                        }
                        setExpandedMenus([]);
                      }}
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
