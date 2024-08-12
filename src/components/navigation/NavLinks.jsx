import { Link } from "react-router-dom";

const linkStyles = "hover:text-red focus:text-red focus";
// ring-offset-gray-600

function NavLinks({ onToggleNav, styles }) {
  return (
    <ul className={styles}>
      <li>
        <Link to="/" className={linkStyles} onClick={onToggleNav}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={linkStyles} onClick={onToggleNav}>
          About
        </Link>
      </li>
      <li>
        <Link to="/schedule" className={linkStyles} onClick={onToggleNav}>
          Schedule
        </Link>
      </li>
      <li>
        <Link to="/pricing" className={linkStyles} onClick={onToggleNav}>
          Pricing
        </Link>
      </li>
      <li>
        <Link to="/classes" className={linkStyles} onClick={onToggleNav}>
          Classes
        </Link>
      </li>
      <li>
        <Link to="/contact" className={linkStyles} onClick={onToggleNav}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
