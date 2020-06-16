import React from 'react';
import './App.scss';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import HomePage from './homePage/index';
import AboutPage from './AboutPage/index';
import ClientsPage from './ClientsPage/index';
import ContactPage from './ContactPage/index';
import Header from './UI/Header';
import Footer from './UI/Footer';

const App = (props) => {
  const locationHistory = useHistory();
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
        <Route exact path="/services/">
          <ContactPage {...props} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
