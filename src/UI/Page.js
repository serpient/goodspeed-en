import React from 'react';
import './Page.scss';
import Loader from './Loader';
import Header from './Header';

const Page = ({ location, background, children, loading }) => {
  return (
    <main className={`page page--white`}>
      <Header location={location} />
      {loading ? <Loader /> : children}
    </main>
  );
};

export default Page;
