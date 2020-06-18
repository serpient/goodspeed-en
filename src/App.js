import React, { useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './homePage/index';
import AboutPage from './AboutPage/index';
import ClientsPage from './ClientsPage/index';
import ServicesPage from './ServicesPage/index';
import ContactPage from './ContactPage/index';
import Header from './UI/Header';
import Footer from './UI/Footer';
import serviceItems from './services/serviceItems';

const App = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);
  return (
    <div className="App">
      <Header location={props.location} />
      <Switch>
        <Route exact path="/">
          <HomePage {...props} />
        </Route>
        <Route exact path="/about-us">
          <AboutPage {...props} />
        </Route>
        <Route exact path="/clients">
          <ClientsPage {...props} />
        </Route>
        <Route exact path="/contact">
          <ContactPage {...props} />
        </Route>
        <Route exact path="/services">
          <ServicesPage {...props} />
        </Route>
        {serviceItems.map((services) => {
          return (
            <Route exact path={services.link}>
              <ServicesPage {...props} />
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
