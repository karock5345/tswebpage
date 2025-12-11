import React, { useContext } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/service.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import LocaleContext from "../LocaleContext";
import dataf from "../data/footer.json";

const Servicev2 = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { servicev2 } = data;
  const { title, subtitle, serviceSliders, note  } = servicev2;
  const { footerv2 } = dataf;
  const { email } = footerv2;
  return (
    // <!-- ========== Service section start ========== -->
    <section
      id="tsfeatures"
      className={`section-padding serviceslider ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="servicev2.title">{title}</Trans>}
          subtitle={<Trans i18nKey="servicev2.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row service__wrapper">
          <div className="col-12">
            <Swiper
              className="pb-5"
              modules={[Navigation, Autoplay]}
              navigation
              autoplay
              loop
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              dir={ locale === "ar" ? "rtl" : "ltr"}
              key={locale}
            >
              {serviceSliders?.map((serviceSlider, i) => (
                <SwiperSlide key={i} className="pb-3">
                  <div className="service__item translateEffect2">
                    <div className="row align-items-center">
                      <div className="col-sm-6 p-0">
                        <div className="service__item-img">
                          <img
                            className="img-fluid"
                            src={`${serviceSlider.image}`}
                            alt="title"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 p-0">
                        <div className="service__item-content">
                          <div className="service__icon">
                            <i className={`${serviceSlider.icon}`}></i>
                          </div>
                          <h3>
                            <Trans
                              i18nKey={`servicev2.serviceSliders${i + 1}.title`}
                            >
                              {serviceSlider.title}
                            </Trans>
                          </h3>
                          <p>
                            <Trans
                              i18nKey={`servicev2.serviceSliders${
                                i + 1
                              }.development`}
                            >
                              {serviceSlider.development}
                            </Trans>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="container">
          <div className="align-items-center">
          <div className="hero3__content">
            <h1 className="hero2__title display-4 mb-4 text-capitalize"></h1>
            
          </div>
          </div>
          </div>
          <div className="hero5__content ">

            <ul className="align-items-center">
              
              <li>
                <a
                  rel="noreferrer"
                  // target="_blank"
                  href={`mailto:${email.text}`}
                  className="btn__primary2 btn-md smooth "
                >
                  <span>
                    <i className="icofont-mail icofont-1x" ></i>&nbsp;&nbsp;&nbsp;{email.text}
                  </span>
                </a>
              </li>
            </ul>
            <p><Trans i18nKey="servicev2.note">{note}</Trans></p>
          </div>
          



        </div>
      </div>
    </section>
    // <!-- ========== Service section end ========== -->
  );
};

export default Servicev2;
