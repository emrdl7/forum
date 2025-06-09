// src/App.jsx

import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Kiahs from "./pages/kiahs";
import Program from "./pages/program";
import Jeju from "./pages/jeju";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";

// 2. 공통 레이아웃 컴포넌트 (헤더, 푸터 등 모든 페이지에 나타날 요소)
const Layout = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
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

      <main className="">
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
      </Route>
    </Routes>
  );
}

export default App;
