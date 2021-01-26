import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const { signUp } = useAuth();
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target;
        if(name === 'login') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword) {
            return setError('Podane hasła nie są takie same');
        } else if(password.length <= 5) {
            return setError('Hasło powinno mieć przynajmniej 6 znaków');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(email, password);
            setError('Konto zostało utworzone, zostaniesz przekierowany na stronę logowania');
            setTimeout(() => history.push('/'), 1500);
        } catch(error) {
            console.log(error.message);
            setError('Błąd podczas tworzenia konta');
        }

        setLoading(false);
    }

    return ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Zarejestruj się
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                lub 
                <Link 
                to='/' 
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                >
                  zaloguj się jeśli posiadasz konto
                </Link>
              </p>
            </div>
            <form 
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            >
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="login" className="sr-only">Login</label>
                  <input 
                  value={email} 
                  onChange={handleChange} 
                  id="login" 
                  name="login" 
                  type="email" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Hasło</label>
                  <input 
                  value={password} 
                  onChange={handleChange} 
                  id="password" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Hasło"
                  />
                </div>
                <div>
                  <label htmlFor="password-confirm" className="sr-only">Potwierdź Hasło</label>
                  <input 
                  value={confirmPassword} 
                  onChange={handleChange} 
                  id="password-confirm" 
                  name="password-confirm" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                  placeholder="Potwierdź Hasło"
                  />
                </div>
                <p className="p-2 text-red-600">{error ? error : null}</p>
              </div>
              <div>
                <button 
                disabled={loading} 
                type="submit" 
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Zarejestruj
                </button>
              </div>
            </form>
          </div>
        </div>
     );
}
 
export default RegisterPage;