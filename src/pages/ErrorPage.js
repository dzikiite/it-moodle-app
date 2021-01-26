import React from 'react';

import NavBar from '../components/NavBar';
import Header from '../components/Header';

const ErrorPage = () => {
    return ( 
        <>
            <NavBar />
            <Header name="Error 404"/>
            <div className="flex h-full items-center justify-center my-14">
                <h2 className="text-3xl font-bold leading-tight text-gray-900">
                    Coś poszło nie tak :(
                </h2>
            </div>
        </>
     );
}
 
export default ErrorPage;