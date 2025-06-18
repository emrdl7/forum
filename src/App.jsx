import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import SubMenu from "./components/SubMenu";
import Footer from "./components/Footer";
import { useNavigation } from "./hooks/useNavigation";
import { routes } from "./routes";

const Layout = () => {
  const {
    isLangMenuOpen,
    setIsLangMenuOpen,
    isMobileMenuOpen,
    toggleMobileMenu,
    toggleLangMenu,
    navLinks,
    subMenuTitle,
    subMenuLinks,
    location,
  } = useNavigation();

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
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;