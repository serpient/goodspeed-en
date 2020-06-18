import React from 'react';

const VideoRepair = () => (
  <section>
    <h4>
      Digital film restoration requires scanning, digital restoration and
      dimming. Films are corrected digitally, and are then permanently preserved
      through digital film copying. By doing so, people of the older generation
      are able to reminisce past times; moreover, people of the new generation
      are also given the chance to revisit traces of history.
    </h4>

    <br />

    <h4>We provide the following film restoration services:</h4>
    {[
      '8mm/16mm, 35mm film restoration',
      '16mm/35mm film digital restoration',
      'Conversion of digital formats',
      'Adjustment of film source material',
      '16mm/35mm Telecine service',
    ].map((list) => (
      <p key={list}>{list}</p>
    ))}

    <br />

    <h4>Knowing film</h4>
    <p>
      The format of film includes 8 mm, super 8 mm, 16 mm, 35 mm, and 72 mm, and
      mm means the width of film. The bigger the number, the better quality of
      the film. Movies generally use 35 mm, which means the film is 3.5 cm wide.
      In addition, some special films use 72 mm. Commercials, short films, and
      music videos usually use 16 mm to shoot. Because the gradation of film is
      rich, the contrast is softer and the screen in which it is played upon is
      also bigger. Therefore, it is easier to see the film’s rich gradation in
      the dark, and it can handle lights better.
    </p>

    <br />

    <h4>Restoration process of film</h4>
    {[
      'Stage 1: Testing',
      'Stage 2: Restoration',
      'Stage 3: Reproduction',
      'Stage 4: Archive',
    ].map((list) => (
      <p key={list}>{list}</p>
    ))}
  </section>
);

export default VideoRepair;
