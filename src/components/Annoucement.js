import React from 'react';
import ReactMarkdown from 'react-markdown';

const Annoucement = ({ props }) => {
    const { annoucementTitle, annoucementDescription, annoucementDate } = props;

    return ( 
        <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Termin: {annoucementDate}</div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black pb-3">{annoucementTitle}</p>
                    <ReactMarkdown children={annoucementDescription}></ReactMarkdown>
                </div>
            </div>
        </div>
     );
}
 
export default Annoucement;