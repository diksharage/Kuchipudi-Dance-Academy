import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#7B1E3A] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-yellow-300">
          Kuchipudi Academy
        </h1>

        <div className="flex gap-8 text-lg font-medium">

          <Link
            to="/home"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-300 transition"
          >
            About
          </Link>

          <Link
            to="/programs"
            className="hover:text-yellow-300 transition"
          >
            Programs
          </Link>

          <Link
            to="/gallery"
            className="hover:text-yellow-300 transition"
          >
            Gallery
          </Link>

          <Link
            to="/studenthub"
            className="hover:text-yellow-300 transition"
          >
            Student Hub
          </Link>

          <Link
            to="/contact"
            className="hover:text-yellow-300 transition"
          >
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;