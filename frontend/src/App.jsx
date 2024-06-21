import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import MovieDetails from './components/MovieDetails';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={MovieList} exact />
        <Route path="/add" component={AddMovie} />
        <Route path="/edit/:id" component={EditMovie} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
};

export default App;
