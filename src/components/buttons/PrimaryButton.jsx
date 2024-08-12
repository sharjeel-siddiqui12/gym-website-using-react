import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function PrimaryButton({ to = "/", borderColor = "gray", children }) {
  return (
    <Link
      to={to}
      className={`focus relative inline-flex items-center gap-1.5 bg-gray-50 px-8 py-4 text-sm font-bold uppercase before:absolute before:left-3 before:top-[-12px] before:z-[-1] before:h-full before:w-full before:border before:border-solid before:transition-all before:duration-500 hover:before:translate-x-[-12px] hover:before:translate-y-[12px] ${
        borderColor === "white"
          ? "before:border-gray-100/50"
          : "before:border-gray-400/50"
      }`}
    >
      {children}
      <FaArrowRight className="h-auto w-3.5 text-red" />
    </Link>
  );
}

export default PrimaryButton;
