import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Registro from '../containers/Registro'
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout.jsx';
import Player from '../containers/Player';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={isLogged ? Home : Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/player/:id" component={isLogged ? Player : Login} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;