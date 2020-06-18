import React from 'react';
import VideoRepair from './VideoRepair';
import Microvolume from './Microvolume';
import DigitalCollection from './DigitalCollection';
import PanoramicTour from './PanoramicTour';
import HighDefVideo from './HighDefVideo';
import TimelapseVideo from './TimelapseVideo';
import Ebook from './Ebook';
import MultimediaCloud from './MultimediaCloud';

const serviceItems = [
  {
    icon: 'fas fa-video',
    title: 'Video Repair',
    link: '/service/video-repair',
    subtext: `We can handle all kinds of video & audio production and digital communication problems for you. 8mm, 16mm, 35mm film repair and digitalization.`,
    component: <VideoRepair />,
  },
  {
    icon: 'fas fa-film',
    title: 'Microvolume scanning',
    link: '/service/micro-scan',
    subtext: `Use our miniaturized digital technology to help you preserve your precious historical data that has been destroyed by time`,
    component: <Microvolume />,
  },
  {
    icon: 'fas fa-users',
    title: `Digital Collection of Everyday Life`,
    link: '/service/digital-collection',
    subtext: `Effectively search for the required information, and turn ancient historical relics and files into easy to save and space efficient digital content.`,
    component: <DigitalCollection />,
  },
  {
    icon: 'fas fa-image',
    title: `Interactive panoramic tour`,
    link: '/service/panoramic',
    subtext: `The latest functions of the industry such as panoramic object embedding, scene self-broadcasting, scene explanation, custom skin, radar navigation and so on.`,
    component: <PanoramicTour />,
  },
  {
    iconSource: (
      <div className="icon--container">
        <div className="icon--4k">4K</div>
      </div>
    ),
    title: `4K 2K HD Film Production`,
    link: '/service/hd',
    subtext: `4K, 2K, HD high-definition video, giving you unlimited imagination space.`,
    component: <HighDefVideo />,
  },
  {
    icon: 'fas fa-building',
    title: `Time-lapsed Recordings`,
    link: '/service/time-lapse',
    subtext: `Leave a historical testimony to your proud construction method, from the first day of construction to the completion of the building.`,
    component: <TimelapseVideo />,
  },
  {
    icon: 'fas fa-book-open',
    title: `EBook/Electronic Catalog`,
    link: '/service/electronic-catalog',
    subtext: `Digitalize your catalogue to increase usability, convenience and interactivity for your customers.`,
    component: <Ebook />,
  },
  {
    icon: 'fas fa-cloud',
    title: `Multimedia cloud service`,
    link: '/service/cloud',
    subtext: `Let us convert your movies and audio files into online formats, which can be browsed on various computers and Internet-accessible tools.`,
    component: <MultimediaCloud />,
  },
];

export default serviceItems;
