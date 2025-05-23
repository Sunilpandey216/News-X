import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import countries from "./countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <h3 className="navbar-brand fw-bold">News-x</h3>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setActive(!active)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${active ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/" onClick={() => setActive(false)}>
                  All News
                </Link>
              </li>

              {/* Category Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle fw-semibold d-flex align-items-center gap-1"
                  role="button"
                  onClick={() => {
                    setShowCategoryDropdown(!showCategoryDropdown);
                    setShowCountryDropdown(false);
                  }}
                >
                  Top-Headlines <FontAwesomeIcon icon={faCircleArrowDown} />
                </span>

                {showCategoryDropdown && (
                  <ul className="dropdown-menu show">
                    {category.map((element, index) => (
                      <li key={index}>
                        <Link
                          className="dropdown-item text-capitalize"
                          to={`/top-headlines/${element}`}
                          onClick={() => {
                            setActive(false);
                            setShowCategoryDropdown(false);
                          }}
                        >
                          {element}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Country Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle fw-semibold d-flex align-items-center gap-1"
                  role="button"
                  onClick={() => {
                    setShowCountryDropdown(!showCountryDropdown);
                    setShowCategoryDropdown(false);
                  }}
                >
                  Country <FontAwesomeIcon icon={faCircleArrowDown} />
                </span>

                {showCountryDropdown && (
                  <ul className="dropdown-menu show">
                    {countries.map((element, index) => (
                      <li key={index}>
                        <Link
                          className="dropdown-item d-flex align-items-center gap-2"
                          to={`/country/${element?.iso_2_alpha}`}
                          onClick={() => {
                            setActive(false);
                            setShowCountryDropdown(false);
                          }}
                        >
                          <img
                            src={`https://flagcdn.com/24x18/${element?.iso_2_alpha.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/48x36/${element?.iso_2_alpha.toLowerCase()}.png 2x`}
                            alt={element?.countryName}
                          />
                          <span>{element?.countryName}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Theme Toggle */}
              <li className="nav-item">
                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="themeSwitch"
                    onChange={toggleTheme}
                    checked={theme === "dark-theme"}
                  />
                  <label className="form-check-label text-white" htmlFor="themeSwitch">
                    {theme === "dark-theme" ? "Dark" : "Light"}
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
