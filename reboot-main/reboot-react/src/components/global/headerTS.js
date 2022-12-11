import { default as React, useContext, useState } from "react";
import { Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { GoChevronDown } from "react-icons/go";
import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import i18n from "../../i18n";
import LocaleContext from "../../LocaleContext";
import { Trans } from "react-i18next";
import { siteLogo } from "../../global";

const HeaderTS = ({ header }) => {
  const { t } = useTranslation();
  const { locale } = useContext(LocaleContext);  
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
  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  const [dark, setDark] = useState(false);
  function setTheme(themeName) {
    localStorage.setItem("reboot_theme", themeName);
    document.documentElement.className = themeName;
  }
  function toggleTheme() {
    if (localStorage.getItem("reboot_theme") === "theme-dark") {
      setTheme("theme-light");
    } else {
      setTheme("theme-dark");
    }
  }
  (function () {
    
    // if (localStorage.getItem("reboot_theme") === "theme-dark") {
    //   setTheme("theme-dark");
    //   setDark.checked = false;
    // } else {
    //   setTheme("theme-light");
    //   setDark.checked = true;
    // }
    if (localStorage.getItem("reboot_theme") === "theme-light") {
      setTheme("theme-light");
      setDark.checked = true;
    } else {
      setTheme("theme-dark");
      setDark.checked = false;
    }
  })();
  window.addEventListener("scroll", setFixed);



  const renderlang = () => {
    switch (locale) {
      default:
        return (
          <li className="nav-item">
                      
            <li className="nav-item">

              <Link
              activeClass="active"
              className="benefits nav-link"
              onClick={() => i18n.changeLanguage("tc")}
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
        break;      
      case "tc":
        return (
          <li className="nav-item">
                      
            <li className="nav-item">

              <Link
              activeClass="active"
              className="benefits nav-link"
              onClick={() => i18n.changeLanguage("en")}
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
        break;
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
                {/* <li className="nav-item dropdown submenu">
                  <Link
                    activeClass="active"
                    className="nav-link scroll dropdown-toggle"
                    to={header.home.link}
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
                    <Trans i18nKey="headerTS.home.title">
                      {header.home.title}
                    </Trans>

                    <span onClick={handleToggle} className="sub-menu-toggle">
                      <GoChevronDown />
                    </span>
                  </Link>
                  <ul
                    className={
                      isActive ? "dropdown-menu show" : "dropdown-menu"
                    }
                  >
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem1.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem1">
                          {header.home.dropdownItem1.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem2.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem2">
                          {header.home.dropdownItem2.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem3.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem3">
                          {header.home.dropdownItem3.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem4.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem4">
                          {header.home.dropdownItem4.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem5.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem5">
                          {header.home.dropdownItem5.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem6.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem6">
                          {header.home.dropdownItem6.title}
                        </Trans>
                      </PageLink>
                    </li>
                    <li className="nav-item">
                      <PageLink
                        to={header.home.dropdownItem7.link}
                        className="nav-link"
                      >
                        <Trans i18nKey="headerTS.home.dropdownItem7">
                          {header.home.dropdownItem7.title}
                        </Trans>
                      </PageLink>
                    </li>                    
                  </ul>
                </li> */}










                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.home.link}                     
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.home.title">
                      {header.home.title}
                    </Trans>
                  </Link>
                </li>












                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.about.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.about.title">
                      {header.about.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.tsfeatures.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.tsfeatures.title">
                      {header.tsfeatures.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.project.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.project.title">
                      {header.project.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="benefits nav-link"
                    to={header.tsfitfeature.link}
                    spy={true}
                    isDynamic={false}
                    hashSpy={false}
                    spyThrottle={500}
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <Trans i18nKey="headerTS.tsfitfeature.title">
                      {header.tsfitfeature.title}
                    </Trans>
                  </Link>
                </li>
                <li className="nav-item">
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
                        onChange={(e) => toggleTheme(dark)}
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
