import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow-lg sticky z-50 top-0 bg-zinc-800 ">
      <nav className="border-gray-800 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.imghippo.com/files/PFpF51724408813.jpg"
              className="mr-3 h-20 rounded-lg shadow-lg"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/Solona"
              className={({ isActive }) =>
                `hover:bg-slate-300 hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ${
                  isActive
                    ? "bg-slate-300 text-black"
                    : "bg-gray-600 text-white"
                }`
              }
            >
              Solona
            </NavLink>
            <NavLink
              to="/Etherium"
              className={({ isActive }) =>
                `hover:bg-slate-300 hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ${
                  isActive
                    ? "bg-slate-300 text-black"
                    : "bg-gray-600 text-white"
                }`
              }
            >
              Etherium
            </NavLink>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-white border-b border-white"
                        : "text-gray-300 border-b border-gray-800"
                    } hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-white border-b border-white"
                        : "text-gray-300 border-b border-gray-800"
                    } hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
