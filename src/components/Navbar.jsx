import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaCamera } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
            <div className="container d-flex align-items-center">

                {/* Logo */}
                <div className="d-flex align-items-center gap-3 flex-grow-1">
                    <div className="logo-icon">
                        <FaCamera />
                    </div>

                    <div>
                        <h3 className="logo-title">عدسة</h3>
                        <span className="logo-slogan">
                            نرى ما لا يراه الآخرون
                        </span>
                    </div>
                </div>

                {/* Toggler */}
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav nav-wrapper">
                        <li className="nav-item">
                            <NavLink to="/" end className="nav-link nav-pill">
                                الرئيسية
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs" className="nav-link nav-pill">
                                المدونة
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link nav-pill">
                                من نحن
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Actions */}
                <div className="d-none d-lg-flex align-items-center gap-3 flex-grow-1 justify-content-end">
                    <div className="search-btn">
                        <FaSearch />
                    </div>

                    <Link to="/blogs" className="btn cta-btn">
                        ابدأ القراءة
                    </Link>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
