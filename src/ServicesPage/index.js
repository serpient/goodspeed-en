import React, { useState, useEffect } from 'react';
import Page from '../UI/Page';
import './ServicesPage.scss';
import serviceItems from '../services/serviceItems';
import { Link } from 'react-router-dom';

const ServicesPage = ({ location }) => {
  const [currentService, setCurrentService] = useState(null);
  const [currentServiceData, setCurrentServiceData] = useState(null);
  useEffect(() => {
    let defaultService =
      location.pathname === '/services'
        ? '/service/digital-collection'
        : location.pathname;

    setCurrentService(defaultService);
    const dataSet = serviceItems.find(
      (service) => service.link === defaultService
    );
    setCurrentServiceData(dataSet);
  }, [location.pathname]);

  return (
    <Page>
      <section className="services-page--container">
        <section className="services-page--header">
          <h1>Services</h1>
        </section>
        <section className="services-page--content-container">
          <section className="services-page--side">
            {serviceItems.map((service) => {
              return (
                <div
                  key={service.title}
                  className={
                    currentService === service.link ? `side-option--active` : ''
                  }
                >
                  <Link className={`side-option`} to={service.link}>
                    {service.iconSource ? (
                      service.iconSource
                    ) : (
                      <div className="icon--container">
                        <i className={service.icon} />
                      </div>
                    )}
                    <h3>{service.title}</h3>
                  </Link>
                </div>
              );
            })}
          </section>
          <section className="services-page--main">
            {!currentServiceData ? (
              <h2>Choose a service to get more details!</h2>
            ) : (
              <>
                <h2>{currentServiceData.title}</h2>
                {currentServiceData.component}
              </>
            )}
          </section>
        </section>
      </section>
    </Page>
  );
};

export default ServicesPage;
