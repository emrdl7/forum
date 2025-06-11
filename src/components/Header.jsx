import { Link } from "react-router-dom";

const Header = ({
  isLangMenuOpen,
  toggleLangMenu,
  setIsLangMenuOpen,
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <header className=" bg-white shadow-md">
    <div className="container relative mx-auto flex items-center justify-between h-[60px] md:h-[150px] z-[600]">
      <h1 className="bg-[url('assets/images/logo.png')] bg-contain bg-no-repeat bg-center w-[70px] h-[70px] absolute left-[15px] top-[10px] md:w-[160px] md:h-[160px] md:top-[26px]">
        <Link to="/" className="block w-[100%] h-[100%] text-[0px]">
          ERAHS
        </Link>
      </h1>

      <div className="absolute right-[15px] top-[50%] translate-y-[-50%]">
        <button
          className="language-button md:hidden mr-[10px]"
          onClick={toggleLangMenu}
          aria-label="언어 선택 토글">
          <span className="material-symbols-rounded">language</span>
        </button>
        <div
          className={`
            ${isLangMenuOpen ? "block" : "hidden"} md:flex 
            absolute md:relative
            top-full left-0 md:top-auto md:left-auto md:right-auto 
            mt-1 md:mt-0 
            bg-white md:bg-transparent 
            shadow-lg md:shadow-none 
            rounded-md md:rounded-none 
            py-0 
            z-10 md:z-auto 
            md:items-center md:space-x-2
          `}>
          <button
            className="block md:inline px-4 py-2 md:p-0 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 text-[16px] md:mr-[16px] "
            onClick={() => {
              // 실제 언어 변경 로직 필요 (예: context, i18n 등)
              console.log("KOR selected");
              setIsLangMenuOpen(false);
            }}>
            KOR
          </button>
          <button
            className="block md:inline px-4 py-2 md:p-0 text-sm text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 text-[16px]"
            onClick={() => {
              // 실제 언어 변경 로직 필요 (예: context, i18n 등)
              console.log("ENG selected");
              setIsLangMenuOpen(false);
            }}>
            ENG
          </button>
        </div>
        {/* 모바일 메뉴 토글 버튼 */}
        <button
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}>
          <span className="material-symbols-rounded">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
