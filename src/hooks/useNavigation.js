import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useNavigation = () => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 페이지 타입 구분
  const getPageType = () => {
    if (location.pathname === "/") return "home";
    if (location.pathname.startsWith("/board")) return "board";
    return "sub";
  };

  const pageType = getPageType();
  const isHomePage = pageType === "home";
  const isBoardPage = pageType === "board";

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
      to: "/kiahs",
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
      if (link.to === "/") return false;
      if (link.to === location.pathname) return true;
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
      if (location.pathname === "/privacy") {
        subMenuTitle = "개인정보처리방침";
      } else if (location.pathname === "/nomail") {
        subMenuTitle = "이메일무단수집거부";
      }
    }
  }

  return {
    isLangMenuOpen,
    setIsLangMenuOpen,
    isMobileMenuOpen,
    toggleMobileMenu,
    toggleLangMenu,
    navLinks,
    subMenuTitle,
    subMenuLinks,
    location,
    pageType,
    isHomePage,
    isBoardPage,
  };
};