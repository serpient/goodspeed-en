import React from 'react';
import Page from '../UI/Page';
import './AboutPage.scss';

const AboutPage = ({}) => {
  const aboutUsContent = [
    {
      title: `Diversified digital service to meet the different needs of our clients.`,
      subtext: `With more diversified services, more effective options, Goodspeed hopes to maintain good relations with clients to accomplish their ultimate goal of completion. Since its establishment, Goodspeed has always insisted on applying resources in techniques and facilities, working with perseverance in pursuing new knowledge and providing customized digital content planning and specialized comments using advanced digital science and technology and professional knowledge. Thereby, it is Goodspeed’s goal to provide customized services and complete digital content for each and every client without time and space limit.`,
    },
    {
      title: `Present to clients perfection with professional quality and techniques`,
      subtext: `Goodspeed offers advanced facilities and professional techniques in film restoring, filming, scanning, data and document set-up, digitized services and digital archiving in hope to present clients’ needs and creativity to perfection. Therefore, public organizations, private enterprises or major banks and financial companies have all highly approved of our professional quality. In the future, we will continue to fulfill our obligations with full efforts, the right attitude and persistence, to give our clients the best service.`,
    },
  ];
  return (
    <Page>
      <section className="about-page--container">
        <h1>About Us</h1>
        {aboutUsContent.map((content) => {
          return (
            <div className="about-page--content">
              <h3>{content.title}</h3>
              <p>{content.subtext}</p>
            </div>
          );
        })}
      </section>
    </Page>
  );
};

export default AboutPage;
