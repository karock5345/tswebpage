import React, { useContext, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import { Trans } from "react-i18next";
import { siteLogo } from "../../global";

const HeaderTS = ({ header }) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/tsvd-home";
  
  function changeLocale(l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  const [isActive, setActive] = useState(false);
  const [fix, setFix] = useState(false);
  
  const handleToggle = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
    // Also collapse Bootstrap navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };
  
  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  const [dark, setDark] = useState(false);

  const setTheme = (themeName) => {
    localStorage.setItem("reboot_theme", themeName);
    document.documentElement.className = themeName;
  };

  const toggleTheme = () => {
    if (dark) {
      setTheme("theme-light");
      setDark(false);
    } else {
      setTheme("theme-dark");
      setDark(true);
    }
    closeMobileMenu();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("reboot_theme");
    if (savedTheme === "theme-dark") {
      document.documentElement.className = "theme-dark";
      setDark(true);
    } else if (savedTheme === "theme-light") {
      document.documentElement.className = "theme-light";
      setDark(false);
    } else {
      document.documentElement.className = "theme-dark";
      setDark(true);
    }

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const renderlang = () => {
    switch (locale) {
      default:
        return (
          <li className="nav-item">
                      
            <li className="nav-item">

              <Link
              activeClass="active"
              className="benefits nav-link"
              onClick={() => { i18n.changeLanguage("tc"); closeMobileMenu(); }}
              spy={true}
              isDynamic={false}
              hashSpy={false}
              spyThrottle={500}
              smooth={true}
              duration={500}
              offset={-60}
              >
                <Trans i18nKey="headerTS.tslang.title">
                  
                </Trans>
                
              </Link>
            </li>
          </li>
        );
      case "tc":
        return (
          <li className="nav-item">
                      
            <li className="nav-item">

              <Link
              activeClass="active"
              className="benefits nav-link"
              onClick={() => { i18n.changeLanguage("en"); closeMobileMenu(); }}
              spy={true}
              isDynamic={false}
              hashSpy={false}
              spyThrottle={500}
              smooth={true}
              duration={500}
              offset={-60}
              >
                <Trans i18nKey="headerTS.tslang.title">
                  
                </Trans>
                
              </Link>
            </li>
          </li>
        );
    }
  };


  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            <PageLink className="navbar-brand" to="/">
              
              <img className="img-fluid" src={siteLogo.logo} alt="logo"/>
              <h6 className="m-0">{header.logo}</h6>
            </PageLink>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <ul
                className={
                  locale === "ar"
                    ? "navbar-nav menu me-lg-auto"
                    : "navbar-nav menu ms-lg-auto"
                }
              >













                <li className="nav-item">
                  <PageLink
                    className="benefits nav-link"
                    to="/about"
                  >
                    <Trans i18nKey="headerTS.about.title">
                      ABOUT
                    </Trans>
                  </PageLink>
                </li>

                <li className="nav-item">
                  <PageLink
                    className="benefits nav-link"
                    to={header.jobreferences.link}
                  >
                    <Trans i18nKey="headerTS.jobreferences.title">
                      {header.jobreferences.title}
                    </Trans>
                  </PageLink>
                </li>
                {/* Desktop dropdown */}
                <li className="nav-item dropdown submenu d-none d-lg-block">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to={header.tsothers.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Trans i18nKey="headerTS.tsothers.title">
                      {header.tsothers.title}
                    </Trans>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <PageLink
                        to={header.tsothers.dropdownItem1.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.tsothers.dropdownItem1">
                          {header.tsothers.dropdownItem1.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.tsothers.dropdownItem2.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.tsothers.dropdownItem2">
                          {header.tsothers.dropdownItem2.title}
                        </Trans>
                      </PageLink>
                    </li>
                  </ul>
                </li>

                {/* Mobile/Tablet - Show items directly */}
                <li className="nav-item d-lg-none">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.tsothers.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.tsothers.title">
                      {header.tsothers.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item d-lg-none">
                  <PageLink
                    to={header.tsothers.dropdownItem1.link}
                    className="nav-link ps-4"
                    onClick={closeMobileMenu}
                  >
                    <Trans i18nKey="headerTS.tsothers.dropdownItem1">
                      {header.tsothers.dropdownItem1.title}
                    </Trans>
                  </PageLink>
                </li>
                <li className="nav-item d-lg-none">
                  <PageLink
                    to={header.tsothers.dropdownItem2.link}
                    className="nav-link ps-4"
                    onClick={closeMobileMenu}
                  >
                    <Trans i18nKey="headerTS.tsothers.dropdownItem2">
                      {header.tsothers.dropdownItem2.title}
                    </Trans>
                  </PageLink>
                </li>













                {/* <li
                  className="nav-item dropdown submenu"
                  title={t("language")}

                  id="basic-nav-dropdown"
                >
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to="#"
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {locale === "en" ? "中文" :"en" }
                    <span onClick={handleToggle} className="sub-menu-toggle">
                      <GoChevronDown />
                    </span>
                  </Link>
                  <ul
                    className={
                      isActive ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <li className="nav-item" onClick={() => changeLocale("en")}>
                      <span className="nav-link">English</span>
                    </li>
                    <li className="nav-item" onClick={() => changeLocale("tc")}>
                      <span className="nav-link">中文</span>
                    </li>
                  </ul>
                </li> */}

                {renderlang()}

                  












                <li className="nav-item">
                  <div className="switch-box">
                    <label id="switch" className="switch">
                      <input
                        type="checkbox"
                        checked={dark}
                        onChange={toggleTheme}
                        id="slider"
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default HeaderTS;
