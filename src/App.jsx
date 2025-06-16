// src/App.jsx

import { useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Kiahs from "./pages/kiahs";
import Program from "./pages/program";
import Jeju from "./pages/jeju";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import SubMenu from "./components/SubMenu";
import Footer from "./components/Footer";

import BoardList from "./pages/boardList";
import BoardGallery from "./pages/boardGallery";
import BoardView from "./pages/boardView";
import BoardWrite from "./pages/boardWrite";

const Layout = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsLangMenuOpen(false);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
    if (!isLangMenuOpen) setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: "/", strong: "홈", span: "HOME" },
    { to: "/about", strong: "행사소개", span: "About ERAHS" },
    { to: "/kiahs", strong: "한국의 농업유산", span: "KIAHS of Korea" },
    { to: "/program", strong: "행사 프로그램", span: "Program" },
    { to: "/jeju", strong: "제주관광", span: "Visit Jeju" },
  ];

  // 메인(홈) 화면이 아닐 때만 서브메뉴 노출
  const isNotMain = location.pathname !== "/";

  return (
    <div
      className={`min-h-screen flex flex-col bg-gray-50 font-sans ${
        location.pathname === "/" ? "" : " pt-[60px] md:pt-[150px]"
      }`}>
      <Header
        isLangMenuOpen={isLangMenuOpen}
        toggleLangMenu={toggleLangMenu}
        setIsLangMenuOpen={setIsLangMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <NavMenu
        navLinks={navLinks}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* 메인(홈) 제외 모든 화면에 서브메뉴 노출 */}
      {isNotMain && <SubMenu />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="kiahs" element={<Kiahs />} />
        <Route path="program" element={<Program />} />
        <Route path="jeju" element={<Jeju />} />

        <Route path="boardList" element={<BoardList />} />
        <Route path="boardGallery" element={<BoardGallery />} />
        <Route path="boardView" element={<BoardView />} />
        <Route path="boardWrite" element={<BoardWrite />} />
      </Route>
    </Routes>
  );
}

export default App;
