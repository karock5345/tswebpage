import React, { useContext } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../data/hero.json";
import { Trans, useTranslation } from "react-i18next";
import { mailchimpLink } from "../global";
import LocaleContext from "../LocaleContext";
import dataf from "../data/footer.json";


//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  const {t} = useTranslation()
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <div className="hero5__content__input__box">
      <div className="hero5__content__input mb-2">
        <input
          ref={(node) => (email = node)}
          type="email"
          placeholder={t("herov5.email")}
        />
        <button className="btn__primary" onClick={submit}>
          <span><Trans i18nKey="herov5.button">Free Trail</Trans></span>
        </button>
      </div>
      











      
      <div className="message col mt-2">
        {status === "sending" && (
          <div className=" alert alert-warning rounded-pill">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger rounded-pill"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success mt-2 rounded-pill"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}

const Herov5 = ({ isBg }) => {
  const { locale } = useContext(LocaleContext);
  const { herov5 } = data;
  const { title, description, images, note } = herov5;  
  const { footerv2 } = dataf;
  const { email } = footerv2;

  return (
    
    <section
      className={`hero section-padding2 ${isBg === "yes" ? "bg-one" : ""}`}
      id="tsfeatures"
    >
      <div className="container">
        <div className="row gx-xl-5 align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center">
            <div className="hero5__content">
              <h1 className="hero2__title display-4 mb-4 text-capitalize">
              <Trans i18nKey="herov5.title">{title}</Trans>
              </h1>
              <p className="mb-4 fs-5"><Trans i18nKey="herov5.description">{description}</Trans></p>

              {/* <MailchimpSubscribe
                url={mailchimpLink.link}
                render={({ subscribe, status, message }) => (
                  <SubscribeForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              /> */}













              {/* <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                <h4 className="mb-4" >
                  <a rel="noreferrer" href={`mailto:${email.text}`}>
                  <Trans i18nKey="footerv2.email">{email.title}</Trans> {email.text}
                  </a>
                </h4>
                
              </div> */}
              
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row hero5__image">
              <div className="col-10">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  className="mySwiper"
                  pagination={{ clickable: true }}
                  autoplay
                  loop
                  dir={ locale === "ar" ? "rtl" : "ltr"}
                  key={locale}
                >
                  {images.map((data, i) => (
                    <SwiperSlide key={i}>
                      {" "}
                      <img className="img-fluid" src={data.image} alt="title" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <span className="circle circle-1"></span>
              <span className="circle circle-2"></span>
            </div>
          </div>




          <div className="">

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
          </div>
          <p><Trans i18nKey="herov5.note">{note}</Trans></p>
          </div>
      </div>
    </section>
  );
};

export default Herov5;
