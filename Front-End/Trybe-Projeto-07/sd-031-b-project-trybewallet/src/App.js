import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carteira" component={ Wallet } />
      </Switch>
    </main>
  );
}

export default App;
