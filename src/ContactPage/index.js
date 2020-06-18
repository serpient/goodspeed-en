import React from 'react';
import Page from '../UI/Page';
import './ContactPage.scss';
import FormContainer from '../UI/FormContainer';

const ContactPage = ({}) => {
  return (
    <Page>
      <section className="contact-page--container">
        <section className="contact-page--header">
          <h1>Contact Us</h1>
        </section>
        <section className="contact-page--content">
          <FormContainer>
            <h2>Send a Message</h2>
            <form name="contact" netlify>
              <p>
                <label>
                  Your Name <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email <input type="email" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Contact Number <input type="tel" name="phone" />
                </label>
              </p>
              <p>
                <label>
                  Subject <input type="text" name="subject" />
                </label>
              </p>
              <p>
                <label>
                  Message <textarea name="message" />
                </label>
              </p>
              <button className="btn-primary" type="submit">
                Send
              </button>
            </form>
          </FormContainer>
          <div className="contact-page--map">
            <iframe
              title={'Office location'}
              src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d7229.5088346829825!2d121.526542!3d25.042407!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.0424074!2d121.52654159999999!5e0!3m2!1sen!2sus!4v1592444900531!5m2!1sen!2sus"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0, maxWidth: '100%' }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <h2>Address</h2>
            <p>
              8th Floor, No. 23, Section 1, Hangzhou South Road, Zhongzheng
              District, Taipei City
            </p>
            <h2>Business Hours</h2>
            <p>09:30 – 18:30</p>
            <h2>Phone Number</h2>
            <p>(02) 2397-9987</p>
            <h2>Email</h2>
            <p>service@goodspeed.com.tw</p>
          </div>
        </section>
      </section>
    </Page>
  );
};

export default ContactPage;
