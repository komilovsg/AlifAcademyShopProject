import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-4 py-2 flex items-center justify-between shadow-md">
      {/* Логотип */}
      <Link to="/">
        <div className="text-black font-bold text-xl">QPICK</div>
      </Link>

      {/* Выбор модели телефона */}
      <div className="flex items-center space-x-2 text-gray-600">
        <img src="../src/assets/icons/phon-nav.svg" alt="phone" />
        <span>Выбрать модель телефона</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <Link to="/favorites">
            <img src="../src/assets/icons/Heat-nav.svg" alt="phone" />
          </Link>

          <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full text-xs px-1">
            2
          </span>
        </div>

        <div className="relative">
          <Link to="/cart">
            <img src="../src/assets/icons/cart-nav.svg" alt="phone" />
          </Link>

          <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full text-xs px-1">
            1
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
