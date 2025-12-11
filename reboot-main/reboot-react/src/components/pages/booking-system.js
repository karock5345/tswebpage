import React, { useState } from "react";
import HeaderTS from "../global/headerTS";
import Footer2 from "../global/footerv2";
import bookingData from "../../data/booking-system.json";
import SectionTitle from "../section-title";
import { Trans } from "react-i18next";
import CountUp from "react-countup";
import ContactForm from "../contactForm";
import { useNavigate } from "react-router-dom";
import Ctav3 from "../ctav3";

const BookingSystem = ({ header }) => {
  const { bookingHero, bookingFeatures, howItWorks, advancedFeatures, bookingCustomers, bookingContact } = bookingData;
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Map customer project IDs to their corresponding row indices in /projects
  const customerToProjectRowMap = {
    1: 6,  // Immigration Department -> row 7 (index 6)
    2: 0,  // LG Healthcare Center -> row 1 (index 0)
    3: 23, // Quality Healthcare Medical Center -> row 24 (index 23)
    4: 2,  // GIA Clinic Services -> row 3 (index 2)
    5: 4,  // IKEA Service Center -> row 5 (index 4)
    6: 5   // Mazda Healthcare Facility -> row 6 (index 5)
  };

  const handleCustomerClick = (projectId) => {
    const rowIndex = customerToProjectRowMap[projectId];
    if (rowIndex !== undefined) {
      navigate('/projects', { state: { scrollToRow: rowIndex } });
    }
  };

  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <HeaderTS header={header} />
      
      {/* Hero Section */}
      <section id="hero" className="hero2 hero-padding bg-one">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center text-md-start">
              <div className="badge-text">
                <Trans i18nKey="bookingSystem.hero.subtitle">{bookingHero.subtitle}</Trans>
              </div>
              <h1 className="hero2__title display-4 mb-4 text-capitalize">
                <Trans i18nKey="bookingSystem.hero.title">{bookingHero.title}</Trans>
              </h1>
              <p className="mb-4 fs-5">
                <Trans i18nKey="bookingSystem.hero.description">{bookingHero.description}</Trans>
              </p>
              
              <div className="">
                <ul className="">
                  <li>
                    <a
                      rel="noreferrer"
                      href={`tel:${bookingHero.contactPhone}`}
                      className="btn__primary2 btn-md smooth"
                    >
                      <span>
                        <i className="icofont-phone icofont-1x"></i>&nbsp;&nbsp;&nbsp;
                        <Trans i18nKey="bookingSystem.hero.phone">Phone</Trans>
                      </span>
                    </a>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <a
                      rel="noreferrer"
                      href={`https://wa.me/${bookingHero.contactWhatsApp.replace(/[\s+]/g, '')}`}
                      className="btn__primary2 btn-md smooth"
                      target="_blank"
                    >
                      <span>
                        <i className="icofont-brand-whatsapp icofont-1x"></i>&nbsp;&nbsp;&nbsp;
                        <Trans i18nKey="bookingSystem.hero.whatsapp">WhatsApp</Trans>
                      </span>
                    </a>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <a
                      rel="noreferrer"
                      href={`mailto:${bookingHero.contactEmail}`}
                      className="btn__primary2 btn-md smooth"
                    >
                      <span>
                        <i className="icofont-mail icofont-1x"></i>&nbsp;&nbsp;&nbsp;{bookingHero.contactEmail}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="hero2__right">
                <div className="hero2__right--col1">
                  <div className="hero2__right--img1">
                    <img src={bookingHero.image1} alt="Booking System" />
                  </div>
                </div>
                <div className="hero2__right--col2">
                  <div className="hero2__right--img2">
                    <img src={bookingHero.image2} alt="Queue Management" />
                  </div>
                  <div className="hero2__right--img3">
                    <img src={bookingHero.image3} alt="Appointment Scheduling" />
                  </div>
                </div>
                <div className="hero2__trusted--badge">
                  <h5>
                    <CountUp end={bookingHero.badge.counterNumber} enableScrollSpy="true" />+
                  </h5>
                  <Trans i18nKey="bookingSystem.hero.badge">{bookingHero.badge.title}</Trans>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="service section-padding">
        <div className="container">
          <SectionTitle
            title={<Trans i18nKey="bookingSystem.features.title">{bookingFeatures.title}</Trans>}
            subtitle={<Trans i18nKey="bookingSystem.features.subtitle">{bookingFeatures.subtitle}</Trans>}
            direction="center"
          />
          <div className="row pt-4 gy-5">
            {bookingFeatures.features.map((feature, i) => (
              <div key={feature.id} className="col-md-6 col-lg-4">
                <div className="service__card translateEffect1 h-100">
                  <div className="service__card__icon">
                    <i className={feature.icon}></i>
                  </div>
                  <div className="service__card__content">
                    <h4>
                      <Trans i18nKey={`bookingSystem.features.feature${i + 1}.title`}>
                        {feature.title}
                      </Trans>
                    </h4>
                    <p>
                      <Trans i18nKey={`bookingSystem.features.feature${i + 1}.description`}>
                        {feature.description}
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="overview section-padding bg-one">
        <div className="container">
          <SectionTitle
            title={<Trans i18nKey="bookingSystem.howItWorks.title">{howItWorks.title}</Trans>}
            subtitle={<Trans i18nKey="bookingSystem.howItWorks.subtitle">{howItWorks.subtitle}</Trans>}
            direction="center"
          />
          <div className="row">
            {howItWorks.steps.map((step) => (
              <div key={step.id} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div className="overview__content translateEffect2 h-100">
                  <div 
                    className="overview__content--image mb-3" 
                    style={{position: 'relative', zIndex: 2, cursor: 'pointer'}}
                    onClick={() => handleImageClick(step.image.replace('_small.png', '.png'))}
                  >
                    <img src={step.image} alt={step.title} className="img-fluid rounded" />
                  </div>
                  <div className="overview__content--title">
                    <h2>{step.number}</h2>
                    <h3>
                      <Trans i18nKey={`bookingSystem.howItWorks.step${step.id}.title`}>
                        {step.title}
                      </Trans>
                    </h3>
                    <p>
                      <Trans i18nKey={`bookingSystem.howItWorks.step${step.id}.description`}>
                        {step.description}
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <p className="fs-5">
              <Trans i18nKey="bookingSystem.howItWorks.note">{howItWorks.note}</Trans>
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="advanced" className="section-padding dark-bg">
        <div className="container">
          <SectionTitle
            title={<Trans i18nKey="bookingSystem.advancedFeatures.title">{advancedFeatures.title}</Trans>}
            subtitle={<Trans i18nKey="bookingSystem.advancedFeatures.subtitle">{advancedFeatures.subtitle}</Trans>}
            direction="center"
          />
          <div className="row gy-4">
            {advancedFeatures.serviceSliders.map((slider, i) => (
              <div key={slider.id} className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <img src={slider.image} className="card-img-top" alt={slider.title} />
                  <div className="card-body">
                    <h4 className="card-title">
                      <Trans i18nKey={`bookingSystem.advancedFeatures.slider${i + 1}.title`}>
                        {slider.title}
                      </Trans>
                    </h4>
                    <p className="card-text">
                      <Trans i18nKey={`bookingSystem.advancedFeatures.slider${i + 1}.description`}>
                        {slider.description}
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <p className="fs-6">
              <Trans i18nKey="bookingSystem.advancedFeatures.note">{advancedFeatures.note}</Trans>
            </p>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="section-padding dark-bg">
        <div className="container">
          <SectionTitle
            title={<Trans i18nKey="bookingSystem.customers.title">{bookingCustomers.title}</Trans>}
            subtitle={<Trans i18nKey="bookingSystem.customers.subtitle">{bookingCustomers.subtitle}</Trans>}
            direction="center"
          />
          <p className="text-center mb-5">
            <Trans i18nKey="bookingSystem.customers.description">{bookingCustomers.description}</Trans>
          </p>
          <div className="row gy-4 mb-5">
            {bookingCustomers.customerProjects.map((project) => (
              <div key={project.id} className="col-md-4 col-lg-4">
                <div 
                  className="card h-100" 
                  onClick={() => handleCustomerClick(project.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">
                      <Trans i18nKey={`bookingSystem.customers.project${project.id}.title`}>
                        {project.title}
                      </Trans>
                    </h5>
                    <p className="card-text" style={{ color: '#FE5A10' }}>{project.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-5">
            <h3 className="text-center mb-4">
              <Trans i18nKey="bookingSystem.customers.testimonials.title">
                {bookingCustomers.testimonials.title}
              </Trans>
            </h3>
            <div className="row">
              {bookingCustomers.testimonials.reviews.map((review, i) => (
                <div key={review.id} className="col-md-4 mb-4">
                  <div className="testimonialv2__contnet--single h-100">
                    <div className="testimonialv2__contnet--info">
                      <div className="testimonialv2__contnet--info--image">
                        <img className="img-fluid" src={review.image} alt={review.name} />
                      </div>
                      <div className="testimonialv2__contnet--info--about">
                        <h4>
                          <Trans i18nKey={`bookingSystem.customers.testimonials.review${i + 1}.name`}>
                            {review.name}
                          </Trans>
                        </h4>
                        <span>
                          <Trans i18nKey={`bookingSystem.customers.testimonials.review${i + 1}.title`}>
                            {review.title}
                          </Trans>
                        </span>
                      </div>
                    </div>
                    <div className="testimonialv2__contnet--quote">
                      <p>
                        <Trans i18nKey={`bookingSystem.customers.testimonials.review${i + 1}.description`}>
                          {review.description}
                        </Trans>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="image-viewer-overlay"
          onClick={closeImageViewer}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer'
          }}
        >
          <div 
            className="image-viewer-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <button
              onClick={closeImageViewer}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                backgroundColor: '#fff',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10000
              }}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size view" 
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <Ctav3 />

      <Footer2 />
    </>
  );
};

export default BookingSystem;
