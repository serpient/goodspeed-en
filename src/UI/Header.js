import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ location, children }) => {
  const [menuIsVisble, setMenuVisibility] = useState(false);
  useEffect(() => {
    setMenuVisibility(false);
  }, [location.pathname]);
  return (
    <nav className="header">
      <MobileHeader
        menuIsVisble={menuIsVisble}
        setMenuVisibility={setMenuVisibility}
      />
      <DesktopHeader location={location} />
      {children}
    </nav>
  );
};

export default Header;

const MobileHeader = ({ menuIsVisble, setMenuVisibility }) => {
  return (
    <section className="menu-container--mobile">
      <SocialMediaLinks />
      <Logo />
      <button className="menu-btn" onClick={() => setMenuVisibility(true)}>
        <i className="fas fa-bars"></i>
      </button>
      <section
        style={{ visibility: menuIsVisble ? 'visible' : 'hidden' }}
        className="menu-box--container"
      >
        <section
          className="modal--container"
          onClick={() => setMenuVisibility(false)}
        />
        <div className="menu-box">
          <button
            className="menu-btn--close"
            onClick={() => setMenuVisibility(false)}
          >
            X
          </button>
          <ExternalLinks />
        </div>
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
      <ExternalLinks currentPath={currentPath} />
      <SocialMediaLinks />
    </section>
  );
};

const ExternalLinks = ({ currentPath }) => (
  <div className="sub-links">
    <div className={isActiveNav(currentPath, '/')}>
      <Link to="/">Home</Link>
    </div>
    <div className={isActiveNav(currentPath, '/about-us')}>
      <Link to="/about-us">About Us</Link>
    </div>
    <div className={isActiveNav(currentPath, '/services')}>
      <Link to="/services">Services</Link>
    </div>
    <div className={isActiveNav(currentPath, '/clients')}>
      <Link to="/clients">Clients</Link>
    </div>
    <div className={isActiveNav(currentPath, '/contact')}>
      <Link to="/contact">Contact Us</Link>
    </div>
    <div className="nav-links">
      <a href="http://www.goodspeedfilm.com/" alt="Chinese Page">
        中文
      </a>
    </div>
  </div>
);

const SocialMediaLinks = () => (
  <section className="social--container">
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
  </section>
);

const isActiveNav = (currentPath, route) => {
  return currentPath === route ? 'nav-links nav-links--active' : 'nav-links';
};

const Logo = () => (
  <Link className="logo-container" to="/">
    <img className="logo" src={require('../assets/logo.png')} alt="logo" />
  </Link>
);
