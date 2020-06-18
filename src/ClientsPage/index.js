import React from 'react';
import Page from '../UI/Page';
import './ClientsPage.scss';

const ClientsPage = () => {
  const clientsContent = [
    {
      label: 'Council for Cultural Affairs (CCA)',
      logoLink: require('../assets/ministry_of_culture.jpg'),
    },
    {
      label: 'National Center for Traditional Arts',
      logoLink: require('../assets/national_center_for_traditional_arts.png'),
    },
    {
      label: 'National Taiwan Library',
      logoLink: require('../assets/national_taiwan_library.png'),
    },
    {
      label: 'National Central Library',
      logoLink: require('../assets/national_central_library.png'),
    },
    {
      label: 'National Zhongzheng Cultural Center',
      // logoLink: require('../assets/ministry_of_culture.jpg'),
    },
    {
      label: 'Labor Standards Inspection Office, Taipei City Government',
      // logoLink: require('../assets/ministry_of_culture.jpg'),
    },
    {
      label: 'National Archives Administration',
      logoLink: require('../assets/national_archive.png'),
    },
    // {
    //   label: 'GreTai Securities Market',
    //   logoLink: require('../assets/ministry_of_culture.jpg'),
    // },
    {
      label: 'Taiwan External Trade Development Council',
      // logoLink: require('../assets/ministry_of_culture.jpg'),
    },
    {
      label: 'Industrial Technology Research Institute',
      // logoLink: require('../assets/ministry_of_culture.jpg'),
    },
    // {
    //   label: 'Environmental Protection Administration',
    //   logoLink: require('../assets/ministry_of_culture.jpg'),
    // },
    {
      label: 'Foxconn',
      logoLink: require('../assets/foxconn.png'),
    },
    {
      label: 'Citi Private Bank',
      logoLink: require('../assets/citi_private.jpg'),
    },
    {
      label: 'Microsoft',
      logoLink: require('../assets/microsoft.png'),
    },
    {
      label: 'Dell',
      logoLink: require('../assets/dell.png'),
    },
    // {
    //   label: 'APV',
    //   logoLink: require('../assets/ministry_of_culture.jpg'),
    // },
    {
      label: 'Intel',
      logoLink: require('../assets/intel.png'),
    },
    {
      label: 'National Geographic Channel',
      logoLink: require('../assets/national_geographic_center.png'),
    },
    {
      label: 'Discovery Channel',
      logoLink: require('../assets/discovery_channel.jpg'),
    },
    {
      label: 'BBC',
      logoLink: require('../assets/bbc.png'),
    },
    {
      label: 'CNN',
      logoLink: require('../assets/cnn.jpg'),
    },
  ];
  return (
    <Page>
      <section className="clients-page--container">
        <section className="clients-page--header">
          <h1>Clients</h1>
        </section>
        <section className="clients-page--content-container">
          <h2>
            GoodSpeed has cooperative project experiences with government
            agencies and private businesses. Our objectives are to listen to
            clients, realize their needs, and offer the best quality.
          </h2>
          <div className="clients-page--client-list">
            {clientsContent.map((client) => {
              if (client.logoLink) {
                return (
                  <img
                    className="clients-page--client-list-img"
                    alt={client.label}
                    src={client.logoLink}
                  />
                );
              } else {
                return (
                  <h4 className="clients-page--client-list-logo">
                    {client.label}
                  </h4>
                );
              }
            })}
          </div>
        </section>
      </section>
    </Page>
  );
};

export default ClientsPage;
