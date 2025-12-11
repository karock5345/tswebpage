import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderTS from '../global/headerTS';
import Footer2 from '../global/footerv2';
import Aboutv2 from '../aboutv2';
import Ctav3 from '../ctav3';
import SectionTitle from '../section-title';
import CountUp from 'react-countup';
import about from '../../data/about.json';

function AboutUs({ header }) {
  const { t } = useTranslation();
  const { aboutv2 } = about;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertiseCards = [
    {
      icon: 'icofont-users-alt-3',
      title: t('aboutUsPage.expertise.card1.title'),
      description: t('aboutUsPage.expertise.card1.description')
    },
    {
      icon: 'icofont-calendar',
      title: t('aboutUsPage.expertise.card2.title'),
      description: t('aboutUsPage.expertise.card2.description')
    },
    {
      icon: 'icofont-monitor',
      title: t('aboutUsPage.expertise.card3.title'),
      description: t('aboutUsPage.expertise.card3.description')
    },
    {
      icon: 'icofont-laptop',
      title: t('aboutUsPage.expertise.card4.title'),
      description: t('aboutUsPage.expertise.card4.description')
    }
  ];

  const whyChooseCards = [
    {
      icon: 'icofont-award',
      title: t('aboutUsPage.whyChoose.card1.title'),
      description: t('aboutUsPage.whyChoose.card1.description')
    },
    {
      icon: 'icofont-puzzle',
      title: t('aboutUsPage.whyChoose.card2.title'),
      description: t('aboutUsPage.whyChoose.card2.description')
    },
    {
      icon: 'icofont-support',
      title: t('aboutUsPage.whyChoose.card3.title'),
      description: t('aboutUsPage.whyChoose.card3.description')
    }
  ];

  const industrySectors = [
    { icon: 'icofont-building-alt', name: t('aboutUsPage.trustedBy.government') },
    { icon: 'icofont-airplane-alt', name: t('aboutUsPage.trustedBy.aviation') },
    { icon: 'icofont-restaurant', name: t('aboutUsPage.trustedBy.foodBeverage') },
    { icon: 'icofont-flash', name: t('aboutUsPage.trustedBy.utilities') },
    { icon: 'icofont-phone', name: t('aboutUsPage.trustedBy.telecom') },
    { icon: 'icofont-cart', name: t('aboutUsPage.trustedBy.retail') }
  ];

  return (
    <>
      <HeaderTS header={header} />
      
      {/* Hero Section */}
      <section className="about-us-hero py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-3">{t('aboutUsPage.hero.title')}</h1>
              <p className="lead text-muted">
                {t('aboutUsPage.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-us-who-we-are py-5">
        <div className="container">
          <SectionTitle 
            title={t('aboutUsPage.whoWeAre.title')}
            content={t('aboutUsPage.whoWeAre.content')}
          />
          <Aboutv2 isBg="" aboutData={aboutv2} />
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="about-us-expertise py-5 bg-light">
        <div className="container">
          <SectionTitle 
            title={t('aboutUsPage.expertise.title')}
            content={t('aboutUsPage.expertise.subtitle')}
          />
          <div className="row g-4 mt-4">
            {expertiseCards.map((card, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div className="expertise-card h-100 p-4 bg-white rounded shadow-sm">
                  <div className="icon-wrapper mb-3">
                    <i className={`${card.icon} fs-1`}></i>
                  </div>
                  <h4 className="mb-3">{card.title}</h4>
                  <p className="text-muted mb-0">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-us-why-choose py-5">
        <div className="container">
          <SectionTitle 
            title={t('aboutUsPage.whyChoose.title')}
            content={t('aboutUsPage.whyChoose.subtitle')}
          />
          <div className="row g-4 mt-4">
            {whyChooseCards.map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="why-choose-card h-100 p-4 text-center bg-light rounded">
                  <div className="icon-wrapper mb-3">
                    <i className={`${card.icon} fs-1 text-primary`}></i>
                  </div>
                  <h5 className="mb-3">{card.title}</h5>
                  <p className="text-muted mb-0">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="about-us-track-record py-5 bg-primary text-white">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-lg-4 col-md-6">
              <div className="track-record-card">
                <h2 className="display-3 fw-bold mb-2">
                  <CountUp end={20} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                </h2>
                <p className="fs-5 mb-0">{t('aboutUsPage.trackRecord.years')}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="track-record-card">
                <h2 className="display-3 fw-bold mb-2">
                  <CountUp end={300} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                </h2>
                <p className="fs-5 mb-0">{t('aboutUsPage.trackRecord.projects')}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="track-record-card">
                <h2 className="display-3 fw-bold mb-2">
                  <CountUp end={100} duration={2.5} suffix="%" enableScrollSpy scrollSpyOnce />
                </h2>
                <p className="fs-5 mb-0">{t('aboutUsPage.trackRecord.satisfaction')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="about-us-trusted py-5">
        <div className="container">
          <SectionTitle 
            title={t('aboutUsPage.trustedBy.title')}
            content={t('aboutUsPage.trustedBy.subtitle')}
          />
          <div className="row g-4 mt-4">
            {industrySectors.map((sector, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                <div className="industry-card p-4 text-center bg-light rounded h-100">
                  <i className={`${sector.icon} fs-1 text-primary mb-3 d-block`}></i>
                  <h6 className="mb-0">{sector.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Ctav3 />

      <Footer2 />
    </>
  );
}

export default AboutUs;
