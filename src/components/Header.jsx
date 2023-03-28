import { Link } from "react-router-dom";
import Logo from "../assets/betterdata_logo.png";

const Header = () => {
  return (
    <header className="px-8 py-3 flex flex-col shadow-md gap-2 justify-between w-full items-center flex-wrap md:flex-row">
      <div className="w-24">
        <a href="/" className="hidden md:flex">
          <img src={Logo} alt="logo" className="w-full" />
        </a>
      </div>
      <input
        type="search"
        className="border px-3 min-w-[200px] py-2 border-purple-300 outline-none rounded-md caret-purple-400 sm:min-w-[300px]"
        placeholder="search..."
      />
      <nav className="px-4">
        <ul className="flex items-center gap-2">
          <Link to="/">
            <li className="px-2 text-purple-400 font-semibold">Home</li>
          </Link>
          <Link to="/products">
            <li className="px-2 text-purple-400 font-semibold">Products</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
