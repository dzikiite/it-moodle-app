import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ForgotPasswordPage = () => {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const { resetPassword } = useAuth();

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await resetPassword(email);
        } catch(err) {
            setError('Brak podanego adresu w bazie użytkowników')
        }

        setLoading(false);
    } 

    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Przypomnij hasło
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                lub 
                <Link to="/rejestracja" className="font-medium text-indigo-600 hover:text-indigo-500 ml-1">
                  zarejestruj się
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input value={email} onChange={handleChange} id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                </div>
                <p className="p-2 text-red-600">{error ? error : null}</p>
              </div>
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Zaloguj się
                  </Link>
                </div>
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Resetuj hasło
                </button>
              </div>
            </form>
          </div>
        </div>
     );
}
 
export default ForgotPasswordPage;