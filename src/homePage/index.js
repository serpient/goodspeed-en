import React from 'react';
import Page from '../UI/Page';
import 'antd/dist/antd.css';
import './HomePage.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import serviceItems from '../services/serviceItems';

const HomePage = (props) => {
  const carouselItems = [
    {
      source: require('../assets/hero-1.jpg'),
      name: 'Film Restoration',
    },
    {
      source: require('../assets/hero-2.jpg'),
      name: 'Digitization',
    },
  ];

  return (
    <Page location={props.location}>
      <section className="home-page--container">
        <Carousel autoplay={true} dotPosition="right">
          {carouselItems.map((item) => {
            return (
              <div>
                <img src={item.source} alt={item.name} />
              </div>
            );
          })}
        </Carousel>
        <section className="home-page--services--container">
          <div className="home-page--services">
            {serviceItems.map((service) => {
              return (
                <div className="service">
                  <Link to={service.link}>
                    {service.iconSource ? (
                      service.iconSource
                    ) : (
                      <div className="icon--container">
                        <i className={service.icon} />
                      </div>
                    )}
                  </Link>
                  <h3>{service.title}</h3>
                  <p>{service.subtext}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </Page>
  );
};

export default HomePage;
