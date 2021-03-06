import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { clientApollo } from './api/apollo-config';
import { AuthProvider } from './contexts/AuthContext';
import { 
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import AnnouncementsPage from './pages/AnnoucementsPage';
import TutorialsPage from './pages/TutorialsPage';
import TutorialTemplate from './templates/TutorialTemplate';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UploadPage from './pages/UploadPage';
import TestsPage from './pages/TestsPage';
import TestTemplate from './templates/TestTemplate';

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={clientApollo}>
        <Router>
          <Switch>
            <Route path='/' exact component={LoginPage} />
            <Route path='/rejestracja' component={RegisterPage} />
            <Route path='/przypomnij-haslo' component={ForgotPasswordPage} />
            <PrivateRoute path='/baza-wiedzy' exact component={TutorialsPage} />
            <PrivateRoute path='/baza-wiedzy/:slug' component={TutorialTemplate} />
            <PrivateRoute path='/ogloszenia' component={AnnouncementsPage} />
            <PrivateRoute path='/przeslij-zadanie' component={UploadPage} />
            <PrivateRoute path='/testy' exact component={TestsPage} />
            <PrivateRoute path='/testy/:slug' component={TestTemplate} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
