import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import ScientificMaterial from '../components/ScientificMaterial';
import { cmsData } from '../api/cms-data';
import { useQuery } from '@apollo/client';

const TutorialsPage = () => {
  const { loading, error, data } = useQuery(cmsData);

  if (loading) return <LoadingSpinner />;
  if (error) return `Error! ${error.message}`;

  const scientificMaterial = data.allMaterials.map(material => (
    <ScientificMaterial key={material.id} props={material}/>
  ))

  return ( 
    <div>
      <NavBar />
      <Header name="Baza wiedzy"/>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 px-4 py-6 sm:px-0">
              {scientificMaterial}
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default TutorialsPage;