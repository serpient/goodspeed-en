import React from 'react';
import Page from '../UI/Page';
import './ClientsPage.scss';

const ClientsPage = ({}) => {
  const clientsContent = [
    'Council for Cultural Affairs (CCA)',
    'National Center for Traditional Arts',
    'National Taiwan Library',
    'National Central Library',
    'National Theater Concert Hall',
    'Labor Standards Inspection Office, Taipei City Government',
    'National Archives Administration',
    'GreTai Securities Market',
    'Taiwan External Trade Development Council',
    'Industrial Technology Research Institute',
    'Environmental Protection AdministrationCiti Private Bank',
    'Foxconn',
    'International Chlorella',
    'Microsoft',
    'Dell',
    'APV',
    'Intel',
    'National Geographic Channel',
    'Discovery Channel',
    'BBC',
    'CNN',
  ];
  return (
    <Page>
      <section className="clients-page--container">
        <h1>Clients</h1>
        <h3>
          GoodSpeed has cooperative project experiences with government agencies
          and private businesses. Our objectives are to listen to clients,
          realize their needs, and offer the best quality.
        </h3>
        <h2>Our Clients:</h2>
        <div className="clients-page--client-list">
          {clientsContent.map((client) => {
            return <h4>{client}</h4>;
          })}
        </div>
      </section>
    </Page>
  );
};

export default ClientsPage;
