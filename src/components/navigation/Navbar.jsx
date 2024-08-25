import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import MobileNav from "./MobileNav";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(function () {
    function stickNav() {
      window.scrollY > 150 ? setStickyNav(true) : setStickyNav(false);
    }

    window.addEventListener("scroll", stickNav);

    return () => window.removeEventListener("scroll", stickNav);
  }, []);



  function handleToggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
      <nav
        className={`${
          stickyNav ? "sticky top-0 bg-gray-600" : "relative"
        } z-50 flex items-center justify-between gap-4 px-8 py-5`}
      >
        <Logo />

        <NavLinks styles="3xl:flex hidden gap-6 font-medium text-white" />

        <NavButtons
          onToggleNav={handleToggleNav}
        />
      </nav>

      <MobileNav isNavOpen={isNavOpen} onToggleNav={handleToggleNav} />

    </>
  );
}

export default Navigation;
