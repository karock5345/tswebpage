import { Suspense, useEffect, useState } from "react";
import { Spinner, ThemeProvider } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AllBlog from "./components/pages/all-blog";
import AllJobReference from "./components/pages/all-job-reference";
import AboutUs from "./components/pages/about-us";
import AllProject from "./components/pages/all-project";
import AppsLanding from "./components/pages/apps-landing";
import BlogDetail from "./components/pages/blog-detail";
import BookingSystem from "./components/pages/booking-system";
import TsvdHome from "./components/pages/tsvd-home";
import BusinessSolution from "./components/pages/business-solution";
import DigitalAgency from "./components/pages/digital-agency";
import ItSolution from "./components/pages/it-solution";
import MarketingSolution from "./components/pages/marketing-solution";
import ProjectDetails from "./components/pages/project-details";
import SoftwareLanding from "./components/pages/software-landing";
import headerData from "./data/header.json";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  // --- Add this effect ---
  // This effect ensures that the navbar links close the menu on click for mobile view
  // It waits for the navbar to render before adding the click event listeners
  // This is necessary to ensure the navbar is fully loaded before we try to access its elements
  // This is particularly useful for mobile devices where the navbar is toggled
  useEffect(() => {
  const timeout = setTimeout(() => {
    const navbar = document.getElementById("navbarSupportedContent");
    const toggleBtn = document.querySelector('[aria-controls="navbarSupportedContent"]');
    if (navbar && toggleBtn) {
      const links = navbar.querySelectorAll(".nav-link");
      const handleClick = () => {
        if (window.innerWidth < 992) {
          toggleBtn.click();
        }
      };
      links.forEach(link => link.addEventListener("click", handleClick));
      // Cleanup
      return () => {
        links.forEach(link => link.removeEventListener("click", handleClick));
      };
    }
  }, 500); // Wait 500ms for navbar to render
  return () => clearTimeout(timeout);
}, []);
  // --- End effect ---

  const {
    headerBusiness,
    headerIt,
    headerMarketing,
    headerDigital,
    headerApp,
    headerSoftware,
    singlePageHeader,
    headerTS,
  } = headerData;
  return (
    <>
    <HelmetProvider><Helmet htmlAttributes={{ lang: locale, dir: locale === "ar" ? "rtl" : "ltr", }} /></HelmetProvider>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <ThemeProvider dir={locale === "ar" ? "rtl" : "ltr"}>
          <Suspense
            fallback={
              <div className="d-flex align-items-center justify-content-center vh-100">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route
                  path="/"
                  element={<TsvdHome header={headerTS} />}
                />
                <Route
                  path="/tsvd-home"
                  element={<TsvdHome header={headerTS} />}
                />
                <Route
                  path="/business-solution"
                  element={<BusinessSolution header={headerBusiness} />}
                />
                <Route
                  path="/it-solution"
                  element={<ItSolution header={headerIt} />}
                />
                <Route
                  path="/marketing-solution"
                  element={<MarketingSolution header={headerMarketing} />}
                />
                <Route
                  path="/digital-agency"
                  element={<DigitalAgency header={headerDigital} />}
                />
                <Route
                  path="/software-landing"
                  element={<SoftwareLanding header={headerSoftware} />}
                />
                <Route
                  path="/apps-landing"
                  element={<AppsLanding header={headerApp} />}
                />
                <Route
                  path="/booking-system"
                  element={<BookingSystem header={headerTS} />}
                />
                <Route
                  path="/all-blog"
                  element={<AllBlog header={singlePageHeader} />}
                />
                <Route
                  path="/projects"
                  element={<AllJobReference header={headerTS} />}
                />
                <Route
                  path="/about"
                  element={<AboutUs header={headerTS} />}
                />
                <Route
                  path="/all-project"
                  element={<AllProject header={singlePageHeader} />}
                />
                <Route
                  path="/blog-details"
                  element={<BlogDetail header={singlePageHeader} />}
                />
                <Route
                  path="/project-details"
                  element={<ProjectDetails header={singlePageHeader} />}
                />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ThemeProvider>
      </LocaleContext.Provider>
    </>
  );
}

export default App;