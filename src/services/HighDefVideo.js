import React from 'react';

const HighDefVideo = () => (
  <section>
    <div className="image-grid">
      {[
        require('../assets/f07.jpg'),
        // require('../assets/f08.jpg'),
        require('../assets/f09.jpg'),
        require('../assets/f10.jpg'),
        require('../assets/f11.jpg'),
      ].map((image) => (
        <img key={`${image}`} src={image} alt="4k video process" />
      ))}
    </div>
    <h4>
      Our professional photography and complete planning content covers all
      details. GoodSpeed holds sensible and reasonable attitude towards
      film/video production. Not only do we produce exquisite and touching films
      for clients, but also take account of connotation and depth of the works.
      GoodSpeed believes in continuous innovation. We insist on pursuing higher
      standard in line with the world and challenge the highest quality of
      film/video production with professional equipment, top talents coupled
      with the most advanced digital technology.
    </h4>

    <br />

    <img
      src={require('../assets/4K-HDTV-relative-sizes8.jpg')}
      alt="4k sizes"
    />

    <h4>HD/4K Film & Video Production</h4>
    <p>
      GoodSpeed has more than 20 years of experience on filming. Our works cover
      corporate image introduction, commercials, documentaries, charity films,
      and so on. We are able to capture shots from different angles to elaborate
      splendid effects and preserve every spectacular image.
    </p>

    <br />

    <h4>Film Digitization Service</h4>
    <p>
      daVinci system satisfies all kinds of demand on color mix and 3D color
      mix. Around the world, daVinci has become mainstream on color mix of
      movies, TV commercials, documentary, TV soap operas and music videos. With
      so many works with daVinci system, other rivals are lagging far behind.
    </p>

    <br />

    <h4>Multilingual Subtitle and Voice-Over</h4>
    <p>
      Subtitling and voice-over is the key to opening the Asian market Goodspeed
      provides streamline software, and cost effective services to producers.
    </p>
  </section>
);

export default HighDefVideo;
