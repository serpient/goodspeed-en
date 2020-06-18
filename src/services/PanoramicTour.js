import React from 'react';

const PanoramicTour = () => (
  <section>
    <iframe
      title="Panoramic Tour"
      src="http://www.goodspeedfilm.com/360%20panotour/360 viewer.html"
      style={{ height: '500px', marginBottom: '20px', width: '100%' }}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>

    <br />
    <br />

    <h4>Features</h4>
    {[
      '★ Support gravity sensing, transparent hot zone, smart video embedding, dynamic hotspot walking, multi-layer map, halo flash special effects, panorama host, object panorama embedding, scene self-play, scene commentary, custom skin, radar navigation and other industries Latest features.',
      '★ Watch online; support almost all systems such as windows, Linux, Mac, Android, IOS, etc.',
      '★ Regular updates and upgrades to maintain leading technology.',
      '★ Panoramic production foundation, rich experience, answer all kinds of difficult problems for you.',
    ].map((list) => (
      <p key={list}>{list}</p>
    ))}
  </section>
);

export default PanoramicTour;
