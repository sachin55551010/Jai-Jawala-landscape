import { IoMenu } from "react-icons/io5";
import { useDataStore } from "./store/useDataStore";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const { openMenu } = useDataStore();

  const handleMenuClickBtn = () => {
    openMenu();
  };
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 text-white">
      {/* Logo */}
      <div>Logo</div>

      {/* Desktop Menu (Centered) */}
      <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-8 font-semibold cursor-pointer">
        <Link to="/">
          <li className="tracking-widest text-shadow-[3px_3px_3px_rgba(0,0,0,1)]">
            Home
          </li>
        </Link>

        <li>About</li>

        <Link to="/services">
          <li>Service</li>
        </Link>

        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <IoMenu onClick={handleMenuClickBtn} size={40} />
      </div>
    </div>
  );
};
