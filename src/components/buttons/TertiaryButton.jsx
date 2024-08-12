import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function TertiaryButton({ to = "/", children }) {
  return (
    <Link
      to={to}
      className="focus text-md relative inline-flex items-center gap-1.5 bg-red px-8 py-4 font-bold uppercase text-white before:absolute before:left-3 before:top-[-12px] before:z-[-1] before:h-full before:w-full before:border before:border-solid before:border-gray-150/50 before:transition-all before:duration-500 hover:before:translate-x-[-12px] hover:before:translate-y-[12px] hover:before:border-red/50"
    >
      {children} <FaArrowRight className="h-auto w-3.5" />
    </Link>
  );
}

export default TertiaryButton;
