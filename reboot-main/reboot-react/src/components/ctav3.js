import React from "react";
import CountUp from "react-countup";
import data from "../data/cta.json";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";

const Ctav3 = ({ isBg }) => {
  const { ctav3 } = data;
  const { image, title, description, number, button, button2, email, counterCards } = ctav3;
  return (
    <section
      className={`cta3 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center cta3__wrapper">
          <div className="col-md-6 mb-3 mb-md-0 offset-md-1 cta3__wrapper__content">
            <h5 className="mb-3">
              <i className="icofont-brand-whatsapp"></i>{" "}
              <span>
                <Trans i18nKey="ctav3.title">{title}</Trans>
              </span>
            </h5>
            <p className="mb-3">
              <Trans i18nKey="ctav3.description">{description}</Trans>
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a
                href="https://wa.me/85257225345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn__primary"
              >
                <i className="icofont-brand-whatsapp me-2"></i>
                <span>
                  <Trans i18nKey="ctav3.button">{button}</Trans>
                </span>
              </a>
              <a
                href={`mailto:${email}`}
                className="btn__primary btn-outline"
              >
                <i className="icofont-envelope me-2"></i>
                <span>
                  <Trans i18nKey="ctav3.button2">{button2}</Trans>
                </span>
              </a>
              <a
                href="tel:+85227578547"
                className="btn__primary btn-outline"
              >
                <i className="icofont-phone me-2"></i>
                <span>Phone</span>
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={image} alt="title" />
          </div>
        </div>

        <div className="row align-items-center text-center cta3__counter">
          {counterCards.map((data, i) => (
            <div key={i} className="col-sm-4">
              <h2 className="display-4">
                <CountUp end={data.number} enableScrollSpy="true" />{data.suffix || 'k'}
              </h2>
              <p>
                <Trans i18nKey={`ctav3.counterCards.${i + 1}`}>
                  {data.title}
                </Trans>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ctav3;
