import React from "react";
import CountUp from "react-countup";
import data from "../data/cta.json";
import { Trans } from "react-i18next";
import { Link } from "react-scroll";

const Ctav3 = ({ isBg }) => {
  const { ctav3 } = data;
  const { image, title, description, number, button, counterCards } = ctav3;
  return (
    <section
      className={`cta3 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center cta3__wrapper">
          <div className="col-md-6 mb-3 mb-md-0 offset-md-1 cta3__wrapper__content">
            <h5 className="mb-3">
              <i className="icofont-phone"></i>{" "}
              <span>
                <Trans i18nKey="ctav3.title">{title}</Trans>
              </span>
            </h5>
            <h6 className="mb-3">{number}</h6>
            <p className="mb-3">
              <Trans i18nKey="ctav3.description">{description}</Trans>
            </p>
            <Link
              smooth={true}
              duration={500}
              offset={-60}
              className="btn__primary"
              to="contact"
            >
              <span>
                <Trans i18nKey="ctav3.button">{button}</Trans>
              </span>
            </Link>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={image} alt="title" />
          </div>
        </div>

        <div className="row align-items-center text-center cta3__counter">
          {counterCards.map((data, i) => (
            <div key={i} className="col-sm-4">
              <h2 className="display-4">
                <CountUp end={data.number} enableScrollSpy="true" />k
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
