import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import { useQuery } from '@apollo/client';
import { cmsData } from '../api/cms-data';
import { useHistory } from 'react-router-dom'

const TutorialTemplate = props => {
    const { loading, error, data } = useQuery(cmsData)
    const { slug } = props.match.params;
    const history = useHistory();

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const material = data.allMaterials.filter(material => material.materialSlug === slug);
    if (!material.length) history.push('/error');
    const { materialTitle, materialDescription, materialCategory } = material[0];
    

    return ( 
        <div>
            <NavBar />
            <Header name={materialTitle} />
            {materialTitle}
        </div>
     );
}
 
export default TutorialTemplate;