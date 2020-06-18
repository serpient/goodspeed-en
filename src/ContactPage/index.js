import React from 'react';
import Page from '../UI/Page';
import './ContactPage.scss';
import FormContainer from '../UI/FormContainer';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FieldWithError } from '../UI/FormParts';

const contactSchema = Yup.object().shape({
  full_name: Yup.string().required('Your name is required'),
  email: Yup.string().email().required('Your email is required'),
  phone: Yup.string().required('Your phone number is required'),
  subject: Yup.string().notRequired(),
  message: Yup.string().notRequired(),
});

const ContactPage = () => {
  const onSubmit = (values) => {
    console.log(values);
    fetch(
      'https://z5df64mkl7.execute-api.us-east-1.amazonaws.com/goodspeed/form',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    )
      .then((response) => console.log({ response }))
      .then((data) => console.log({ data }))
      .catch((error) => console.error({ error }));
  };
  return (
    <Page>
      <section className="contact-page--container">
        <section className="contact-page--header">
          <h1>Contact Us</h1>
        </section>
        <section className="contact-page--content">
          <FormContainer>
            <h2>Send a Message</h2>
            <Formik
              validationSchema={contactSchema}
              initialValues={{
                full_name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              }}
              onSubmit={(values, actions) => {
                onSubmit(values);
              }}
            >
              <Form>
                <FieldWithError
                  label={`Your Name`}
                  name={'full_name'}
                  type="text"
                />
                <FieldWithError label={`Email`} name={'email'} type="email" />
                <FieldWithError
                  label={`Contact Number`}
                  name={'phone'}
                  type="tel"
                />
                <FieldWithError
                  label={`Subject`}
                  name={'subject'}
                  type="text"
                />
                <FieldWithError
                  label={`Message`}
                  name={'message'}
                  type="textarea"
                  isTextarea={true}
                />
                <button className="btn-primary" type="submit">
                  Send
                </button>
              </Form>
            </Formik>
          </FormContainer>
          <div className="contact-page--map">
            <iframe
              title={'Office location'}
              src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d7229.5088346829825!2d121.526542!3d25.042407!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.0424074!2d121.52654159999999!5e0!3m2!1sen!2sus!4v1592444900531!5m2!1sen!2sus"
              height="450"
              frameBorder="0"
              style={{ border: 0, maxWidth: '100%', width: '100%' }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex="0"
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
