import React from 'react';

const TimelapseVideo = () => (
  <section>
    <iframe
      title="Time lapse example"
      style={{ width: '100%', height: '500px', marginBottom: '20px' }}
      src="https://www.youtube.com/embed/MnaxIm8BlDw"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    <h4>What is Time-Lapse Photography</h4>
    <p>
      Time-lapse photography is a special way of shooting. You can make a
      long-running continuous picture into a movie, which is often used to shoot
      changing scenery (such as natural scenery, crowd movement, etc.)
    </p>

    <br />

    <h4>Why create Time-Lapse Photography</h4>
    <p>
      It is not easy for general photography equipment to automatically shoot
      for a long time. We use a high-quality full-frame camera to record your
      building from the first day of construction until the completion of the
      building. This ensures you have an accurate recording to use as a valuable
      relic.
    </p>
  </section>
);

export default TimelapseVideo;
