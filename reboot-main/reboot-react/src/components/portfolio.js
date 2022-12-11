import React, { useContext } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/portfolio.json";
import SectionTitle from "./section-title";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import LocaleContext from "../LocaleContext";
import dataf from "../data/footer.json";

const Portfolio = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { portfolio } = data;
  const { title, subtitle, portfolioSliders, note } = portfolio;
  const { footerv2 } = dataf;
  const { email } = footerv2;

  return (
    // <!-- ========== Portfolio section start ========== -->
    <section className="section-padding portfolio4" id="portfolio">
      <div className="container">
        <SectionTitle
          title={<Trans i18nKey="portfolio.title">{title}</Trans>}
          subtitle={<Trans i18nKey="portfolio.subtitle">{subtitle}</Trans>}
          direction="center"
        />
        <div className="row portfolio4__wrapper">
          <div className="col-12">
            <div className="portfolio4__slider">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                centeredSlides
                loop
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                dir={ locale === "ar" ? "rtl" : "ltr"}
                key={locale}
              >
                {portfolioSliders?.map((portfolioSlider, i) => (
                  <SwiperSlide key={i} className="pb-3">
                    <div className="swiper-slide">
                      <div className="slide__image--wrap">
                        <img
                          className="img-fluid"
                          src={portfolioSlider.image}
                          alt="title"
                        />
                      </div>
                      <div className="swiper-slide__hover">
                        <div className="portfolio4__slider--contnet">
                          <p>
                            <Trans
                              i18nKey={`portfolio.portfolioSliders${
                                i + 1
                              }.title`}
                            >
                              {portfolioSlider.title}
                            </Trans>
                          </p>
                          <h5>
                            <Trans
                              i18nKey={`portfolio.portfolioSliders${
                                i + 1
                              }.subtitle`}
                            >
                              {portfolioSlider.subtitle}
                            </Trans>
                          </h5>
                        </div>
                        <div className="portfolio4__slider--ico">
                          <Link to="/project-details">
                            <i className="icofont-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
         


            </div>

          
          
        
          </div>
                       
          {/* <div style="text-align:center">
            This text will be centered.
            <p>So will this paragraph.</p>
          </div>
          <div style="align-items: center;">
            This text will be centered.
            <p>So will this paragraph.</p>
          </div> */}

          <div >

          
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
              

            
              <p><Trans i18nKey="portfolio.note">{note}</Trans></p>
          </div>


        </div>

        
      </div>
      
    </section>
    // <!-- ========== Portfolio section end ========== -->
  );
};

export default Portfolio;
