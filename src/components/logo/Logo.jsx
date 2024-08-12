import { Link } from "react-router-dom";
import logoWhite from "../../images/logo/logo.png";
import logoBlack from "../../images/logo/logo-footer.png";

function Logo({ size = "w-full", type = "white" }) {
  return (
    <Link to="/" className="focus inline-block">
      <img
        src={`${type === "black" ? logoBlack : logoWhite}`}
        alt="Corefit logo"
        className={`h-auto ${size}`}
      />
    </Link>
  );
}

export default Logo;
