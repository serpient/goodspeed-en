import React from 'react';
import './Page.scss';
import Loader from './Loader';

const Page = ({ location, background, children, loading }) => {
  return (
    <main className={`page page--white`}>
      {loading ? <Loader /> : children}
    </main>
  );
};

export default Page;
