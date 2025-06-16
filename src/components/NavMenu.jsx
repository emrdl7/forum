import { Link } from "react-router-dom";

const NavMenu = ({ navLinks, isMobileMenuOpen, toggleMobileMenu }) => (
  <nav
    className={`
      main-menu 
      ${
        isMobileMenuOpen
          ? "flex fixed inset-0 bg-white z-40 flex-col items-center justify-center text-center"
          : "hidden"
      } 
      md:flex  md:absolute md:left-[50%] md:top-[38px] md:ml-[-340px] md:z-[990] md:flex-row md:justify-center md:items-center md:text-left md:py-3
      transition-transform duration-300 ease-in-out
      ${
        isMobileMenuOpen
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
      }
    `}>
    <ul className="flex flex-col space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-14 md:text-base">
      {navLinks.map((link) => (
        <li key={link.strong}>
          <Link
            to={link.to}
            className="block py-2 md:py-0"
            onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
            <strong className="block font-[600] hover:text-[#ED6830]  text-[24px] text-[#000]">
              {link.strong}
            </strong>
            <span className="block text-[14px] text-[500] md:ml-1">
              {link.span}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavMenu;
