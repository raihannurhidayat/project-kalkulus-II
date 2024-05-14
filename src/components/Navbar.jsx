import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoLogoXing } from "react-icons/io5";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [landingPage, setLandingPage] = useState(true);

  const navbarRef = useRef(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="wrapper-container-navbar-section-page"
      ref={navbarRef}
    >
      <nav className="navbar-section-page">
        <div className="container-navbar-section-page">
          <div className="logo">
            <IoLogoXing size={32} />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <RxCross1 /> : <FiMenu />}
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink onClick={() => setLandingPage(true)} to="/">
                  Home
                </NavLink>
              </li>
              {landingPage && (
                <>
                  <li>
                    <HashLink smooth to="#about">
                      About
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#feature">
                      Feature
                    </HashLink>
                  </li>
                  <li>
                    <HashLink smooth to="#ourteam">
                      Our Team
                    </HashLink>
                  </li>
                </>
              )}

              <li>
                <NavLink onClick={() => setLandingPage(false)} to="/aritmatika">
                  Aritmatika
                </NavLink>
              </li>
              <li>
                <NavLink onClick={() => setLandingPage(false)} to="/projects">
                  Geometri
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
