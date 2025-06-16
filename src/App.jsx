// src/App.jsx

import { useState } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";

import About from "./pages/about"; //행사소개
import Organizer from "./pages/organizer"; //주최/주관/후원
import Symbol from "./pages/symbol"; //행사 Symbol
import Contact from "./pages/contact"; //행사문의

import Giahs from "./pages/giahs";
import Kiahs from "./pages/kiahs";
import Kifhs from "./pages/kifhs";

import Schedule from "./pages/schedule";
import Presentations from "./pages/presentations";
import Gallery from "./pages/gallery";

import Stay from "./pages/stay";
import Transportation from "./pages/transportation";
import Attractions from "./pages/attractions";
import Festival from "./pages/festival";

import Privacy from "./pages/privacy";
import Nomail from "./pages/nomail";

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
    {
      to: "/",
      strong: "홈",
      span: "HOME",
    },
    {
      to: "/about",
      strong: "행사소개",
      span: "About ERAHS",
      subLinks: [
        { to: "/about", name: "행사소개" },
        { to: "/organizer", name: "주최/주관/후원" },
        { to: "/symbol", name: "행사 Symbol" },
        { to: "/contact", name: "행사문의" },
      ],
    },
    {
      to: "/giahs",
      strong: "한국의 농어업유산",
      span: "KIAHS of Korea",
      subLinks: [
        { to: "/kiahs", name: "한국의 GIAHS" },
        { to: "/giahs", name: "한국의 국가중요농업유산" },
        { to: "/kifhs", name: "한국의 국가중요어업유산" },
      ],
    },
    {
      to: "/schedule",
      strong: "행사 프로그램",
      span: "Program",
      subLinks: [
        { to: "/schedule", name: "행사 일정표" },
        { to: "/presentations", name: "발표자료" },
        { to: "/gallery", name: "사진·영상" },
      ],
    },
    {
      to: "/stay",
      strong: "제주관광",
      span: "Visit Jeju",
      subLinks: [
        { to: "/stay", name: "행사 장소·숙박" },
        { to: "/transportation", name: "교통편" },
        { to: "/attractions", name: "제주 관광" },
        { to: "/festival", name: "해녀축제" },
      ],
    },
  ];

  let subMenuTitle = "";
  let subMenuLinks = undefined;

  if (location.pathname !== "/") {
    const parentLink = navLinks.find((link) => {
      if (link.to === "/") return false; // 홈 링크는 제외
      // 현재 경로가 이 링크의 to와 일치하는지 확인
      if (link.to === location.pathname) return true;
      // 현재 경로가 이 링크의 subLinks 중 하나와 일치하는지 확인
      if (
        link.subLinks &&
        link.subLinks.some((sub) => sub.to === location.pathname)
      )
        return true;
      return false;
    });

    if (parentLink) {
      subMenuTitle = parentLink.strong;
      subMenuLinks = parentLink.subLinks;
    } else {
      // parentLink를 찾지 못한 경우, 특정 경로에 대한 제목을 지정합니다.
      if (location.pathname === "/privacy") {
        subMenuTitle = "Privacy Policy";
      } else if (location.pathname === "/nomail") {
        subMenuTitle = "No Email Collection";
      }
      // 그 외의 경우 subMenuTitle은 ""로 유지되어 SubMenu 컴포넌트의 기본값을 사용합니다.
    }
  }

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

      {/* 홈 화면을 제외한 모든 페이지에 SubMenu 노출 */}
      {location.pathname !== "/" && (
        <SubMenu title={subMenuTitle} subLinks={subMenuLinks} />
      )}

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
        <Route path="organizer" element={<Organizer />} />
        <Route path="symbol" element={<Symbol />} />
        <Route path="contact" element={<Contact />} />

        <Route path="giahs" element={<Giahs />} />
        <Route path="kiahs" element={<Kiahs />} />
        <Route path="kifhs" element={<Kifhs />} />

        <Route path="schedule" element={<Schedule />} />
        <Route path="presentations" element={<Presentations />} />
        <Route path="gallery" element={<Gallery />} />

        <Route path="stay" element={<Stay />} />
        <Route path="transportation" element={<Transportation />} />
        <Route path="attractions" element={<Attractions />} />
        <Route path="festival" element={<Festival />} />

        <Route path="privacy" element={<Privacy />} />
        <Route path="nomail" element={<Nomail />} />

        <Route path="boardList" element={<BoardList />} />
        <Route path="boardGallery" element={<BoardGallery />} />
        <Route path="boardView" element={<BoardView />} />
        <Route path="boardWrite" element={<BoardWrite />} />
      </Route>
    </Routes>
  );
}

export default App;
