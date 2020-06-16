import React from 'react';
import Page from '../UI/Page';
import 'antd/dist/antd.css';
import './HomePage.scss';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

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

  const serviceItems = [
    {
      icon: 'fas fa-video',
      title: 'Video Repair',
      link: '/service/video-repair',
      subtext: `We can handle all kinds of video & audio production and digital communication problems for you. 8mm, 16mm, 35mm film repair and digitalization.`,
    },
    {
      icon: 'fas fa-film',
      title: 'Microvolume scanning',
      link: '/service/micro-scan',
      subtext: `Use our miniaturized digital technology to help you preserve your precious historical data that has been destroyed by time`,
    },
    {
      icon: 'fas fa-users',
      title: `Digital Collection of Everyday Life`,
      link: '/service/digital-collection',
      subtext: `Effectively search for the required information, and turn ancient historical relics and files into easy to save and space efficient digital content.`,
    },
    {
      icon: 'fas fa-image',
      title: `Interactive panoramic tour`,
      link: '/service/panoramic',
      subtext: `The latest functions of the industry such as panoramic object embedding, scene self-broadcasting, scene explanation, custom skin, radar navigation and so on.`,
    },
    {
      iconSource: (
        <div className="icon--container">
          <div className="icon--4k">4K</div>
        </div>
      ),
      title: `4K 2K HD shooting and editing`,
      link: '/service/hd',
      subtext: `4K, 2K, HD high-definition video, giving you unlimited imagination space.`,
    },
    {
      icon: 'fas fa-building',
      title: `Time-lapsed Recordings`,
      link: '/service/time-lapse',
      subtext: `Leave a historical testimony to your proud construction method, from the first day of construction to the completion of the building.`,
    },
    {
      icon: 'fas fa-book-open',
      title: `EBook/Electronic Catalog`,
      link: '/service/electronic-catalog',
      subtext: `Digitalize your catalogue to increase usability, convenience and interactivity for your customers.`,
    },
    {
      icon: 'fas fa-cloud',
      title: `Multimedia cloud service`,
      link: '/service/cloud',
      subtext: `Let us convert your movies and audio files into online formats, which can be browsed on various computers and Internet-accessible tools.`,
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
                <p className="legend">{item.name}</p>
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
