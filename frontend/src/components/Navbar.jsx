import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="logo-circle">
            <i className="bi bi-mortarboard-fill"></i>
          </div>

          <div className="ms-2">
            <h5 className="logo-title mb-0">
              Bright Future
            </h5>

            <small className="logo-subtitle">
              Public School
            </small>
          </div>
        </Link>

        {/* Mobile Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/notices" className="nav-link">
                Notices
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/teacher-apply" className="nav-link">
                Teacher Apply
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/admission" className="nav-link">
                Admission
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">

              <Link
                to="/admin/login"
                className="btn btn-warning px-4 rounded-pill"
              >
                <i className="bi bi-person-lock me-2"></i>
                Admin Login
              </Link>

            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
//       <div className="container">

//         <Link className="navbar-brand fw-bold" to="/">
//           School Management
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbar"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse"
//           id="navbar"
//         >
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">
//                 About
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/notices">
//                 Notices
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/teacher-apply">
//                 Teacher Apply
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/admission">
//                 Admission
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">
//                 Contact
//               </NavLink>
//             </li>

//             <li className="nav-item ms-lg-3">
//               <NavLink
//                 className="btn btn-light btn-sm"
//                 to="/admin/login"
//               >
//                 Admin Login
//               </NavLink>
//             </li>

//           </ul>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;