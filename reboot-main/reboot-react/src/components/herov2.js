import React, { useContext } from "react";
import CountUp from "react-countup";
import data from "../data/hero.json";
import LocaleContext from "../LocaleContext";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";
import { socialLink, mailchimpLink } from "../global";


const Herov2 = ({ isBg }) => {
  const { herov2 } = data;
  const {
    title,
    subtitle,
    description,
    button,
    image1,
    image2,
    image3,
    badge,
  } = herov2;
  const { locale } = useContext(LocaleContext);
  return (
    // <!-- ========== Hero section start ========== -->
    <section
      id="hero"
      className={`hero2 hero-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container position-relative">
        <div className="row align-items-center">
          <div
            className={
              locale === "ar"
                ? "col-lg-6 mb-5 mb-lg-0 text-center text-md-end"
                : "col-lg-6 mb-5 mb-lg-0 text-center text-md-start"
            }
          >
            <div className="badge-text">
              <Trans i18nKey="herov2.subtitle">{subtitle}</Trans>
            </div>
            <h1 className="hero2__title display-4 mb-4 text-capitalize">
              <Trans i18nKey="herov2.title">{title}</Trans>
            </h1>
            <p className="mb-4 fs-5">
              <Trans i18nKey="herov2.description">{description}</Trans>
            </p>
            {/* <Link
              smooth={true}
              duration={500}
              offset={-60}
              // to="about"
              to={socialLink.whatsapp}
              className="btn__primary btn-md smooth"
            >
              <span>
              <Trans i18nKey="herov2.whatsapp">wa:</Trans><i className="icofont-brand-whatsapp icofont-2x" ></i>
              </span>
            </Link> */}












            <div className="">
                {/* <h4 className="mb-4">
                  <Trans i18nKey="herov2.whatsapp">wa:</Trans>
                </h4> */}
                {/* <ul className="footer__social-icon"> */}
                <ul className="">
                  {socialLink.whatsapp === "" ? (
                      ""
                    ) : (
                      <li>
                        <a
                          rel="noreferrer"
                          // target="_blank"
                          href={socialLink.whatsapp}
                          className="btn__primary2 btn-md smooth"
                        >
                          <span>
                          <i className="icofont-brand-whatsapp icofont-1x" ></i>&nbsp;&nbsp;&nbsp;<Trans i18nKey="herov2.whatsapp">wa:</Trans>
                          </span>
                        </a>
                      </li>
                    )}

                </ul>
             </div>



















          </div>
          <div className="col-lg-6">
            <div className="hero2__right">
              <div className="hero2__right--col1">
                <div className="hero2__right--img1">
                  <img src={image1} alt="title" />
                </div>
              </div>
              <div className="hero2__right--col2">
                <div className="hero2__right--img2">
                  <img src={image2} alt="title" />
                </div>
                <div className="hero2__right--img3">
                  <img src={image3} alt="title" />
                </div>
              </div>
              <div className="hero2__trusted--badge">
                <h5>
                  <CountUp end={badge.counterNumber} enableScrollSpy="true" />+
                </h5>
                <Trans i18nKey="herov2.badge">{badge}</Trans>
                {/* <p>{badge.title}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Hero section end ========== -->
  );
};

export default Herov2;
