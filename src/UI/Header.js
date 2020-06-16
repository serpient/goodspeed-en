import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ location, children }) => {
  return (
    <nav className="header">
      <MobileHeader />
      <DesktopHeader location={location} />
      {children}
    </nav>
  );
};

export default Header;

const MobileHeader = () => {
  const [menuIsVisble, setMenuVisibility] = useState(false);
  return (
    <section className="menu-container--mobile">
      <Logo />
      <button className="menu-btn" onClick={() => setMenuVisibility(true)}>
        <div className="menu-btn--dash" />
        <div className="menu-btn--dash" />
      </button>
      <section
        style={{ visibility: menuIsVisble ? 'visible' : 'hidden' }}
        className="menu-box"
      >
        <button
          className="menu-btn--close"
          onClick={() => setMenuVisibility(false)}
        >
          X
        </button>
        <Link to="/">
          <img
            className="menu-logo"
            src={require('../assets/goodspeedfilm_logo1.gif')}
            alt="logo"
          />
        </Link>
        <ExternalLinks />
      </section>
    </section>
  );
};

const DesktopHeader = ({ location }) => {
  const [currentPath, setCurrentPath] = useState('/');
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);
  return (
    <section className="menu-container--desktop">
      <Logo />
      <ContactInfo />
      <ExternalLinks currentPath={currentPath} />
    </section>
  );
};

const ExternalLinks = ({ currentPath }) => (
  <div className="sub-links">
    <Link className={isActiveNav(currentPath, '/')} to="/">
      Home
    </Link>
    <Link className={isActiveNav(currentPath, '/about-us')} to="/about-us">
      About Us
    </Link>
    <Link className={isActiveNav(currentPath, '/services')} to="/services">
      Services
    </Link>
    <Link className={isActiveNav(currentPath, '/clients')} to="/clients">
      Clients
    </Link>
    <Link className={isActiveNav(currentPath, '/contact')} to="/contact">
      Contact Us
    </Link>
    <a href="http://www.goodspeedfilm.com/" alt="Chinese Page">
      中文
    </a>
    <div />
    <a
      className="contact-info--facebook"
      alt="Facebook"
      href="https://www.facebook.com/pages/Goodspeed-%E5%85%89%E8%80%80%E7%A7%91%E6%8A%80%E5%82%B3%E6%92%AD/238479079622909"
    >
      <i className="fab fa-facebook"></i>
    </a>
    <a
      className="contact-info--youtube"
      alt="Youtube"
      href="https://www.youtube.com/channel/UCia6oAX8iyNoZgZTzraBsRQ"
    >
      <i className="fab fa-youtube"></i>
    </a>
  </div>
);

const isActiveNav = (currentPath, route) => {
  return currentPath === route ? 'sub-links--active' : '';
};

const ContactInfo = () => {
  return (
    <section className="contact-info--container">
      <h1>+886-2-23979987</h1>
      <h4>FEEL FREE TO CALL US NOW!</h4>
      <i className="fas fa-phone-square"></i>
    </section>
  );
};

const Logo = () => (
  <Link className="logo-container" to="/">
    <img
      className="logo"
      src={require('../assets/goodspeedfilm_logo1.gif')}
      alt="logo"
    />
  </Link>
);
