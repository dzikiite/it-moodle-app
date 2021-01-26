import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isUserMenuOpen, setIsUserMenuOpen ] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleOpenMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  const handleUserMenuOpen = () => {
    setIsUserMenuOpen(prevState => !prevState);
  }

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/');
    } catch(err) {
      console.error(err)
    }
  }

  return ( 
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink 
                to="/baza-wiedzy" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Baza wiedzy
                </NavLink>
                <NavLink 
                to="/ogloszenia" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Ogłoszenia
                </NavLink>
                <NavLink 
                to="/przeslij-zadanie" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Prześlij zadanie
                </NavLink>
                <NavLink 
                to="/testy" 
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testy
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div>
                  <button 
                  onClick={handleUserMenuOpen} 
                  className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
                  id="user-menu" 
                  aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                <div 
                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${isUserMenuOpen ? '' : 'hidden'}`} 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="user-menu"
                >
                  <button 
                  onClick={handleLogout} 
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                  role="menuitem"
                  >
                    Wyloguj
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
            onClick={handleOpenMenu} 
            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
               <svg className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${isMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
          to="/baza-wiedzy" 
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Baza wiedzy
          </NavLink>
          <NavLink 
          to="/ogloszenia" 
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Ogłoszenia
          </NavLink>
          <NavLink 
          to="/przeslij-zadanie" 
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Prześlij zadanie
          </NavLink>
          <NavLink 
          to="/testy" 
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
          activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Testy
          </NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">{currentUser.email}</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <button 
            onClick={handleLogout} 
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
            >
              Wyloguj
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;