import { Link } from "react-router-dom";

function Copyright() {
  return (
    <div className="font-medium text-gray-300">
      <p className=" ">
        All Rights Reserved | &copy; <span>{new Date().getFullYear()}</span> CoreFit
      </p>
      <p>
        Designed by{" "}
        <Link
          to="https://sharjeel-siddiqui.vercel.app"
          target="_blank"
          className="focus text-red"
        >
          Sharjeel Siddiqui
        </Link>
      </p>
    </div>
  );
}

export default Copyright;
