import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="text-lg font-semibold text-blue-600">My Project</span>
        <div className="flex gap-4">
          <Link
            to="/"
            className={`transition-colors hover:text-blue-500 ${
              location.pathname === "/" ? "font-bold text-blue-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`transition-colors hover:text-blue-500 ${
              location.pathname === "/projects"
                ? "font-bold text-blue-600"
                : ""
            }`}
          >
            Projects
          </Link>

          <Link
            to="/contact"
            className={`transition-colors hover:text-blue-500 ${
              location.pathname === "/contact"
                ? "font-bold text-blue-600"
                : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
