import React from "react";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import data from "../data/about.json";

const Aboutv3 = ({ isBg }) => {
  const { aboutv3 } = data;
  const {
    image,
    title,
    subtitle,
    points,
    itemsIcon,
    items,
    description,
    ratings,
    trustedBy,
  } = aboutv3;
  return (
    <section
      id="about"
      className={`about3 section-padding ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="about3__image">
              <img className="img-fluid" src={image} alt="about us" />
              <div className="about3__image__brand">
                <div className="about3__image__brand--rating">
                  <span className="about3__image__brand--rating--percent">
                    {points}
                  </span>
                  <span className="about3__image__brand--rating--stars">
                    <i className=" icofont-star"></i>
                    <i className=" icofont-star"></i>
                    <i className=" icofont-star"></i>
                    <i className=" icofont-star"></i>
                    <i className=" icofont-star"></i>
                  </span>
                  <div className="about3__image__brand--rating--count">
                    {ratings}
                  </div>
                </div>
                <div className="about3__image__brand--trust">
                  <p>
                    Trusted by <strong>{trustedBy}+</strong> clients
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-1 mb-4 mb-xl-0">
            <div className="about3__content">
              <SectionTitle
                title={<Trans i18nKey="aboutv3.title">{title}</Trans>}
                subtitle={<Trans i18nKey="aboutv3.subtitle">{subtitle}</Trans>}
                description={
                  <Trans i18nKey="aboutv3.description">{description}</Trans>
                }
              />
              <ul>
                {items.map((data, i) => (
                  <li key={i}>
                    <div className="about3__content--ico">
                      <i className={itemsIcon}></i>
                    </div>
                    <p>
                      <Trans i18nKey={`aboutv3.aboutList.${i + 1}`}>
                        {data.title}
                      </Trans>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutv3;
