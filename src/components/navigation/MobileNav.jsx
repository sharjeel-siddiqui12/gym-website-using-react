import NavLinks from "./NavLinks";
import CloseButton from "./CloseButton";

function MobileNav({ isNavOpen, onToggleNav }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-full justify-center bg-white transition-all duration-300 3xl:hidden ${
        isNavOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      }`}
    >
      <NavLinks
        onToggleNav={onToggleNav}
        styles="flex 3xl:hidden gap-6 font-semibold   text-lg text-gray-600 flex-col justify-center items-center"
      />

      <CloseButton onClick={onToggleNav} />
    </div>
  );
}

export default MobileNav;
