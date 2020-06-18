import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer--container">
      <Logo />
      {footerData.map((data) => {
        return (
          <section className="footer-data">
            <h1>{data.label}</h1>
            <h3>{data.data}</h3>
          </section>
        );
      })}
      <Link className="footer--button">Contact Us</Link>
    </section>
  );
};

export default Footer;

const Logo = () => (
  <Link className="logo-container" to="/">
    <img
      className="logo"
      src={require('../assets/goodspeedfilm_logo1.gif')}
      alt="logo"
    />
  </Link>
);

const footerData = [
  {
    label: 'Phone Number',
    data: '02-2397-9987',
  },
  {
    label: 'Fax Number',
    data: '02-2397-9687',
  },
  {
    label: 'Business Hours',
    data: 'Monday to Friday 09:30-18:30',
  },
];
