import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import LoadingSpinner from '../components/LoadingSpinner';
import Annoucement from '../components/Annoucement';
import { cmsData } from '../api/cms-data';
import { useQuery } from '@apollo/client';

const AnnoucementsPage = () => {
  const { loading, error, data } = useQuery(cmsData);

  if (loading) return <LoadingSpinner />
  if (error) return `Error: ${error.message}`

  const annoucement = data.allAnnoucements.map(annoucement => (
    <Annoucement key={annoucement.id} props={annoucement}/>
  ));

  return ( 
    <div>
      <NavBar />
      <Header name="Ogłoszenia" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 px-4 py-6 sm:px-0">
              {annoucement}
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default AnnoucementsPage;