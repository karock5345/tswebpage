import React from "react";
import data from "../data/overview.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import dataf from "../data/footer.json";

const Overview = () => {
  const { overview } = data;
  const { title, subtitle, overviewContents ,note} = overview;
  const { footerv2 } = dataf;
  const { email } = footerv2;
  return (
    // <!-- ========== Overview section start ========== -->
    <section className="overview section-padding bg-one">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="overview.title">{title}</Trans>}
          subtitle={<Trans i18nKey="overview.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row">
          {overviewContents.map((overviewContent) => (
            <div
              key={overviewContent.id}
              className="col-lg-3 col-md-6 mb-4 mb-lg-0"
            >
              <div className="overview__content translateEffect2 h-100">
                <div className="overview__content--title">
                  <h2>{overviewContent.number}</h2>
                  <h3>
                    <Trans
                      i18nKey={`overview.overviewContents${overviewContent.id}.title`}
                    >
                      {overviewContent.title}
                    </Trans>
                  </h3>
                  <p>
                    <Trans
                      i18nKey={`overview.overviewContents${overviewContent.id}.description`}
                    >
                      {overviewContent.description}
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          ))}
           <ul className="">
              
              <li>
                <a
                  rel="noreferrer"
                  // target="_blank"
                  href={`mailto:${email.text}`}
                  className="btn__primary2 btn-md smooth"
                >
                  <span>
                    <i className="icofont-mail icofont-1x" ></i>&nbsp;&nbsp;&nbsp;{email.text}
                  </span>
                </a>
              </li>
            </ul>
            <p><Trans i18nKey="overview.note">{note}</Trans></p>
        </div>
        <div className="row">

            <ul className="">
              
              <li>
                <a
                  rel="noreferrer"
                  // target="_blank"
                  href={`mailto:${email.text}`}
                  className="btn__primary2 btn-md smooth"
                >
                  <span>
                    <i className="icofont-mail icofont-1x" ></i>&nbsp;&nbsp;&nbsp;{email.text}
                  </span>
                </a>
              </li>
            </ul>
            <p><Trans i18nKey="overview.note">{note}</Trans></p>
          </div>
          {/* <p><Trans i18nKey="overview.note">{note}</Trans></p> */}
      </div>
    </section>
    // <!-- ========== Overview section end ========== -->
  );
};

export default Overview;
