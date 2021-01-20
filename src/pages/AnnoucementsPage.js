import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const AnnoucementsPage = () => {
  return ( 
    <div>
      <NavBar />
      <Header name="Ogłoszenia" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
 
export default AnnoucementsPage;