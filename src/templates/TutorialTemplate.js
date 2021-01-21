import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import { useQuery } from '@apollo/client';
import { cmsData } from '../api/cms-data';
import { useHistory } from 'react-router-dom'

const TutorialTemplate = props => {
    const { loading, error, data } = useQuery(cmsData)
    const { slug } = props.match.params;
    const history = useHistory();

    if (loading) return <LoadingSpinner />;
    if (error) return `Error! ${error.message}`;

    const material = data.allMaterials.filter(material => material.materialSlug === slug);
    if (!material.length) history.push('/error');
    const { materialTitle, materialDescription, materialCategory } = material[0];
    

    return ( 
        <div>
            <NavBar />
            <Header name={materialTitle} />
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 shadow my-6">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{materialCategory}</div>
                <p className="mt-2 text-gray-500">{materialDescription}</p>
            </div>
        </div>
     );
}
 
export default TutorialTemplate;