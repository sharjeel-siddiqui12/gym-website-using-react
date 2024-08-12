import { FaXmark } from "react-icons/fa6";

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="focus text-red absolute right-9 top-8 z-50 h-8 w-8 cursor-pointer "
    >
      <FaXmark className="h-auto w-full" />
    </button>
  );
}

export default CloseButton;
