import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreateCard from './components/CreateCard';
import Header from './components/Header';
import EditCard from './components/EditCard';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/cadastro" component={ CreateCard } />
        <Route path="/editar/:id" component={ EditCard } />
        <Route path="/" component={ LandingPage } />
      </Switch>
    </>
  );
}

export default App;
