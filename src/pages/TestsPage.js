import React from 'react';
import { useQuery } from '@apollo/client';
import { cmsData } from '../api/cms-data';
import { useHistory } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

const TestsPage = () => {
    const { loading, error, data } = useQuery(cmsData);
    const history = useHistory();

    if (loading) return <LoadingSpinner />;
    if (error) return `Error ${error}`;

    const handleStartTest = (slug) => {
        history.push(`/testy/${slug}`);
    }

    const testsList = data.allTests.map(test => {
        const { id, testName, testSlug } = test;
        return (<div key={id} className="shadow p-8 my-8 flex flex-col justify-center items-center">
            <h2 className="m-6 text-center text-2xl font-bold text-gray-900">{testName}</h2>
            <button 
            onClick={() => handleStartTest(testSlug)}
            className="text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white px-6 py-2 rounded-md text-sm font-medium"
            >
                Rozpocznij test
            </button>
        </div>
    )});

    

    return ( 
        <>
            <NavBar />
            <Header name="Testy" />
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {testsList}
            </div>
        </>
     );
}
 
export default TestsPage;