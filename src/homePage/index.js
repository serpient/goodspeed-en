import React from 'react';
import './HomePage.scss';
import Page from '../UI/Page';

const HomePage = (props) => {
  return (
    <Page location={props.location}>
      <section className="home-page--container">Home Page</section>
    </Page>
  );
};

export default HomePage;
