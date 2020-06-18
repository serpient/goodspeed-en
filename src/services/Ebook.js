import React from 'react';

const Ebook = () => (
  <section>
    <h4>
      Time is changing, and the e-Book revolution has already arrived. Seize
      business opportunities right now, and let us provide you with the most
      competitive services.
    </h4>

    <br />

    <h4>Production of e-Catalogues</h4>
    <p>
      In the times of intense business competition, customers demand more
      diverse ways of publicity, from printing to the internet, smartphones to
      tablet PCs, there are many kinds of digital devices in the market. The
      question is how do we meet customers’ needs with the fastest, most
      economical, and perfect models? GoodSpeed gives you a one-stop and
      full-scaled e-Catalogue service.
    </p>
    <p>
      Make your e-Catalogue more competitive than traditional paper catalogue on
      usability, conveniency and interactivity. It also saves you printing time
      and production cost. Your e-catalogues will then be more diversified, thus
      attracting consumer’s attention.
    </p>

    <br />

    <h4>Advantages</h4>
    {[
      'Manual flipping mode',
      'Easy to transmit with smaller files',
      'Direct browse on webpages',
      'Display with videos',
      'Text search and recording',
      'Customize background images on catalogues',
      'Compatible with all Windows O/S',
      'Hyperlink on webpages to take orders',
      'Send pages by e-mail',
      'Connect FTP pages to download files',
      'Free printing',
      'Assure copyrighted text and graphic files',
      'Customize auto flipping promotion',
      'Extraction for CD-ROM',
      'Webpage browse without plug-in download program',
    ].map((list) => (
      <p key={list}>{list}</p>
    ))}
  </section>
);

export default Ebook;
