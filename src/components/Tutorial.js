import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Tutorial = ({ props }) => {
    const { materialTitle, materialCategory, materialDescription, materialSlug } = props;

    const shortMaterialDescription = materialDescription.slice(0,60);
    
    return ( 
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{materialCategory}</div>
                    <Link to={`/baza-wiedzy/${materialSlug}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{materialTitle}</Link>
                    <ReactMarkdown children={shortMaterialDescription}></ReactMarkdown>
                </div>
            </div>
        </div>
     );
}
 
export default Tutorial;